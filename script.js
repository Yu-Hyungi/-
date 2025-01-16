// HTML 요소 가져오기
const inputIDValue = document.getElementById('IDValue');
const inputPWValue = document.getElementById('PWValue');

// 버튼 클릭 이벤트
SignButton.addEventListener('click', () => {
    const SignID = JSON.parse(localStorage.getItem('IDPW'));
    
    if((inputIDValue.value)&&(SignID[inputIDValue.value]==inputPWValue.value)){
        location.href="main.html";
    }
    else{
        alert("ID, Password를 확인해 주세요!");
    }
});



