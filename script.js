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

/* HAPPILY ATTENDING */

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

document.getElementById("attendName").value="";
document.getElementById("memberCount").value="";

closePopup();

})

.catch(err=>{

alert("Something went wrong");

});

}

/* UNABLE TO ATTEND */

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

document.getElementById("sorryName").value="";
document.getElementById("sorryMessage").value="";

closePopup();

})

.catch(err=>{

alert("Something went wrong");

});

}
