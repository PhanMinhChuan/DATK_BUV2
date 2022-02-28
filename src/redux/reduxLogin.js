import Axios from 'axios';

export function CheckApiLogin(event, username, password) {
  event.preventDefault()
  localStorage.clear();
  var data = {username: username, password: password};
  console.log(JSON.stringify(data));
  Axios.post('http://localhost:8080/login', JSON.stringify(data),{
    headers: {
      'Content-Type': 'application/json'
    },
    })
    .then(function (response) {
      localStorage.setItem('Token',response.data);
      Axios.post('http://localhost:8080/jwt', data,{
      headers: {
        "Authorization": response.data,
        'Content-Type': 'application/json'
      },
      })
      .then(function (response1) {
        localStorage.setItem('Username',response1.data);
        localStorage.setItem('Language', "EN")
        localStorage.setItem('statusContact',0);
        localStorage.setItem('statusColorHome', 0);
        window.location = "/";
      })
      .catch(function (error) {
        console.log(error);
      })
    })
    .catch(function (error) {
      alert("Sai tài khoản hoặc mật khẩu, xin vui lòng nhập lại!");
      console.log(error);
    })
}

export function GetUsername() {
  var data = {};
  var Token = localStorage.getItem('Token');
  Axios.post('http://localhost:8080/jwt', data,{
    headers: {
      "Authorization": Token,
      'Content-Type': 'application/json'
    },
    })
    .then(function (response) {
      localStorage.setItem('Username',response.data);
    })
    .catch(function (error) {
      console.log(error);
    })

    var nameStr =  localStorage.getItem('Username');
    return nameStr;
}

export function LogOutFun() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Username');
    
    window.location = "/";
}