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
import {ShowComments, GetCommentSize, ChangeListCommentByPageIndex} from '../redux/reduxComment.js';
import {ShowUsers, GetUserSize, ChangeListUserByPageIndex, DeletedUserFunc} from '../redux/reduxUser.js';
import $ from 'jquery'; 

export function Comment1() {
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
      $("#customS4S2").addClass("colorMenuActive1");
      $("#index1").css("background-color", "rgb(154 180 255)");
    });

    function changeColorBtn(item) {
        setTimeout(function(){
        $(".indexasdasd").css("background-color", "white");
        $("#index" + item).css("background-color", "rgb(154 180 255)");
        }, 100);
    }
  
    const dispatch = useDispatch(); 
    let [user, setUser] = useState({});
    useEffect(() => {
      setUser(dispatch(ShowUsers()));
    }, user)
  
    const listUserSelector = useSelector(state => state);
    const listUser = Array.from(listUserSelector);
    var language = localStorage.getItem('Language');
  
    function getUser() {
      return (
        listUser.map((item, index) => {
          return (
              <tr key={index} style={{fontFamily : 'math'}}>
                  <td class="text-center">{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>
                      {item.login}
                  </td>
                  <td>{item.createdDate}</td>
                  <td>{item.createdBy}</td>
                  <td class="text-center">
                      <button class="deletedBtBook" onClick={() => {if (window.confirm('Are you sure you wish to delete this item?'))  DeletedUserFunc(item.id) }}><RiDeleteBin3Line/></button>
                      <Link to='#' ><button class="updatedBtnBook" ><MdUpdate/></button></Link>
                  </td>
              </tr>
          )
        })
      )
    }
  
    function paginationFunc() {
      var arr = [];
      var index = GetUserSize();
      var numberOfPages = Math.floor(index / 3);
      for (var i = 1 ; i <= numberOfPages; i++) {
        var index = i;
        arr.push(i);
      }
  
      return (
        arr.map((item, index) => {
          var idStr = "index" + item;
          return (
            <button class="phanTrangBtn indexasdasd" id={idStr} onClick={() => {dispatch(ChangeListUserByPageIndex(item)); changeColorBtn(item)}}>{item}</button>
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
                      <br/><span class="usernameLogin2">{language == "EN" ? <>Users</> : <>Người Dùng</>}</span><br/>
                      <span class="cusText">{language == "EN" ? <>This table show users information in project.</> : <>Bảng này hiển thị thông tin của người dùng.</>} <Link to="#"><GrChapterAdd style={{color: 'red'}}/></Link></span>
                  </div>
              </div>
              <div class="card shadow mb-4" style={{marginTop: '20px'}}>
                  <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">Scenarios Table</h6>
                  </div>
                  <div class="card-body">
                      <div class="table-responsive">
                          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                              <thead>
                                  <tr style={{fontFamily : 'fantasy'}}>
                                      <th class="text-center" style={{width:'5%'}}>ID</th>
                                      <th style={{width:'10%'}}>{language == "EN" ? <>Username</> : <>Tên đăng nhập</>}</th>
                                      <th style={{width:'25%'}}>{language == "EN" ? <>Password</> : <>Mật khẩu</>}</th>
                                      <th style={{width:'15%'}}>{language == "EN" ? <>Last Login</> : <>Lần cuối đăng nhập</>}</th>
                                      <th style={{width:'10%'}}>{language == "EN" ? <>Create Date</> : <>Ngày tạo</>}</th>
                                      <th style={{width:'10%'}}>{language == "EN" ? <>Create By</> : <>Tạo bởi</>}</th>
                                      <th style={{width:'11%'}}>{language == "EN" ? <>Functions</> : <>Chức năng</>}</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {getUser()}
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


export default Comment1;