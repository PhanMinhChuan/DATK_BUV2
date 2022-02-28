import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Home from './component/home.js';
import Categories from './component/categories.js';
import CategoriesChange from './component/add&update/categoriesChange.js';
import Book from './component/book.js'
import BookChange from './component/add&update/bookChange.js';
import Author from './component/author.js'
import AuthorChange from './component/add&update/authorChange.js';
import Comment from './component/comment.js'
import Comment1 from './component/comment1.js'
import User from './component/user.js'
import UserChange from './component/add&update/userChange.js';
import Contact from './component/contact.js'
import ContactChange from './component/add&update/contactChange.js';
import { Bootstrap } from 'bootstrap/dist/css/bootstrap.css';
import { VscAccount } from "react-icons/vsc";
import { AiFillContacts, AiOutlineHome} from "react-icons/ai";
import { BiCommentDetail, BiBook, BiDuplicate} from "react-icons/bi";
import { FaUserEdit, FaUserCircle} from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import {useDispatch} from 'react-redux';
import {ShowCat} from './redux/reduxCat.js';
import {ShowBook} from './redux/reduxBook.js';
import './signin.css'
import {CheckApiLogin, LogOutFun, GetUsername} from './redux/reduxLogin.js';

//import './fonts/font-awesome-4.7.0/css/font-awesome.css'
import './css/fontawesome-free/css/all.css'
import './css/fontawesome-free/css/sb-admin-2.css'
import $ from 'jquery'; 




function App() {
  //let [post, setPost] = useState({});

  // useEffect(() => {
  //   axios.get('http:/localhost:3000/posts', {
  //     params: {
  //       id: 1
  //     }
  //   }) 
  //   .then(function(response) {
  //     setPost(response.data);
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   })
  // })
  return (
    <Router>
      <Page />
    </Router>
  );
}

function Page() {
  const [dropdownItem,setItemDrop]=useState("0")
  const [hideMenu,setHideMenu]=useState("0")

  const username = useRef();
  const password = useRef();
  const canvas_1 = useRef();
  var Token = localStorage.getItem('Token');
  var nameStr = localStorage.getItem('Username');
  var language = localStorage.getItem('Language');

  var image = "";
  if (nameStr == "admin") {
    nameStr = "Minh Chuan";
  }
  function dropdownCustom () {
    if (dropdownItem.localeCompare("1")) {
        setItemDrop("1")
        localStorage.setItem('statusColorHome', 1);
    } else {
        setItemDrop("0")
        localStorage.setItem('statusColorHome', 0);
        $("#colorMenu2").addClass("colorMenuDefault");
    }
  }

  if (Token != null) {
    return (
        <body>      <div>
        <div id="wrapper">
            {hideMenu.localeCompare("1") ? 
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">{language == "EN" ? <>dashboard</> : <>Biểu Mẫu</> } <sup>2</sup></div>
                    </a>
                    <li class="nav-item">
                        <Link to="/" class="nav-link collapsed customcustom customMenu1 colorMenu" id="colorMenu0">
                            <strong class="fas fa-fw fa-tachometer-alt " id="demodemo"></strong>
                            <span>{language == "EN" ? <>Home</> : <>Trang Chủ</> }</span>
                        </Link>
                    </li>
                    <hr class="sidebar-divider"/>
                    <div class="sidebar-heading">
                        {language == "EN" ? <>Tool</> : <>Công Cụ</> }
                    </div>
                    <li class="nav-item customcustom">
                        <Link to="/contact" class="nav-link collapsed customcustom customMenu1 colorMenu" id="colorMenu1">
                            <strong class="fas fa-fw fa-chart-area" id="colorMenuD_1"></strong>
                            <span id="colorMenuD_2">{language == "EN" ? <>Crawl Data</> : <>Thu Thập Dữ Liệu</> }</span>
                        </Link>
                    </li>
                    <hr class="sidebar-divider d-none d-md-block"/>
                    <div class="sidebar-heading">
                        {language == "EN" ? <>More Info</> : <>Thêm Thông Tin</> }
                    </div>
                    <li class="nav-item ">
                        <a href='#' class="nav-link collapsed customcustom customMenu1 colorMenu" id="colorMenu2" data-toggle="collapse" onClick={() => dropdownCustom()}>
                            <strong class="fas fa-fw fa-table"></strong>
                            <span>{language == "EN" ? <>Database</> : <>Cơ Sở Dữ Liệu</> }</span>
                        </a>
                        { localStorage.getItem('statusColorHome') == "0" ? <></> :  
                        <div class="customS1">
                            <div class="bg-white" style={{borderRadius: '4px'}}>
                                <div class="text-center customS2"><strong>{language == "EN" ? <>Table Components:</> : <>Bảng:</> }</strong></div>
                                <div>
                                    <Link class="nav-link customS3 customS33 colorMenu" to="/comment" style={{width: '199px'}} ><span class="customS4" id="customS4S1">{language == "EN" ? <>Scenarios</> : <>Kịch Bản</> }</span></Link>
                                    <Link class="nav-link customS3 colorMenu" to="/comment1" style={{width: '199px'}}><span class="customS4" id="customS4S2">{language == "EN" ? <>User</> : <>Người Dùng</> }</span></Link>
                                </div>
                            </div>
                        </div>}
                    </li>
                    <li class="nav-item">
                        <Link to="/user" class="nav-link collapsed customcustom customMenu1 colorMenu" id="colorMenu3" >
                            <strong class="fas fa-fw fa-wrench"></strong>
                            <span>{language == "EN" ? <>Contact Info</> : <>Liên Hệ</> }</span>
                        </Link>    
                    </li>
                    <hr class="sidebar-divider d-none d-md-block"/>
                    <div class="sidebar-heading">
                        <span>{language == "EN" ? <>Configurations</> : <>Cấu Hình</> }</span>
                    </div>
                    <li class="nav-item ">
                        <Link to="/author" class="nav-link collapsed customcustom customMenu1 colorMenu" id="colorMenu4" >
                            <strong class="fas fa-fw fa-cog"></strong>
                            <span>{language == "EN" ? <>Setting</> : <>Cài Đặt</> }</span>
                        </Link>
                    </li><br/>
                    <hr class="sidebar-divider d-none d-md-block" />

                    <div class="text-center d-none d-md-inline">
                        <button class="rounded-circle border-0" id="sidebarToggle" onClick={() => setHideMenu("1")}></button>
                    </div>
                    </ul>
                    : 
                    <>
                    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion asdasd">
                        <div class="text-center d-none d-md-inline" style={{marginTop: '1009%'}}>
                            <button class="rounded-circle border-0 colorMenuActive2" id="sidebarToggle12" onClick={() => setHideMenu("0")}></button>
                        </div>
                    </ul> 
                    </>

            }
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <nav class="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>
                        <form
                            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div class="input-group">
                                <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                    aria-label="Search" aria-describedby="basic-addon2"/>
                                <button class="btn btn-primary searchBtn" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </form>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown no-arrow d-sm-none">
                                <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-search fa-fw"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form class="form-inline mr-auto w-100 navbar-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2"/>
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="button">
                                                    <i class="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow">
                                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <strong class="mr-2 d-none d-lg-inline text-gray-600 small usernameLogin" style={{ fontSize : "28px", marginTop: '5px', paddingRight: '2px'}}>{nameStr}</strong>
                                    <img class="img-profile rounded-circle"
                                        src="./img/undraw_profile.svg"/>
                                </a>
                            </li>

                            <div class="topbar-divider d-none d-sm-block"></div>
                            <li class="nav-item dropdown no-arrow">
                                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" onClick={() => LogOutFun()}
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-600"></i>
                                    <span class="mr-2 d-none d-lg-inline text-gray-600">{language == "EN" ? <>Logout</> : <>Đăng Xuất</>}</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                  <Route exact path="/" component= {Home} />
                  <Route exact path="/cat" component= {Categories} />
                  <Route exact path="/contact" component= {Contact} />
                  <Route exact path="/comment" component= {Comment} />
                  <Route exact path="/comment1" component= {Comment1} />
                  <Route exact path="/user" component= {User} />
                  <Route exact path="/author" component= {Author} />
                </Switch>
                <footer class="sticky-footer bg-white-meee">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Support <strong>&euro;</strong> Your Application 2022 | LTS</span>
                        </div>
                    </div>
                </footer>

            </div>

        </div>
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>
        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a class="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </body>

    )
  } else {
    return (
    <>
      <div className="container-login100" style={{ backgroundImage: `url("./bg-01.jpg")`}}>
          <div>
              <div href="/signin" className="container-sigin" id="container">
                  <div className="form-container sign-in-container">
                      <div className="form-signin">
                          <h3 class="nameLogin"><strong>Login</strong></h3>
                          <form action="#" onSubmit={e => {CheckApiLogin(e, username.current.value, password.current.value)}}>
                            <input className="signin-input-thongtin" type="text" placeholder="Email" ref={username} required/>
                            <input className="signin-input-thongtin" type="password" placeholder="Password" ref={password} required/><br/><br/>
                            <a className="a-Forgotyourpassword">Forgot your password?</a><br/><br/>
                            <button type="submit" className="button-signin-signup" style={{backgroundColor: '#ff723c'}}>Sign In</button>
                            <hr></hr>
                            <div class="flex-c-m">
                              <a href="#" class="login100-social-item bg1">
                                <i class="fab fa-facebook-f fa-fw"></i>
                              </a>
                              <a href="#" class="login100-social-item bg2">
                                <i class="fab fa-twitter fa-fw"></i>
                              </a>
                              <a href="#" class="login100-social-item bg3">
                                <i class="fab fa-google fa-fw"></i>
                              </a>
                            </div>
                          </form>
                      </div>
                  </div>
                  <div className="overlay-container">
                      <div className="overlay">
                          <div className="overlay-panel overlay-right">
                              <span class="cuscu123">Welcome Back!</span>
                              <hr style={{backgroundColor: 'white'}}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
    )
  }
  
}

export default App;
