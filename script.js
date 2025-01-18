// HTML 요소 가져오기
const inputIDValue = document.getElementById('IDValue');
const inputPWValue = document.getElementById('PWValue');

var login={ 
    examineIDPW:function(userid, userpw){ //ID, PW 검사 
        const SignID = JSON.parse(localStorage.getItem('IDPW'));
        if((userid)&&(SignID[userid]==userpw)){
            location.href="main.html";
            localStorage.setItem("ID", userid);
        }
        else{
            alert("ID, Password를 확인해 주세요!");
        }
    },
    InitiallyIdSet:function(UserIdList){ //초기 ID 설정
        const SignID = JSON.parse(localStorage.getItem(UserIdList));
        if(!SignID){
            const SignID = {'admin':'1234'};
            localStorage.setItem('IDPW', JSON.stringify(SignID));
        }
    }
}

login.InitiallyIdSet('IDPW'); //초기 ID 설정

SignButton.addEventListener('click', () => { // 로그인 버튼 클릭 이벤트
    const userID = inputIDValue.value;
    const userPW = inputPWValue.value;
    login.examineIDPW(userID, userPW) //ID, PW 검사 
});


function enter(event){ //로그인 엔터 클릭 이벤트
    const e = event.code;
    if(e == 'Enter'){
        const userID = inputIDValue.value;
        const userPW = inputPWValue.value;
        login.examineIDPW(userID, userPW) //ID, PW 검사 
    }
}

