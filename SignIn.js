// HTML 요소 가져오기
const IDValue = document.getElementById('IDValue');
const PWValue = document.getElementById('PWValue');
const saveButton = document.getElementById('saveButton');
const outputValue = document.getElementById('outputValue');

DuplicationCheck = 0;
// 아이디 중복 버튼 클릭 이벤트
dupID.addEventListener('click', () => {
    const ID = IDValue.value;
    if(JSON.parse(localStorage.getItem('IDPW'))){
        SignID = JSON.parse(localStorage.getItem('IDPW'));
    }
    else{
        SignID = {'':''};
    }

    if(SignID.hasOwnProperty(ID)){
        DuplicationCheck = 0;
        $('#cor').css('display', 'none');
        $('#dup').css('display', 'inline');
    }
    else{
        DuplicationCheck = 1;
        $('#dup').css('display', 'none');
        $('#cor').css('display', 'contents');
    }
});

SignInButton.addEventListener('click', () => {
    if((DuplicationCheck == 1)&&(PWValue.value)){
        const ID = IDValue.value;
        SignID[ID] = PWValue.value;
        localStorage.setItem('IDPW', JSON.stringify(SignID));
        alert('회원가입 되었습니다!');
        location.href="index.html";
    }
    else if(DuplicationCheck == 0){
        alert("ID 중복 검사를 해주세요!");
    }
    else{
        alert("정확한 Password를 입력해 주세요!")
    }
});
