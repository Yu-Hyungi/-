// HTML 요소 가져오기
const inputIDValue = document.getElementById('IDValue');
const inputPWValue = document.getElementById('PWValue');

// 로그인 버튼 클릭 이벤트
SignButton.addEventListener('click', () => {
    const SignID = JSON.parse(localStorage.getItem('IDPW'));

    //ID, PW 검사 
    if((inputIDValue.value)&&(SignID[inputIDValue.value]==inputPWValue.value)){
        location.href="main.html";
        localStorage.setItem("ID", inputIDValue.value);
    }
    else{
        alert("ID, Password를 확인해 주세요!");
    }
});

function enter(event){
    const e = event.code;
    if(e == 'Enter'){
        const SignID = JSON.parse(localStorage.getItem('IDPW'));

    //ID, PW 검사 
        if((inputIDValue.value)&&(SignID[inputIDValue.value]==inputPWValue.value)){
            localStorage.setItem('ID', inputIDValue.value);
            location.href="main.html";
        }
        else{
            alert("ID, Password를 확인해 주세요!");
        }
    }
}

