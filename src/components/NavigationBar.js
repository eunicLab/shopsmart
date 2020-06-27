import React, { useState } from 'react';
import '../App.css';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { AiFillFolderOpen } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  sendOpenListState,
  sendOpenEditTitleState,
  sendNavButtonDisplay,
  sendEditType,
  sendSelectedList,
  sendSelectedItem,
} from '../actions';
import { useSelector, useDispatch } from 'react-redux';

let NavigationBar = (props) => {
  const dispatch = useDispatch();

  const navButtonDisplay = useSelector((state) => state.navButtonDisplay);
  const selectedList = useSelector((state) => state.selectedList);
  const openList = useSelector((state) => state.openList);
  const Remainder = () => {
    let total = 0;
    for (let i in selectedList.list) {
      total += parseFloat(selectedList.list[i].price);
    }
    if (selectedList.budget > total) {
      return <span>Remaining: {selectedList.budget - total}</span>;
    }
    if (selectedList.budget < total) {
      return <span>Exceeded by: {total - selectedList.budget}</span>;
    }
    if (selectedList.budget === total) {
      return;
    }
  };

  return (
    <div className='NavigationBar'>
      <IoMdArrowRoundBack
        className={openList ? 'backIcon' : 'noDisplay'}
        onClick={() => {
          dispatch(sendOpenListState(false));
          dispatch(sendEditType('title'));
          dispatch(
            sendSelectedItem({
              id: '',
              item: '',
              price: 0,
            })
          );
          dispatch(
            sendSelectedList({
              id: '',
              list: [],
              budget: 0,
              title: '',
            })
          );
        }}
      />
      {props.title}
      <span className={openList ? 'budget' : 'noDisplay'}>
        Budget: {selectedList.budget}
      </span>
      <span className={openList ? 'budget' : 'noDisplay'}>{Remainder()}</span>
      <AiFillFolderOpen
        className={navButtonDisplay && !openList ? 'openIcon' : 'noDisplay'}
        onClick={() => {
          dispatch(sendOpenListState(true));
          dispatch(sendNavButtonDisplay(false));
        }}
      />
      <MdModeEdit
        className={
          navButtonDisplay && !openList
            ? 'editIcon'
            : navButtonDisplay && openList
            ? 'editIconList'
            : 'noDisplay'
        }
        onClick={() => {
          dispatch(sendOpenEditTitleState(true));
          dispatch(sendNavButtonDisplay(false));
        }}
      />
      <MdDelete
        className={
          navButtonDisplay && !openList
            ? 'deleteIcon'
            : navButtonDisplay && openList
            ? 'deleteIconList'
            : 'noDisplay'
        }
        onClick={() => {
          props.onDelete();
          dispatch(sendNavButtonDisplay(false));
        }}
      />
    </div>
  );
};
export default NavigationBar;
