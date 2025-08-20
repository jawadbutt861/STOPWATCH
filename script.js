let hrs = document.querySelector(".hours");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");
let mili = document.querySelector(".mili");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let start_interval;
let mili_secs = 0;
let seconds = 0;
let minutes = 0;
let hours = 0
start.addEventListener("click",() =>{
    start.disabled = true;
    start_interval = setInterval(function (){
        if(mili_secs == 100)
        {
            mili_secs = 0;
            seconds++;
        }
        if(seconds == 60)
        {
            seconds = 0;
            minutes++;
        }
         if(minutes == 60)
        {
            minutes = 0;
            hours++;
        }
        //For Mili
         if(mili_secs < 10)
        {
            mili.innerHTML = "0" + mili_secs;
            mili_secs++;
        }
        else
        {
            mili.innerHTML = mili_secs;
            mili_secs++;
        }
        // For Seconds
        if(seconds < 10)
        {
            secs.innerHTML = "0" + seconds;
        }
        else
        {
            secs.innerHTML = seconds;
        }
        // For Minutes
        if(minutes < 10)
        {
            mins.innerHTML = "0" + minutes;
        }
        else
        {
            mins.innerHTML = minutes;
        }
        // For Hours
         if(hours < 10)
        {
            hrs.innerHTML = "0" + hours;
        }
        else
        {
            hrs.innerHTML = hours;
        }

        
    },10)

})


stop.addEventListener("click",() =>{
    start.disabled = false;
    clearInterval(start_interval)
})


reset.addEventListener("click",() =>{
    start.disabled = false;
    clearInterval(start_interval);
    mili_secs = 0;
    minutes = 0;
    seconds = 0;
    hours = 0;
    mili.innerHTML = "0" + mili_secs;
    hrs.innerHTML = "0" + hours;
    mins.innerHTML = "0" + minutes;
    secs.innerHTML = "0" + seconds;
})

