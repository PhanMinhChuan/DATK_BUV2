import Axios from 'axios';

export function ShowComments() {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/scenarios?page=0&size=4',  {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
                'Content-Type': 'application/json'
            },
        }) 
            .then(function (responds) {
                //console.log(responds.data);
                dispatch(sendActionShowToRedux(responds.data));
            })
    }
}

export function sendActionShowToRedux(listContact) {
    return {
        type: "showComment",
        payload: listContact
    }
}

export function GetCommentSize(id) {
    var Token = localStorage.getItem('Token');
    var index = 0;
        var data = {};
        var config = {
            method: 'GET',
            headers: {
            "Authorization": Token,
            'Content-Type': 'application/json'
            }
        }
        Axios.get('http://localhost:8080/scenarios', data, config)
        .then(function (responds) {
            localStorage.setItem('commentSize', responds.data.length);
        })  
        
    index = localStorage.getItem('commentSize');
    return index;
}

export function ChangeListCommentByPageIndex(id) {
    var Token = localStorage.getItem('Token');
    return async(dispatch) => {
        Axios.get('http://localhost:8080/scenarios?page=' + (id-1)+ '&size=4', {
            method: 'GET',
            data: {},
            headers: {
                "Authorization": Token,
                'Content-Type': 'application/json'
            },
        })
            .then(function (responds) {
                dispatch(loadListCommentByPageIndex(responds.data));
            })
    }
}

export function loadListCommentByPageIndex(listComment) {
    return {
        type: 'changeListCommentByIndex',
        payload: listComment
    }
}

export function delFunc(id) {
    var Token = localStorage.getItem('Token');
    Axios.delete('http://localhost:8080/scenarios/' + id, {
      headers: {
        "Authorization": Token,
      },
    })
    .then(function (response) {
      //alert("delete Working!"); 
      window.location = "/comment";
    })
    .catch(function (error) {
      console.log(error);
    })
}