setTimeout(()=>{
    document.querySelector(".loader").style.display="none";
},2000);

const countdown = document.getElementById("countdown");

const weddingDate = new Date("August 21, 2026 08:00:00").getTime();

setInterval(()=>{

    const now = new Date().getTime();

    const gap = weddingDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

    countdown.innerHTML =
    days + " Days " +
    hours + " Hours " +
    minutes + " Minutes ";

},1000);
