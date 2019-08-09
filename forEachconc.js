// This one is for weeks
week = ['Mon', 'Tue','Wed', 'Thr','Fri','Sat','Sun'];
week.forEach(function(day, index){
    console.log(`Our week starts from ${index+1} -- ${day}`);
});

// This one is for month

months = ['Jan','Feb','Mar','Apr','June','July','Aug','Sep','Oct'];
console.log("Listing wise months: ");
months.forEach(function(month,index){
    console.log(`Number ${index+1} is for ${month}`);
});


// This is for Loop

mon = ['Jan','Feb','Mar','Apr','June','July','Aug','Sep','Oct'];
for (let i=0 ; i< mon.length ; i++){
    console.log(mon[i]);
}
