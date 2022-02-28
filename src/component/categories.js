import React, { Component, useEffect, useState } from 'react';
import {CheckApzzxczxiLogin} from '../js/chart-area-demo.js';
import asdasdadasda from '../js/chart-pie-demo.js';
import asdasdazxczxdasda from '../js/chart-bar-demo.js';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { BsCalendar, BsDot } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { SiFacebook } from "react-icons/si";
import Modal from 'react-bootstrap/Modal'
import $ from 'jquery'; 

//import './fonts/font-awesome-4.7.0/css/font-awesome.css'
import '../css/fontawesome-free/css/all.css'
import '../css/fontawesome-free/css/sb-admin-2.css'

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function changeImage(post, setImageURL, imagePre) {
    var image1 = post.profile_avatar_image;
    var image2 = post.profile_cover_image;
    if (imagePre.trim() === image1.trim()) {
        setImageURL(image2)
    } else {
        setImageURL(image1)
    }
}

export function Categories() {
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

  var type = localStorage.getItem('type');
  console.log(type);
  console.log("HELLLLLLLO");
  var linkProfile = localStorage.getItem('linkProfile');
  //var namesdas = "hothanhthuy22";
  const classes=useStyles();
  const [post,setPost]=useState(null)
  var Token = localStorage.getItem('Token');
  var data1 = {url: linkProfile, type: type};

  const [imageURL,setImageURL]=useState("https://scontent.fdad3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=q78fr7LTFS0AX_pm43z&_nc_ht=scontent.fdad3-2.fna&oh=00_AT8WJYjqHjuyr8_aUKr5FPYonn6tLS7dLD7p4etqEQLoRg&oe=62342CF8")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    fetch("http://localhost:8080/admin/crawlProfile", {
      method: 'POST',
      headers: {
        "Authorization": Token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data1),
    })
    .then(response=>response.json())
    .then(data => {
      console.log(data)
      setPost(data)
      asdasdadasda()
      CheckApzzxczxiLogin()
      asdasdazxczxdasda()
    })
  },[])
  return (
    <>
    {post ? 
        <>
        <Modal show={show} onHide={handleClose}> 
            <Modal.Header closeButton className="CustosssmModall">
            <Modal.Title class="cuss"><strong style={{color: 'white'}}>Hồ Sơ Cá Nhân</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BsDot></BsDot><span class="cuss">Cover name: </span><strong class="customModalText">&ensp;{post.profile_cover_name ? post.profile_cover_name : '___' }</strong><br />
                <BsDot></BsDot><span class="cuss">Bio: </span><strong class="customModalText">&ensp;{post.profile_facebook_bio ? post.profile_facebook_bio : '___'}</strong><br />
                <BsDot></BsDot><span class="cuss">Gender: </span><strong class="customModalText">&ensp;{post.Gender ? post.Gender : '___'}</strong><br />
                <BsDot></BsDot><span class="cuss">Political: </span><strong class="customModalText">&ensp;{post.bio ? post.bio : '___' }</strong><br />
                <BsDot></BsDot><span class="cuss">Follows: </span><strong class="customModalText">&ensp;{post.profile_follows ? post.profile_follows : '___'}</strong><br />
                <BsDot></BsDot><span class="cuss">Interested in: </span><strong class="customModalText">&ensp;{post.bio ? post.bio : '___' }</strong><br />
                <BsDot></BsDot><span class="cuss">Cover image: </span><strong class="customModalText">&ensp;<a href={post.profile_cover_image ? post.profile_cover_image : '#'} target="_blank" rel="noopener noreferrer">HERE</a></strong><br />
                <BsDot></BsDot><span class="cuss">Avatar image: </span><strong class="customModalText">&ensp;<a href={post.profile_avatar_image ? post.profile_avatar_image : '#'} target="_blank" rel="noopener noreferrer">HERE</a></strong><br />
            </Modal.Body>
        </Modal>
        <br/>
        <div class="container-fluid">
        <div class="row">
              <div class="col-xl-2 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2 hoverEducation">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                  <div class="text-xs font-weight-bold text-primary text-uppercase"><span class="hoverEducation1">Trình độ học vấn</span></div>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col-auto">
                                        <div class="customButton hoverEducation2">Đại học</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-auto">
                                  <i class="fas fa-school fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-2 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2 hoverWork">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                  <div class="text-xs font-weight-bold text-success text-uppercase"><span class="hoverWork1">Công việc</span></div>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col-auto">
                                        <div class="customButton hoverWork2">Kinh nghiệm </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-auto">
                                  <i class="fas fa-calculator fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-2 col-md-6 mb-4">
                  <div class="card border-left-dark shadow h-100 py-2 hoverFamily">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                  <div class="text-xs font-weight-bold text-dark text-uppercase"><span class="hoverFamily1">Người thân</span></div>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col-auto">
                                        <div class="customButton hoverFamily2"><strong>2</strong> thành viên</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-auto">
                                  <i class="fas fa-people-arrows fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-xl-2 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2 hoverJoin">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1"><span class="hoverJoin1">Ngày tham gia</span></div>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col-auto">
                                        <div class="customButton hoverJoin2">{post.profile_join_day.localeCompare('null') ? post.profile_join_day : '___'}</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-auto">
                                  <i class="fas fa-calendar-check fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-2 col-md-6 mb-4" onClick={handleShow}>
                  <div class="card border-left-danger shadow h-100 py-2 hoverMeME">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                  <div class="text-xs font-weight-bold text-danger text-uppercase"><span class="hoverMeME1">Hồ sơ</span></div>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col-auto">
                                        <div class="customButton hoverMeME2">Xem thêm</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-auto">
                                  <i class="fas fa-diagnoses fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-2 col-md-6 mb-4">
                  <div class="card border-left-warning shadow h-100 py-2 hoverCount">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                  <div class="text-xs font-weight-bold text-warning text-uppercase"><span class="hoverCount1">Bộ Đếm Tổng Hợp</span></div>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col-auto">
                                        <div class="customButton hoverCount2">Chi tiết</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-auto">
                                  <i class="fas fa-search fa-2x text-gray-300"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div><br/>
            <div class="row">
                <div class="col-xl-4">
                    <div class="p-4">
                        <div class="text-center">
                            <img class="img-profile rounded-circle" src={post.profile_avatar_image} style={{height: '250px', width: '250px'}} onClick={() => changeImage(post, setImageURL, imageURL)}/>
                        </div>
                        <div class="text-center">
                            <h1 class="h1 text-gray-800 customNameFacebook">{post.profile_name}</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7" >
                    <div class="card shadow mb-4" style={{marginTop: '37px', height: '260px', marginRight: '12px'}}>
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Thông Tin Cơ Bản</h6>
                        </div>
                        <div style= {{marginTop : '10px'}}>
                            <div class="row">
                                <div class="col-xl-7">
                                    <div class="p-2">
                                        <span style={{fontSize: '25px', marginLeft: '35px'}}><BsCalendar></BsCalendar><span class="cuss">Tuổi</span><strong class="customModalText1">&ensp;{post.age ? post.age : "___"}</strong></span><br/><br/>
                                        <span style={{fontSize: '25px', marginLeft: '35px'}}><FiPhoneCall></FiPhoneCall><span class="cuss">0859743442</span></span><br/><br/>
                                        <span style={{fontSize: '25px', marginLeft: '35px'}}><AiOutlineMail></AiOutlineMail><span class="cuss">minhchuan.me@gmail.com </span></span>
                                    </div>
                                </div>
                                <div class="col-xl-5">
                                    <div class="p-2">
                                        <span style={{fontSize: '25px'}}><HiOutlineHeart></HiOutlineHeart><span class="cuss">{post.martial_status.localeCompare('null') ? post.martial_status : '___'}</span></span><br/><br/>
                                        <span style={{fontSize: '25px'}}><AiOutlineHome></AiOutlineHome><span class="cuss">Sống ở </span><strong class="customModalText1">&ensp;Đà Nẵng</strong></span><br/><br/>
                                        <span style={{fontSize: '25px'}}><SiFacebook></SiFacebook><span class="cuss">/{post.profile_facebook_id ? post.profile_facebook_id : '___'}</span></span>
                                    </div>
                                </div>
                            </div>
                            {/* <i class="fas fa-calendar fa">&nbsp;&nbsp;Số điện thoại: </i><br/><br/>
                            <i class="fas fa-calendar fa">&nbsp;&nbsp;Số điện thoại: </i><br/>
                            <i class="fas fa-calendar fa">&nbsp;&nbsp;Email: </i><br/>
                            <i class="fas fa-calendar fa">&nbsp;&nbsp;Tình trạng hôn nhân: </i><br/>
                            <i class="fas fa-calendar fa">&nbsp;&nbsp;Đang sinh sống: </i><br/>
                            <i class="fas fa-calendar fa">&nbsp;&nbsp;Hoạt động gần nhất: </i><br/> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h5 text-gray-800"></h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i class="fas fa-download fa-sm text-white-50"></i> Generate Data</a>
          </div>
          <div class="row">
              <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">
                      <div
                          class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 class="m-0 font-weight-bold text-primary">Tần Suất Hoạt Động</h6>
                          <div class="dropdown no-arrow">
                              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                  aria-labelledby="dropdownMenuLink">
                                  <div class="dropdown-header">Dropdown Header:</div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Something else here</a>
                              </div>
                          </div>
                      </div>
                      <div class="card-body" >
                          <div class="chart-area">
                              <canvas id="myAreaChart"></canvas>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-5">
                  <div class="card shadow mb-4">
                      <div
                          class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 class="m-0 font-weight-bold text-primary">Top 3 fan cứng</h6>
                          <div class="dropdown no-arrow">
                              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                  aria-labelledby="dropdownMenuLink">
                                  <div class="dropdown-header">Dropdown Header:</div>
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Something else here</a>
                              </div>
                          </div>
                      </div>
                      <div class="card-body">
                          <div class="chart-pie pt-4 pb-2">
                              <canvas id="myPieChart" />
                          </div>
                          <div class="mt-4 text-center small">
                              <span class="mr-2">
                                  <i class="fas fa-circle text-primary"></i><a href="#" style={{color: 'black', textDecoration: 'none'}}> Minh Chuẩn</a>
                              </span>
                              <span class="mr-2">
                                  <i class="fas fa-circle text-success"></i><a href="#" style={{color: 'black', textDecoration: 'none'}}> Huy Hoàng</a>
                              </span>
                              <span class="mr-2">
                                  <i class="fas fa-circle text-info"></i><a href="#" style={{color: 'black', textDecoration: 'none'}}> Nguyễn Tuấn Đạt</a> 
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-6 mb-4">
                  <div class="card shadow mb-4">
                      <div class="card-header py-3">
                          <h6 class="m-0 font-weight-bold text-primary">Tình Trạng</h6>
                      </div>
                      <div class="card-body">
                          <h4 class="small font-weight-bold">Mức Độ Tương Tác Bài Viết <span
                                  class="float-right">20%</span></h4>
                          <div class="progress mb-4">
                              <div class="progress-bar bg-danger" role="progressbar" style={{width: "20%"}}
                                  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <h4 class="small font-weight-bold">Lượng Người Tương Tác <span
                                  class="float-right">60%</span></h4>
                          <div class="progress mb-4">
                              <div class="progress-bar" role="progressbar" style={{width: "60%"}}
                                  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <h4 class="small font-weight-bold">Thời Gian Hoạt Động <span
                                  class="float-right">40%</span></h4>
                          <div class="progress mb-4">
                              <div class="progress-bar bg-warning" role="progressbar" style={{width: "40%"}}
                                  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <h4 class="small font-weight-bold">Khối Lượng Thông Tin <span
                                  class="float-right">80%</span></h4>
                          <div class="progress mb-4">
                              <div class="progress-bar bg-info" role="progressbar" style={{width: "80%"}}
                                  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>
                  </div>
                  <div class="row"><div class="col-lg-12 mb-2"></div></div>
                  <div class="row"><div class="col-lg-12 mb-2"></div></div>
                  <div class="row">
                      <div class="col-lg-4 mb-2">
                          <div class="card bg-primary text-white shadow">
                              <div class="card-body">
                                  Trung Bình
                                  <div class="text-white-50 small">#4e73df</div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 mb-2">
                          <div class="card bg-success text-white shadow">
                              <div class="card-body">
                                  Rất Tốt
                                  <div class="text-white-50 small">#1cc88a</div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 mb-2">
                          <div class="card bg-info text-white shadow">
                              <div class="card-body">
                                  Tốt
                                  <div class="text-white-50 small">#36b9cc</div>
                              </div>
                          </div>
                      </div><br/>
                      <div class="col-lg-12 mb-3"></div>
                      <div class="col-lg-4 mb-2">
                          <div class="card bg-warning text-white shadow">
                              <div class="card-body">
                                  Thấp
                                  <div class="text-white-50 small">#f6c23e</div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 mb-2">
                          <div class="card bg-danger text-white shadow">
                              <div class="card-body">
                                  Rất Thấp
                                  <div class="text-white-50 small">#e74a3b</div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 mb-2">
                          <div class="card bg-light text-black shadow">
                              <div class="card-body">
                                  Chưa Có
                                  <div class="text-black-50 small">#f8f9fc</div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12 mb-4"></div><div class="col-lg-12 mb-4"></div>
                      
                  </div>
              </div>
              <div class="col-lg-6 mb-4">
                  <div class="card shadow mb-4">
                      <div class="card-header py-3">
                          <h6 class="m-0 font-weight-bold text-primary">Top 5 bài viết nổi bật</h6>
                      </div>
                      <div class="chart-bar">
                            <canvas id="myBarChart"></canvas>
                        </div>
                  </div>
                  <div class="card shadow mb-4">
                      <div class="card-header py-3">
                          <h6 class="m-0 font-weight-bold text-primary">Lời Khuyên</h6>
                      </div>
                      <div class="card-body">
                          <p>Hồ sơ còn thiếu nhiều thông tin. Nên bổ sung để mọi người có thể hiểu bạn hơn.</p>
                          <p class="mb-0">Ngoài ra, hồ sơ này có lượt tương tác khá thấp, hãy cố gắng chăm chút các bài đăng chất lượng với tần suất cao nhé!</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
            <div class="col-lg-4 mb-4"></div>
            <div class="col-lg-4 mb-4">
                <div class="text-center">
                    <form class="user">
                    <Link to='/contact'><a type="button" class="btn btn-primary btn-user btn-block"><strong style={{height: '42px', paddingTop: '7px', fontSize: 'large'}}>START AGAIN</strong></a></Link>
                    </form>
                </div>
            </div>
          </div>

      </div> 
      
      </>
        : <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>}
  </>
  );
}

export default Categories;