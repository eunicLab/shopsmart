import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { useSelector, useDispatch } from 'react-redux';
import OneItem from './OneItem';
import '../App.css';
import { Redirect } from 'react-router-dom';
import { sendListObject, sendSelectedList } from '../actions';
import axios from 'axios';

let ListItems = (props) => {
  const [listItem, setListItem] = useState('');

  let handleListItem = (enteredText) => {
    setListItem(enteredText.target.value);
  };
  const selectedList = useSelector((state) => state.selectedList);
  const selectedItem = useSelector((state) => state.selectedItem);
  const openEditTitle = useSelector((state) => state.openEditTitle);
  const openList = useSelector((state) => state.openList);
  const [AllListItems, setAllListItems] = useState(selectedList.list);
  const listObject = useSelector((state) => state.listObject);
  const loginData = useSelector((state) => state.loginData);
  const id = useSelector((state) => state.id);

  const dispatch = useDispatch();
  var currentListObject = listObject;
  var listId = Math.random().toString();
  const addItemHandler = () => {
    if (listItem !== '') {
      setAllListItems((currentAllListItems) => [
        ...currentAllListItems,
        {
          item: listItem,
          id: listId,
          price: 0,
          checked: false,
          sorted: 'false',
        },
      ]);
      setListItem('');
      dispatch(
        sendSelectedList({
          id: selectedList.id,
          budget: selectedList.budget,
          title: selectedList.title,
          list: [
            ...selectedList.list,
            {
              item: listItem,
              id: listId,
              price: 0,
              checked: false,
              sorted: 'false',
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
              ...selectedList.list,
              {
                item: listItem,
                id: listId,
                price: 0,
                checked: false,
                sorted: 'false',
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
    }
  };

  const removeItemHandler = () => {
    setAllListItems((AllListItem) => {
      return selectedList.list.filter(
        (number) => number.id !== selectedItem.id
      );
    });
    dispatch(
      sendSelectedList({
        id: selectedList.id,
        title: selectedList.title,
        budget: selectedList.budget,
        list: selectedList.list.filter(
          (number) => number.id !== selectedItem.id
        ),
      })
    );
    for (let i in listObject) {
      if (listObject[i].id === selectedList.id) {
        currentListObject[i] = {
          id: selectedList.id,
          title: selectedList.title,
          budget: selectedList.budget,
          list: selectedList.list.filter(
            (number) => number.id !== selectedItem.id
          ),
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

  function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }

  const ListOfItems = selectedList.list
    .sort(dynamicSort('item'))
    .sort(dynamicSort('sorted'))
    .map((item) => <OneItem item={item} />);

  return !openEditTitle && openList === true ? (
    <div>
      <NavigationBar title={selectedList.title} onDelete={removeItemHandler} />
      <input
        placeholder='Add Item'
        className='textField'
        value={listItem}
        onChange={handleListItem}
        type='text'
      />
      <button onClick={addItemHandler} className='createListButton'>
        ADD
      </button>
      <div className='allItems'>{ListOfItems}</div>
    </div>
  ) : !openEditTitle && openList === false ? (
    <Redirect push to='/MyLists' />
  ) : (
    <Redirect push to='/EditTitle' />
  );
};
export default ListItems;
