/* =========================
MUSIC
========================= */

const music =
document.getElementById("bgmusic");

/* =========================
OPEN INVITATION
========================= */

function openInvitation(){

/* HIDE LOADER */

document.getElementById("loader")
.style.display="none";

/* PLAY MUSIC */

music.play();

/* FLOWER SHOWER */

/* CONTINUOUS FLOWER SHOWER */

function createFlower(){

const flowers=["🌸","🌺","🌼"];

let flower=document.createElement("div");

flower.innerHTML=
flowers[Math.floor(Math.random()*flowers.length)];

flower.classList.add("flower");

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=
(Math.random()*5+6)+"s";

flower.style.fontSize=
(Math.random()*15+18)+"px";

document.body.appendChild(flower);

/* REMOVE AFTER FALL */

setTimeout(()=>{

flower.remove();

},10000);

}

/* NEW FLOWER EVERY 800ms */

setInterval(createFlower,800);

}

/* =========================
MUSIC BUTTON
========================= */

function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}

/* =========================
COUNTDOWN
========================= */

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

/* =========================
RSVP POPUPS
========================= */

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

/* =========================
ATTENDING RSVP
========================= */

function submitAttend(){

const name=
document.getElementById("attendName").value;

const members=
document.getElementById("memberCount").value;

if(name=="" || members==""){

alert("Please fill all details 💚");

return;

}

fetch("https://script.google.com/macros/s/AKfycbwkzEEf9-h_32znTDe6bmzxyoBYEYbW_VioeQw1ea944hOwqancKHHmAKUu89rJnTTo/exec",{

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

alert("Thank You For Your RSVP 💚");

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

/* =========================
UNABLE TO ATTEND RSVP
========================= */

function submitSorry(){

const name=
document.getElementById("sorryName").value;

const message=
document.getElementById("sorryMessage").value;

if(name==""){

alert("Please enter your name ❤️");

return;

}

fetch("https://script.google.com/macros/s/AKfycbwkzEEf9-h_32znTDe6bmzxyoBYEYbW_VioeQw1ea944hOwqancKHHmAKUu89rJnTTo/exec",{

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

alert("Thank You For Your Wishes ❤️");

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
