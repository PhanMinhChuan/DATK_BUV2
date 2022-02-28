import React, { Component, useEffect } from 'react';
import { useRef } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ShowUsers, GetUserSize, ChangeListUserByPageIndex, DeletedUserFunc11} from '../redux/reduxUser.js';
import $ from 'jquery'; 
import Powerslap from './assets/mp4/bg.mp4'


function User() {

  const email = useRef();
  var show = localStorage.getItem('statusContact');

  $(function(){
    $(".colorMenu").removeClass("colorMenuActive");
    $("#customS4S1").removeClass("colorMenuActive1");
    $("#customS4S2").removeClass("colorMenuActive1");
    if (localStorage.getItem('statusColorHome') == 1) {
        $("#colorMenu2").addClass("colorMenuActive");
    } else {
        $("#colorMenu2").removeClass("colorMenuActive");
    }
    $("#colorMenu3").addClass("colorMenuActive");
  });
  var language = localStorage.getItem('Language');

  return (
    <>
      <body class="bodyME">
        <video class="bg-video" playsInline autoPlay muted loop><source src={Powerslap} type="video/mp4" /></video>
        <div class="masthead">
            <div class="masthead-content text-white">
                <div class="container-fluid px-4 px-lg-0">
                    <span class="usernameLogin2">{language == "EN" ? <>Crawl Data</> : <>Ứng Dụng</>}</span><br/><br/><br/>
                    {
                        language == "EN" ? 
                        <><p class="mb-5 textMeCus">We are working hard to perfect and update the app every day.<br/><br/>Sign up below to get notified when we update!</p></>
                        :
                        <p class="mb-5 textMeCus">Chúng tôi đang làm việc chăm chỉ để hoàn thiện ứng dụng mỗi ngày.
                        <br/><br/> Hãy đăng ký bên dưới để nhận được thông báo khi chúng tôi cập nhật nhé!</p>
                    }
                    {
                        show == "1" ? 
                        <div id="contactForm">
                            <div class="row input-group-newsletter">
                                <span class="controlByMe">{language == "EN" ? <>Thank you for your contact!</> : <>Cảm ơn bạn đã đăng ký!</>}</span>
                            </div>
                        </div>
                        :
                        <form id="contactForm" onSubmit={e => {DeletedUserFunc11(e, email.current.value)}}>
                            <div class="row input-group-newsletter">
                                <div class="col"><input class="form-control" type="email" placeholder={language == "EN" ? "Enter email address..." : "Nhập email của bạn..."} aria-label="Enter email address..." data-sb-validations="required,email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" ref={email} required/></div>
                                <div class="col-auto"><button class="btn btn-primary" id="submitButton" type="submit">{language == "EN" ? <>Report!</> : <>Thông Báo!</>}</button></div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
        
    </body>
    </>
  );
}


export default User;