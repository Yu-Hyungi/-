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
function togle(self){
    if(self.value==='night'){
        color.setcolorDay();
        self.value='day'
    }
    else{
        color.setcolorNight();
        self.value='night'
    }
}