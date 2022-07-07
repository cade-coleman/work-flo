let time = moment().format("hh:mm:ss a");
let date = moment().format("MMM Do, YYYY");
let currentDay = document.getElementById('currentDay');
let currentDay2 = document.getElementById('currentDay-2');
let workHour = document.getElementById('hour');

function showDay(){
currentDay.textContent = date;
currentDay2.textContent = time;
}

showDay();

let workDay = [9, 10, 11, 12 ,1 ,2 ,3 ,4 ,5 ,6 ,7]
let workDayCounter = 0;

// function timePassed(){
//     console.log();

    

//     }


// timePassed();

for(let i = 0; i < workDay.length; i++){

}