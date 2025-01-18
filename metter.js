var Myid = document.getElementById('id'); //html 요소 가져오기

var UserId = localStorage.getItem('ID'); //초기화 버튼
if(UserId=='admin'){
    $('#reset').css('display', 'inline');
    function reset(self){
        localStorage.clear();
    }
}

if(!UserId){ //로그인 상태 검사
    location.href="index.html";
}

Myid.value = UserId; 
var len = Myid.value.length;
$('#id').css('width', len*8); //아이디 텍스트 크기 조절

function togle(self){ //day,night 버튼 
    if(self.value==='night'){
        color.setcolorDay();
        self.value='day'
    }
    else{
        color.setcolorNight();
        self.value='night'
    }
}

function Logout(self){ //로그아웃 버튼
    if(UserId){
        location.href ="index.html";
        localStorage.removeItem('ID');
    }
}

var tag={
    setbackgroundColor:function(tag, color){
        //document.querySelector(tag).style.backgroundColor=color;                   
        $(tag).css('backgroundColor', color)
    },
    setColor:function(tag, color){
        //document.querySelector(tag).style.color=color;
        $(tag).css('color', color)
    },
    setborderColor:function(tag, color){
        //document.querySelector(tag).style.borderColor=color;
        $(tag).css('borderColor', color)
    },
    setborderBlockColor:function(tag, color){
        //document.querySelector(tag).style.borderColor=color;
        $(tag).css('borderColor', color)
    }
}

var color={};
color.setcolorDay = function(){
    tag.setColor('body','black');
    tag.setColor('h1', 'black');
    tag.setbackgroundColor('body', 'white');
    tag.setborderColor('#outline', 'black');
    tag.setborderColor('h1', 'black');
    tag.setborderColor('h2', 'black');
    self.value='day'
}
color.setcolorNight = function(){
    tag.setColor('body','white');
    tag.setColor('h1', 'white');
    
    tag.setbackgroundColor('body', 'black');
    tag.setborderColor('#outline', 'white');
    tag.setborderColor('h1', 'white');
    tag.setborderColor('h2', 'white');
    self.value='night'
}



