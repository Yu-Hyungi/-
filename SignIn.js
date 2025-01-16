// HTML 요소 가져오기
const IDValue = document.getElementById('IDValue');
const PWValue = document.getElementById('PWValue');
const saveButton = document.getElementById('saveButton');
const outputValue = document.getElementById('outputValue');
const SignID ={'':''};


// 아이디 중복 버튼 클릭 이벤트
dupID.addEventListener('click', () => {
    const ID = IDValue.value;

    if(SignID.hasOwnProperty(ID)){
        DuplicationCheck = 0;
        $('#cor').css('display', 'none');
        $('#dup').css('display', 'contents');
    }
    else{
        DuplicationCheck = 1;
        $('#dup').css('display', 'none');
        $('#cor').css('display', 'contents');
    }
});

SignInButton.addEventListener('click', () => {
    if(DuplicationCheck == 1){
        alert('회원가입 되었습니다!');
    }
});



// 페이지 로드 시 로컬 스토리지에서 값 가져오기
document.addEventListener('DOMContentLoaded', () => {
    const savedValue = localStorage.getItem('IDComponent');
    if (savedValue) {
        outputValue.textContent = savedValue;
    }
});
