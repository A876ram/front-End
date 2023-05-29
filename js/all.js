//js of responsive navbar menu

// move navbar by using scroll //
window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

////////////////////////

// show box all links //
function toggleMenu(){
    const toggleMenu =document.querySelector('.toggleMenu');
    const navigation =document.querySelector('.navigation');
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}


//////////////////////////////////////////

// when i scroll stop video ///
window.addEventListener('scroll', function (event){
    var allVideos = this.document.getElementsByTagName("video");
    for(var i=0 ; i<allVideos.length;i++){
        allVideos[i].pause();
    }
});

//////////////////////////////////////////

// when i play video , stop other video .// 

let firstVideo=document.getElementById("video1");
let secondVideo=document.getElementById("video2");
let thirdVideo=document.getElementById("video3");
let fourthVideo=document.getElementById("video4");

firstVideo.onplay=function(){
    secondVideo.pause();
    thirdVideo.pause();
    fourthVideo.pause();
}
secondVideo.onplay=function(){
    firstVideo.pause();
    thirdVideo.pause();
    fourthVideo.pause();
}
thirdVideo.onplay=function(){
    firstVideo.pause();
    secondVideo.pause();
    fourthVideo.pause();
}
fourthVideo.onplay=function(){
    firstVideo.pause();
    secondVideo.pause();
    thirdVideo.pause();
    
}
///////////////////////



