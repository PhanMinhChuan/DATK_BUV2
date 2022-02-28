import React, { Component, useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ShowAuthors, GetAuthorSize, ChangeListAuthorByPageIndex, DeletedAuthorFunc} from '../redux/reduxAuthor.js';
import $ from 'jquery';
import {PhotoshopPicker, SketchPicker} from 'react-color';

function Author() {
  $(function(){
    $(".colorMenu").removeClass("colorMenuActive");
    $("#customS4S1").removeClass("colorMenuActive1");
    $("#customS4S2").removeClass("colorMenuActive1");
    if (localStorage.getItem('statusColorHome') == 1) {
      $("#colorMenu2").addClass("colorMenuActive");
    } else {
        $("#colorMenu2").removeClass("colorMenuActive");
    }
    $("#colorMenu4").addClass("colorMenuActive");
  });
  var language = localStorage.getItem('Language');

  function languageSettingFunc () {
    if (language == "EN") {
      localStorage.setItem('Language', "VN");
    } else {
      localStorage.setItem('Language', "EN");
    }
    setTimeout(function(){
      window.location = "/author";
    }, 200);
  }

  return (
    <>
      <body>
      <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-12 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                  <div class="col-lg-12">
                                    <div class="p-3">
                                      <div class="text-center">
                                          <span class="usernameLogin1">{language == "EN" ? <>Setting&nbsp; Page</> : <>Trang Cài Đặt</> }</span><br/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <br/><br/>
                                <div class="row">
                                  <div class="col-lg-1"></div>
                                  <div class="customSetting">
                                    <strong class="customSSS" > {language == "EN" ? <>Language:</> : <>Ngôn ngữ:</> }</strong>
                                  </div>
                                  {
                                    language == "EN" ? 
                                      <div class="switch customSetting1">
                                        <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox"  onClick={() => {languageSettingFunc()}} />
                                        <label for="language-toggle"></label>
                                        <span class="on">EN</span>
                                        <span class="off">VN</span>
                                     </div>
                                    :
                                      <div class="switch customSetting1">
                                        <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox"  onClick={() => {languageSettingFunc()}} />
                                        <label for="language-toggle"></label>
                                        <span class="off">EN</span>
                                        <span class="on">VN</span>
                                      </div>
                                  }
                                </div>
                                <br/><br/>
                                <div class="row">
                                  <div class="col-lg-1"></div>
                                  <div class="col-lg-6">
                                    <div class="form-group customInput">
                                        <strong class="customSSS" >{language == "EN" ? <>Dashboard Color:</> : <>Màu bảng điều khiển:</> }</strong>
                                    </div>
                                    <div class="form-group">
                                      <div class="text-center"><PhotoshopPicker/></div>
                                    </div>
                                  </div>
                                  <div class="col-lg-1"></div>
                                  <div class="col-lg-4">
                                    <div class="form-group customInput">
                                        <strong class="customSSS" >{language == "EN" ? <>Menu Color:</> : <>Màu Thanh Công Cụ:</> }</strong>
                                    </div>
                                    <div class="form-group">
                                      <div class="text-center"><SketchPicker/></div>
                                    </div>
                                  </div>
                                </div>
                                <br/><br/>
                            </div>
                        </div>

                    </div>

                </div>

                </div>
      </body>
    </>  
  );
}


export default Author;