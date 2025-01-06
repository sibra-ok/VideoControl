console.log('hi');

let pause=document.getElementById('pauseB');
let play=document.getElementById('playB');
let video=document.getElementById('video');
let toggle=document.getElementById('toggle');
let fill=document.getElementById('filled');

toggle.addEventListener('click',(e)=>{

let fill=document.getElementById('filled');
let pause=document.getElementById('pauseB');
let play=document.getElementById('playB');
/*if(pause.classList.contains('playPause'))
pause.classList.remove('playPause');

else if(play.classList.contains('playPause')){
play.classList.remove('playPause');
}*/
let video=document.getElementById('video');
pause.classList.toggle('playPause');
play.classList.toggle('playPause');

if(play.classList.contains('playPause')){
video.play();

//let duration=video.duration;
//fill.style.flexBasis=video.currentTime/video.offsetWidth*duration;

}
else{video.pause();}


})


let control=document.getElementById('control');
//let fill=document.getElementById('filled');

control.addEventListener('click',(e)=>{

let video=document.getElementById('video');
console.log('clicked cntrl')

const clickX=e.clientX-control.getBoundingClientRect().left;
const newFlexBasis=`${(clickX /control.offsetWidth)*100}%`;
//ok=Number(ok);
console.log(newFlexBasis);

fill.style.flexBasis=newFlexBasis;
let a=video.duration;
let b=(clickX/control.offsetWidth)*a;
video.currentTime=b;
})


video.addEventListener('timeupdate',()=>{
let duration=video.duration;
let time=video.currentTime;
let finalFlex=`${(time/duration)*100}%`;
fill.style.flexBasis=finalFlex;

})
let vol=document.getElementById('vol');

vol.addEventListener('input',(e)=>{
console.log('range')

video.volume=e.target.value;
console.log(video.volume);
});

skip=document.getElementById('skip25');

skip.addEventListener('click',(e)=>{
    let video=document.getElementById('video');
console.log('skip')
video.currentTime+=25;
})

let back=document.getElementById('back');

back.addEventListener('click',(e)=>{
let video=document.getElementById('video');
console.log('back')
video.currentTime-=10;
});

let speed=document.getElementById('speed');

speed.addEventListener('input',(e)=>{
let video=document.getElementById('video');
video.playbackRate=speed.value;
console.log(video.speed);
console.log('speed');

})