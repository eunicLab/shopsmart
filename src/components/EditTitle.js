import React, { useState } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  sendListObject,
  sendSelectedList,
  sendSelectedItem,
  sendOpenEditTitleState,
} from '../actions';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

let EditTitle = (props) => {
  const dispatch = useDispatch();
  const listObject = useSelector((state) => state.listObject);
  const editType = useSelector((state) => state.editType);
  const selectedList = useSelector((state) => state.selectedList);
  const [listTitle, setListTitle] = useState(selectedList.title);
  const [listBudget, setListBudget] = useState(selectedList.budget);
  const selectedItem = useSelector((state) => state.selectedItem);
  const [listItem, setListItem] = useState(selectedItem.item);
  const [listPrice, setListPrice] = useState(selectedItem.price);
  const openEditTitle = useSelector((state) => state.openEditTitle);
  const loginData = useSelector((state) => state.loginData);
  const id = useSelector((state) => state.id);
  var currentListObject = listObject;

  let handleListTitle = (enteredText) => {
    setListTitle(enteredText.target.value);
  };

  let handleListBudget = (enteredText) => {
    setListBudget(enteredText.target.value);
  };
  let handleListItem = (enteredText) => {
    setListItem(enteredText.target.value);
  };

  let handleItemPrice = (enteredText) => {
    setListPrice(enteredText.target.value);
  };

  let editTitleHandler = () => {
    var listSelected = selectedList;
    dispatch(
      sendSelectedList({
        id: '',
        title: '',
        list: [],
        budget: 0,
      })
    );
    dispatch(sendOpenEditTitleState(false));
    for (let i in listObject) {
      if (listObject[i].id === listSelected.id) {
        currentListObject[i] = {
          id: listSelected.id,
          title: listTitle,
          list: listSelected.list,
          budget: listBudget,
        };
      }
    }

    return (
      axios
        .put(
          'https://shopsmart1234.herokuapp.com/api/stuff/' + id,
          {
            listObject: currentListObject,
          },
          {
            headers: { Authorization: `Bearer ${loginData.token}` },
          }
        )
        .then((res) => {
          console.log('updated successfully');
        }),
      dispatch(sendListObject(currentListObject))
    );
  };

  let editItemHandler = () => {
    var itemSelected = selectedItem;
    dispatch(sendOpenEditTitleState(false));
    dispatch(
      sendSelectedItem({
        id: '',
        item: '',
        price: 0,
        checked: false,
        sorted: 'false',
      })
    );

    dispatch(
      sendSelectedList({
        id: selectedList.id,
        title: selectedList.title,
        budget: selectedList.budget,
        list: [
          ...selectedList.list.filter(
            (number) => number.id !== itemSelected.id
          ),
          {
            item: listItem,
            id: itemSelected.id,
            price: listPrice,
            checked: itemSelected.checked,
            sorted: itemSelected.sorted,
          },
        ],
      })
    );

    for (let i in listObject) {
      if (listObject[i].id === selectedList.id) {
        currentListObject[i] = {
          id: selectedList.id,
          title: selectedList.title,
          budget: selectedList.budget,
          list: [
            ...listObject[i].list.filter(
              (number) => number.id !== selectedItem.id
            ),
            {
              item: listItem,
              id: selectedItem.id,
              price: listPrice,
              checked: itemSelected.checked,
              sorted: itemSelected.sorted,
            },
          ],
        };
      }
    }
    return (
      axios
        .put(
          'https://shopsmart1234.herokuapp.com/api/stuff/' + id,
          {
            listObject: currentListObject,
          },
          {
            headers: { Authorization: `Bearer ${loginData.token}` },
          }
        )
        .then((res) => {
          console.log('updated successfully');
        }),
      dispatch(sendListObject(currentListObject))
    );
  };

  return editType === 'title' && openEditTitle === true ? (
    <div className='editPage'>
      <h6 className='label'>List Name</h6>
      <p>
        <input
          value={listTitle}
          className='listEditable'
          onChange={handleListTitle}
          type='text'
        />
      </p>
      <h6 className='label'>Budget</h6>
      <input
        placeholder='$ 0'
        className='listEditable'
        onChange={handleListBudget}
        value={listBudget}
      />
      <button className='editDone' onClick={editTitleHandler}>
        Done
      </button>
      <button
        className='cancelEdit'
        onClick={() => {
          dispatch(sendOpenEditTitleState(false));

          dispatch(
            sendSelectedList({
              id: '',
              title: '',
              budget: 0,
              list: [],
            })
          );
        }}>
        Cancel
      </button>
    </div>
  ) : editType === 'item' && openEditTitle === true ? (
    <div className='editPage'>
      <h6 className='label'>Item Name</h6>
      <p>
        <input
          value={listItem}
          className='listEditable'
          onChange={handleListItem}
          type='text'
        />
      </p>
      <h6 className='label'>Price</h6>
      <input
        placeholder='$ 0'
        className='listEditable'
        onChange={handleItemPrice}
        value={listPrice}
        type='number'
      />
      <button className='editDone' onClick={editItemHandler}>
        Done
      </button>
      <button
        className='cancelEdit'
        onClick={() => {
          dispatch(sendOpenEditTitleState(false));
          dispatch(
            sendSelectedItem({
              id: '',
              item: '',
              price: 0,
              checked: false,
              sorted: 'false',
            })
          );
        }}>
        Cancel
      </button>
    </div>
  ) : !openEditTitle && editType === 'item' ? (
    <Redirect push to='/ListItems' />
  ) : !openEditTitle && editType === 'title' ? (
    <Redirect push to='/MyLists' />
  ) : (
    <Redirect push to='/' />
  );
};
export default EditTitle;
