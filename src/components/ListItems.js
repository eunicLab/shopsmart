import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OneItem from './OneItem';
import '../App.css';
import { sendListObject, sendSelectedList, sendSelectedItem } from '../actions';
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';
import MyLists from './MyLists';
import EditItem from './EditItem';

let ListItems = () => {
  const selectedList = useSelector((state) => state.selectedList);
  const selectedItem = useSelector((state) => state.selectedItem);

  const listObject = useSelector((state) => state.listObject);
  const loginData = useSelector((state) => state.loginData);
  const [listItem, setListItem] = useState('');
  const id = useSelector((state) => state.id);

  let handleListItem = (enteredText) => {
    setListItem(enteredText.target.value);
  };
  const dispatch = useDispatch();
  var currentListObject = listObject;
  var listId = Math.random().toString();
  const addItemHandler = (e) => {
    e.preventDefault();
    if (listItem !== '') {
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
      dispatch(sendListObject(currentListObject)),
      dispatch(
        sendSelectedItem({
          id: '',
          item: '',
          price: 0,
          sorted: '',
        })
      )
    );
  };

  function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder === -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }

  const ListOfItems = selectedList.list
    .sort(dynamicSort('item'))
    .sort(dynamicSort('sorted'))
    .map((item) => <OneItem item={item} key={item.id} />);

  const total = () => {
    let total = 0;
    for (let i in selectedList.list) {
      total += parseFloat(selectedList.list[i].price);
    }
    return total;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MyLists} />
        <Route exact path='/EditItem' component={EditItem} />
        <div className='fullbackground'>
          <div className='unscrollable'>
            <div className='NavigationBar'>
              <Link exact to='/' className='whiteIcon'>
                <IoMdArrowRoundBack className='backIcon' />
              </Link>
              <span className='navTitle'>{selectedList.title}</span>
              <span className='editIcon2'>
                {total()}/{selectedList.budget}
              </span>
              <Link
                exact
                to='/EditItem'
                className={
                  selectedItem.item !== '' ? 'whiteIcon' : 'noDisplay'
                }>
                <MdModeEdit className='editIcon' />
              </Link>
              <MdDelete
                className={
                  selectedItem.item !== '' ? 'deleteIcon' : 'noDisplay'
                }
                onClick={removeItemHandler}
              />
            </div>
            <form onSubmit={addItemHandler} className='inputField'>
              <input
                placeholder='Add Item'
                className='textField'
                value={listItem}
                onChange={handleListItem}
                type='text'
              />
              <button type='submit' className='createListButton'>
                ADD
              </button>
            </form>
          </div>
          <div className='itemsBackground'>
            <div className='allTitles'>
              <div className='allItems'>{ListOfItems}</div>
            </div>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};
export default ListItems;
