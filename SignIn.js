// HTML 요소 가져오기
const IDValue = document.getElementById('IDValue');
const PWValue = document.getElementById('PWValue');
const saveButton = document.getElementById('saveButton');
const outputValue = document.getElementById('outputValue');


// 버튼 클릭 이벤트
dupID.addEventListener('click', () => {
    // 입력 필드의 값 가져오기
    const SignID={'lyou0000':'93754850@z'};
    const ID = IDValue.value;

    if(SignID.hasOwnProperty(ID)){
        $('#dup').css('display', 'contents');
    }
    
    // 출력 영역에 값 표시
    outputValue.textContent = value;

    // 입력 필드 초기화
    inputValue.value = '';
});





// 페이지 로드 시 로컬 스토리지에서 값 가져오기
document.addEventListener('DOMContentLoaded', () => {
    const savedValue = localStorage.getItem('savedValue');
    if (savedValue) {
        outputValue.textContent = savedValue;
    }
});
