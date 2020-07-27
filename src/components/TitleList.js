import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { sendSelectedList, sendNavButtonDisplay } from '../actions';

let TitleList = (props) => {
  const selectedList = useSelector((state) => state.selectedList);
  const dispatch = useDispatch();
  return (
    <div
      className={
        props.item.id === selectedList.id ? 'listTitleSelected' : 'listTitle'
      }>
      <p
        onClick={(event) => {
          if (props.item.id === selectedList.id) {
            dispatch(
              sendSelectedList({
                id: '',
                title: '',
                list: [],
                budget: 0,
              })
            );
            dispatch(sendNavButtonDisplay(false));
          } else {
            dispatch(
              sendSelectedList({
                id: props.item.id,
                title: props.item.title,
                list: props.item.list,
                budget: props.item.budget,
              })
            );
            dispatch(sendNavButtonDisplay(true));
          }
        }}>
        {props.item.title}
        <span className='budgetTitlePage'>{props.item.budget}</span>
      </p>
    </div>
  );
};
export default TitleList;
