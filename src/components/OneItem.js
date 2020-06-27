import React, { useState } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  sendSelectedItem,
  sendNavButtonDisplay,
  sendEditType,
  sendSelectedList,
  sendListObject,
} from '../actions';
import axios from 'axios';

let TitleList = (props) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.selectedItem);
  const selectedList = useSelector((state) => state.selectedList);
  const listObject = useSelector((state) => state.listObject);
  const [checkedStatus, setCheckedStatus] = useState(props.item.checked);
  const loginData = useSelector((state) => state.loginData);
  const id = useSelector((state) => state.id);
  return (
    <div
      className={
        props.item.id === selectedItem.id && props.item.checked === false
          ? 'listItemSelected'
          : props.item.id !== selectedItem.id && props.item.checked === false
          ? 'listItem'
          : props.item.id === selectedItem.id && props.item.checked === true
          ? 'listItemSelectedChecked'
          : props.item.id !== selectedItem.id && props.item.checked === true
          ? 'listItemChecked'
          : 'listItem'
      }>
      <input
        type='checkbox'
        className='checkbox'
        checked={props.item.checked}
        onChange={() => {
          setCheckedStatus(!checkedStatus);
          dispatch(
            sendSelectedList({
              id: selectedList.id,
              title: selectedList.title,
              budget: selectedList.budget,
              list: [
                ...selectedList.list.filter(
                  (number) => number.id !== props.item.id
                ),
                {
                  item: props.item.item,
                  id: props.item.id,
                  price: props.item.price,
                  checked: !checkedStatus,
                  sorted: checkedStatus ? 'false' : 'true',
                },
              ],
            })
          );
          var currentListObject = listObject;
          for (let i in listObject) {
            if (listObject[i].id === selectedList.id) {
              currentListObject[i] = {
                id: selectedList.id,
                title: selectedList.title,
                budget: selectedList.budget,
                list: [
                  ...listObject[i].list.filter(
                    (number) => number.id !== props.item.id
                  ),
                  {
                    item: props.item.item,
                    id: props.item.id,
                    price: props.item.price,
                    checked: !checkedStatus,
                    sorted: checkedStatus ? 'false' : 'true',
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
        }}
      />
      <div
        onClick={(event) => {
          if (selectedItem.id === props.item.id) {
            dispatch(
              sendSelectedItem({
                id: '',
                item: '',
                price: 0,
                sorted: '',
              })
            );
            dispatch(sendNavButtonDisplay(false));
          } else {
            dispatch(
              sendSelectedItem({
                id: props.item.id,
                item: props.item.item,
                price: props.item.price,
                checked: props.item.checked,
                sorted: props.item.sorted,
              })
            );
            dispatch(sendNavButtonDisplay(true));
            dispatch(sendEditType('item'));
          }
        }}>
        {props.item.item}
        <span className='price'>{props.item.price}</span>
      </div>
    </div>
  );
};
export default TitleList;
