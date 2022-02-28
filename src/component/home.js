import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { AiFillContacts, AiOutlineHome, AiOutlineUserAdd, AiOutlineFileSearch} from "react-icons/ai";
import { BiCommentDetail, BiBook, BiDuplicate} from "react-icons/bi";
import { FaUserEdit, FaUserCircle} from "react-icons/fa";
import { FiSettings, FiDatabase} from "react-icons/fi";
import { RiToolsFill } from "react-icons/ri";
import $ from 'jquery'; 

function Home() {

  // function loadPage() {
  //   window.location = "/cat";
  // }
  // var Token = localStorage.getItem('Token');

  // useEffect(()=>{
  //   loadPage();
  // }, Token)

  $(function(){
    $(".colorMenu").removeClass("colorMenuActive");
    $("#customS4S1").removeClass("colorMenuActive1");
    $("#customS4S2").removeClass("colorMenuActive1");
    if (localStorage.getItem('statusColorHome') == 1) {
      $("#colorMenu2").addClass("colorMenuActive");
    } else {
      $("#colorMenu2").removeClass("colorMenuActive");
    }
    $("#colorMenu0").addClass("colorMenuActive");
  });
  var language = localStorage.getItem('Language');


    return (
      <><body>
        <div class= "formData">
          <div class="homeData">
            <Link to="/contact" style={{ textDecoration: 'none',fontSize: '25px'}}><span class="hoverTest"><button class="btnHome"><RiToolsFill class="homeIcon"/><br/><br/><strong class="testtest" >{language == "EN" ? <>TOOL</> : <>CÔNG CỤ</>}</strong></button></span></Link>
            <Link to="/comment" style={{ textDecoration: 'none',fontSize: '25px'}}><span class="hoverTest"><button class="btnHome"><FiDatabase class="homeIcon"/><br/><br/><strong class="testtest" >{language == "EN" ? <>DATABASE</> : <>CƠ SỞ DỮ LIỆU</>}</strong></button></span></Link>
            <Link to="/user" style={{ textDecoration: 'none',fontSize: '25px'}}><span class="hoverTest"><button class="btnHome"><AiOutlineFileSearch class="homeIcon"/><br/><br/><strong class="testtest" >{language == "EN" ? <>INFOR</> : <>THÔNG TIN</>}</strong></button></span></Link>
            <Link to="/author" style={{ textDecoration: 'none',fontSize: '25px'}}><span class="hoverTest"><button class="btnHome"><FiSettings class="homeIcon"/><br/><br/><strong class="testtest" >{language == "EN" ? <>SETTING</> : <>CÀI ĐẶT</>}</strong></button></span></Link>
          </div>
        </div>
        </body>
      </>
      
    );
}


export default Home;