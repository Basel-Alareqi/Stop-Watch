let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');
let sapn = document.querySelector("span");
let sec =0;
let minutes = 0;
let hours = 0;
let interval;

function setTime () {
    sec++;
    if(sec === 60) {
        sec = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours ++;
        }
        
    }
    sapn.innerText= String (hours).padStart(2,'0') + ":" + String(minutes).padStart(2,'0') + ":" + String(sec).padStart(2,'0')
};
startBtn.addEventListener("click" , function(){
    if(!interval)
    interval=setInterval(setTime, 1000);
});

resetBtn.addEventListener("click", function() {
    clearInterval(interval)
    interval =null
    hours = 0 ;
    minutes = 0;
    sec = 0;
    sapn.innerText = "00:00:00";
})



// startBtn.addEventListener("click",function(){
//     sapn.innerText = hours.join("") +":"+ minutes.join("")+":" + sec.join("")
//     fn++
//     sn++
// })
// resetBtn.addEventListener("click",function() {
//     sapn.innerText ="00:00:00"
// })

// // if (sec[1]/60 ==1) {
// //     sec=0
// // }