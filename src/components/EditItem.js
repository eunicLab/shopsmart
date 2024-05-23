import React, { useState } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  sendListObject,
  sendSelectedList,
  sendSelectedItem,
  sendOpenEditTitleState,
} from '../actions';
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ListItems from './ListItems';
import { IoMdArrowRoundBack } from 'react-icons/io';

let EditItem = (props) => {
  const dispatch = useDispatch();
  const listObject = useSelector((state) => state.listObject);
  const selectedList = useSelector((state) => state.selectedList);
  const selectedItem = useSelector((state) => state.selectedItem);
  const [listItem, setListItem] = useState(selectedItem.item);
  const [listPrice, setListPrice] = useState(selectedItem.price);
  const loginData = useSelector((state) => state.loginData);
  const id = useSelector((state) => state.id);
  var currentListObject = listObject;

  let handleListItem = (enteredText) => {
    setListItem(enteredText.target.value);
  };

  let handleItemPrice = (enteredText) => {
    setListPrice(enteredText.target.value);
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
          'https://ishopsmartbackend.azurewebsites.net/api/stuff/' + id,
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

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/ListItems' exact component={ListItems} />{' '}
        <div className='fullbackground'>
          <div className='NavigationBar'>
            <Link exact to='/ListItems' className='whiteIcon'>
              <IoMdArrowRoundBack className='backIcon' />
            </Link>
            <span className='navTitle'> Edit Item</span>
          </div>
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
            <Link
              className='editDone'
              exact
              to='/ListItems'
              onClick={editItemHandler}>
              Done
            </Link>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};
export default EditItem;
