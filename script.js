let hour = document.getElementById('htime');
let hourContent = 1;

let min = document.getElementById('mtime');
let minContent = 1;

let sec = document.getElementById('stime');
let secContent = 1;

let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');

let intervalId = null;


function startTimer(){

    if(!intervalId){

        intervalId = setInterval(function() {
        console.log(secContent);
        secContent < 10 ? sec.textContent = `0${secContent}` : sec.textContent = secContent;
        secContent++;
        
        if (secContent === 60) {
            secContent = 0;
            minContent++;
            
            minContent < 10 ? min.textContent = `0${minContent}` : min.textContent = minContent;
        }

        if (minContent === 60) {
            minContent = 0;
            hourContent++;
            
            hourContent < 10 ? hour.textContent = `0${hourContent}` : hour.textContent = hourContent;
        }
    }, 1000);

    }
}
// Ensures the click event only fires once


start.addEventListener('click',function(e){
    startTimer();
    e.preventDefault();

});


pause.addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId = null;
});


reset.addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId = null;

    minContent = 0;
    hourContent = 0;
    secContent = 0;



    text.minContent = "00";
    text.hourContent = "00";
    text.secContent = "00";




})

// let hour = document.getElementById('htime');
// let hourContent = 1;

// let min = document.getElementById('mtime');
// let minContent = 1;

// let sec = document.getElementById('stime');
// let secContent = 1;

// let start = document.getElementById('start');
// let pause = document.getElementById('pause');
// let reset = document.getElementById('reset');

// let intervalId = null; // Store the interval ID

// function startTimer() {
    // Only start a new interval if one isn't already running
    // if (!intervalId) {
    //     intervalId = setInterval(function() {
            // Update seconds
            // secContent < 10 ? sec.textContent = `0${secContent}` : sec.textContent = secContent;
            // secContent++;
            
            // if (secContent === 60) {
            //     secContent = 0;
            //     minContent++;
                
                // Update minutes
            //     minContent < 10 ? min.textContent = `0${minContent}` : min.textContent = minContent;
            // }

            // if (minContent === 60) {
            //     minContent = 0;
            //     hourContent++;
                
            //     // Update hours
            //     hourContent < 10 ? hour.textContent = `0${hourContent}` : hour.textContent = hourContent;
            // }
//         }, 1000);
//     }
// }

// Start button to start or resume the timer
start.addEventListener('click', function(e) {
    startTimer();
    e.preventDefault();
});

// Pause button to stop the timer temporarily
pause.addEventListener('click', function() {
    clearInterval(intervalId); // Stop the interval
    intervalId = null;         // Clear the interval ID so we can resume later
    console.log("Timer paused");
});

// Reset button to stop and reset the timer to initial values
reset.addEventListener('click', function() {
    clearInterval(intervalId); // Stop the interval
    intervalId = null;         // Clear the interval ID
    
    // Reset all timer values to initial values
    hourContent = 0;
    minContent = 0;
    secContent = 0;
    
    // Update display to show reset values
    hour.textContent = "00";
    min.textContent = "00";
    sec.textContent = "00";
    
    console.log("Timer reset");
});
