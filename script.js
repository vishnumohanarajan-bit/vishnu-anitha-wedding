/* LOADER */

window.onload=function(){

setTimeout(()=>{

document.getElementById("loader")
.style.display="none";

},2000);

}

/* MUSIC */

/* MUSIC CONTROL */

const music =
document.getElementById("bgmusic");

/* AUTO PLAY */

window.onload=function(){

setTimeout(()=>{

document.getElementById("loader")
.style.display="none";

/* TRY AUTOPLAY */

music.play().catch(()=>{

console.log("Autoplay blocked");

});

},2000);

}

/* PLAY AFTER FIRST TOUCH */

document.addEventListener("click", function(){

music.play();

},{ once:true });

/* MUSIC BUTTON */

function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}
/* COUNTDOWN */

const weddingDate=
new Date("August 21, 2026 08:00:00")
.getTime();

setInterval(()=>{

const now=
new Date().getTime();

const gap=
weddingDate-now;

const days=
Math.floor(gap/(1000*60*60*24));

const hours=
Math.floor((gap%(1000*60*60*24))
/(1000*60*60));

const minutes=
Math.floor((gap%(1000*60*60))
/(1000*60));

const seconds=
Math.floor((gap%(1000*60))/1000);

document.getElementById("days")
.innerHTML=days;

document.getElementById("hours")
.innerHTML=hours;

document.getElementById("minutes")
.innerHTML=minutes;

document.getElementById("seconds")
.innerHTML=seconds;

},1000);

/* RSVP POPUPS */

function openAttendPopup(){

document.getElementById("attendPopup")
.style.display="flex";

}

function openSorryPopup(){

document.getElementById("sorryPopup")
.style.display="flex";

}

function closePopup(){

document.getElementById("attendPopup")
.style.display="none";

document.getElementById("sorryPopup")
.style.display="none";

}

/* ATTENDING RSVP */

function submitAttend(){

const name=
document.getElementById("attendName").value;

const members=
document.getElementById("memberCount").value;

if(name=="" || members==""){

alert("Please fill all details 💚");

return;

}

fetch("https://script.google.com/macros/s/AKfycbwKsxBYHPugsLat0jv0yd4hI_YUVsqda61fhfyYwlYxCfcGOW9UxI91p-vl9_qCFoxg/exec",{

method:"POST",

body:JSON.stringify({

name:name,
members:members,
message:"",
status:"Happily Attending"

})

})

.then(res=>res.json())

.then(data=>{

if(data.result=="duplicate"){

alert("RSVP already submitted ❤️");

}else{

alert("Thank You For Your RSVP 💚");

}

document.getElementById("attendName")
.value="";

document.getElementById("memberCount")
.value="";

closePopup();

})

.catch(err=>{

alert("Something went wrong");

});

}

/* SORRY RSVP */

function submitSorry(){

const name=
document.getElementById("sorryName").value;

const message=
document.getElementById("sorryMessage").value;

if(name==""){

alert("Please enter your name ❤️");

return;

}

fetch("https://script.google.com/macros/s/AKfycbwKsxBYHPugsLat0jv0yd4hI_YUVsqda61fhfyYwlYxCfcGOW9UxI91p-vl9_qCFoxg/exec",{

method:"POST",

body:JSON.stringify({

name:name,
members:"",
message:message,
status:"Unable To Attend"

})

})

.then(res=>res.json())

.then(data=>{

if(data.result=="duplicate"){

alert("RSVP already submitted ❤️");

}else{

alert("Thank You For Your Wishes ❤️");

}

document.getElementById("sorryName")
.value="";

document.getElementById("sorryMessage")
.value="";

closePopup();

})

.catch(err=>{

alert("Something went wrong");

});

}
