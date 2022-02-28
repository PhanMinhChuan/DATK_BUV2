import React, { Component, useEffect} from 'react';

import { useRef } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RiAddBoxFill } from "react-icons/ri";
import {useSelector, useDispatch} from 'react-redux';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

import Select from 'react-select'
import {CheckApiLogin, LogOutFun, GetUsername} from '../redux/reduxLogin.js';


import {useState} from 'react';
import {ShowContact} from '../redux/reduxContact.js';
import $ from 'jquery'; 
var Recaptcha = require('react-recaptcha');

function Contact() {
  $(function(){
    $(".colorMenu").removeClass("colorMenuActive");
    $("#customS4S1").removeClass("colorMenuActive1");
    $("#customS4S2").removeClass("colorMenuActive1");
    if (localStorage.getItem('statusColorHome') == 1) {
        $("#colorMenu2").addClass("colorMenuActive");
    } else {
        $("#colorMenu2").removeClass("colorMenuActive");
    }
    $("#colorMenu1").addClass("colorMenuActive");
  });

  var language = localStorage.getItem('Language');
  const linkProfile = useRef();
  const password = useRef();
  const author = useRef();

  const colourOptions = [
    { value: "type1", label: "Profile" },
    { value: "type2", label: "Fanpage" },
    { value: "type3", label: "Group" }
  ];
  
  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor: isFocused ? "rgb(248, 249, 252)" : null,
        color: "#333333"
      };
    }
  };
  const postOptionsCount = [
    { value: "count1", label: "1" },
    { value: "count2", label: "2" },
    { value: "count3", label: "3" },
    { value: "count4", label: "4" },
    { value: "count5", label: "5" },
    { value: "count6", label: "6" },
    { value: "count7", label: "7" },
    { value: "count8", label: "8" },
    { value: "count9", label: "9" },
    { value: "count10", label: "10" },
    { value: "count11", label: "11" },
    { value: "count12", label: "12" },
    { value: "count13", label: "13" },
    { value: "count14", label: "14" },
    { value: "count15", label: "15" },
    { value: "count16", label: "16" },
    { value: "count17", label: "17" }
  ];
    return (
      <>
            <body><br/>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-5 d-none d-lg-block bg-login-image"></div>
                                    <div class="col-lg-7">
                                        <div class="p-4">
                                            <div class="text-center">
                                                {language == "EN" ?
                                                    <span class="usernameLogin1">Crawl&nbsp; Data</span>
                                                    :
                                                    <><span class="usernameLogin10">Thu Thập Dữ Liệu</span><br/></>
                                                }    
                                            <br/>
                                            </div>
                                            <form target="_blank" onSubmit={e => {ShowContact(e, linkProfile.current.value, author)}}>
                                                <div class="form-group customInput">
                                                    <strong>{language == "EN" ? <>Link profile</> : <>Đường Dẫn Hồ Sơ</>} (<span style={{color: 'red'}}>*</span>):</strong>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Link profile..." ref={linkProfile} required/>
                                                </div>
                                                <div class="form-group customInput">
                                                    <strong>{language == "EN" ? <>Type</> : <>Kiểu</>} (<span style={{color: 'red'}}>*</span>):</strong>
                                                </div>
                                                <div class="form-group">
                                                    <Select
                                                        label="Single select"
                                                        options={colourOptions}
                                                        styles={colourStyles}
                                                        placeholder='Choose type ...'
                                                        ref={author}
                                                        required
                                                    />
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group customInput">
                                                            <strong>{language == "EN" ? <>Number of posts</> : <>Số lượng bài đăng</>}:</strong>
                                                        </div>
                                                        <div class="form-group">
                                                        <Select
                                                            label="Single select"
                                                            options={postOptionsCount}
                                                            styles={colourStyles}
                                                            placeholder='Choose number ...'
                                                        />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group customInput">
                                                            <strong>{language == "EN" ? <>Closing time</> : <>Thời gian kết thúc</>}:</strong>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="date" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" data-date="" data-date-format="DD MMMM YYYY"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                &emsp;<br/><br/>
                                                <div class="row">
                                                    <div class="col-lg-2"></div>
                                                    <Recaptcha
                                                        sitekey="6LexfIEeAAAAALoxq3Voba6IghcOck3vscF8Q9yG"
                                                        render="exp"
                                                    />
                                                </div>
                                                <br/><hr/>
                                                <input type="submit" class="btn btn-primary btn-user btn-block" value='START CRAWL' style={{height: '35px', paddingTop: '7px', fontSize: 'small', fontWeight: '700'} }>
                                                </input>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                </div>
            </body>
      </>
  );  
}



export default Contact; 