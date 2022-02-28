import React, { Component, useEffect } from 'react';
import { AiFillDelete, AiOutlineCarryOut } from "react-icons/ai";
import { GrUpdate} from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiDeleteBin3Line } from "react-icons/ri";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";
import { GrChapterAdd} from "react-icons/gr";
import { MdUpdate} from "react-icons/md";

import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ShowComments, GetCommentSize, ChangeListCommentByPageIndex, delFunc} from '../redux/reduxComment.js';
import {ShowUsers, GetUserSize, ChangeListUserByPageIndex, DeletedUserFunc} from '../redux/reduxUser.js';
import $ from 'jquery'; 


export function Comment() {
  $(function(){
    $(".colorMenu").removeClass("colorMenuActive");
    $("#customS4S1").removeClass("colorMenuActive1");
    $("#customS4S2").removeClass("colorMenuActive1");
    if (localStorage.getItem('statusColorHome') == 1) {
        $("#colorMenu2").addClass("colorMenuActive");
    } else {
        $("#colorMenu2").removeClass("colorMenuActive");
    }
    $("#colorMenu2").addClass("colorMenuActive");
    $("#customS4S1").addClass("colorMenuActive1");
    $("#index1").css("background-color", "rgb(154 180 255)");
  });

  function changeColorBtn(item) {
    setTimeout(function(){
      $(".indexasdasd").css("background-color", "white");
      $("#index" + item).css("background-color", "rgb(154 180 255)");
    }, 100);
  }

  const dispatch = useDispatch(); 
  let [comment, setComment] = useState({});
  useEffect(() => {
    setComment(dispatch(ShowComments()));
  }, comment)

  const listCommentSelector = useSelector(state => state);
  const listComment = Array.from(listCommentSelector);
  var language = localStorage.getItem('Language');

  function getComment() {
    return (
      listComment.map((item, index) => {
          return (
            <tr key={index} style={{fontFamily : 'math'}}>
                <td class="text-center">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td><p class="overflow-ellipsis">{item.script}</p></td>
                <td>{item.createdDate}</td>
                <td>{item.lastModifiedBy}</td>
                <td>{item.type}</td>
                <td class="text-center">
                    <button class="deletedBtBook" onClick={() => {if (window.confirm('Are you sure you wish to delete this item?'))  delFunc(item.id) }} ><RiDeleteBin3Line/></button>
                    <Link to='#' ><button class="updatedBtnBook" ><MdUpdate/></button></Link>
                </td>
            </tr>
        )
      })
    )
  }

  function paginationFunc() {
    var arr = [];
    var index = GetCommentSize();
    var numberOfPages = Math.floor(index / 3);
    for (var i = 1 ; i <= numberOfPages; i++) {
      var index = i;
      arr.push(i);
    }

    return (
      arr.map((item, index) => {
        var idStr = "index" + item;
        return (
          <button class="phanTrangBtn indexasdasd" id={idStr} onClick={() => {dispatch(ChangeListCommentByPageIndex(item)); changeColorBtn(item)}}>{item}</button>
        )
      })
    )
  }

  return (
    <>
    <body>
        <div class="container-fluid">
            < div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6 text-center">
                    <br/><span class="usernameLogin2">{language == "EN" ? <>Scenarios</> : <>Kịch Bản</>}</span><br/>
                    <span class="cusText">{language == "EN" ? <>This table show script information in project.</> : <>Bảng này hiển thị kịch bản trong dự án.</>} <Link to="#"><GrChapterAdd style={{color: 'red'}}/></Link></span>
                </div>
            </div>
            <div class="card shadow mb-4" style={{marginTop: '20px'}}>
                <div class="card-header py-4">
                    <h6 class="m-0 font-weight-bold text-primary">{language == "EN" ? <>Scenarios Table</> : <>Bảng Kịch Bản</>}</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr style={{fontFamily : 'fantasy'}}>
                                    <th style={{width:'5%', textAlign: 'center'}}>ID</th>
                                    <th style={{width:'10%'}}>{language == "EN" ? <>Name</> : <>Tên</>}</th>
                                    <th style={{width:'15%'}}>{language == "EN" ? <>Description</> : <>Mô Tả</>}</th>
                                    <th style={{width:'20%'}}>{language == "EN" ? <>Script</> : <>Kịch Bản</>}</th>
                                    <th style={{width:'11%'}}>{language == "EN" ? <>Create Date</> : <>Ngày tạo</>}</th>
                                    <th style={{width:'15%'}}>{language == "EN" ? <>Last Modified By</> : <>Lần cuối chỉnh sửa</>}</th>
                                    <th style={{width:'10%'}}>{language == "EN" ? <>Type</> : <>Kiểu</>}</th>
                                    <th style={{width:'11%'}}>{language == "EN" ? <>Functions</> : <>Chức Năng</>}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getComment()}
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-right">
                            {paginationFunc()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </>
  );  
}


export default Comment;