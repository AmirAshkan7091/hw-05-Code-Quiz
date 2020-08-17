var dateDisplay = $("#currentDay");
var realTime = moment().hours();
var nine = $("#nine");
var ten = $("#ten");
var eleven = $("#eleven");
var twelve = $("#twelve");
var one = $("#one");
var two = $("#two");
var three = $("#three");
var four =$("#four");
var five = $("#five");
var words;
var inputArray = [9,10,11,12,13,14,15,16,17]
var divArray = [nine, ten, eleven, twelve, one, two, three, four, five]
console.log(realTime);


dateDisplay.append(moment().format('dddd, MMMM Do YYYY'));



for (var i = 0; i < 9; i++) {
 if (realTime === inputArray[i]) {
     $(divArray[i]).addClass("present");
 } else if (realTime > inputArray[i]) {
  
     $(divArray[i]).addClass("past"); 
} else {
  
     $(divArray[i]).addClass("future");
    }
}

$(document).ready( function() {
    savedText();
})

$(".saveBtn").click(function(){
words = $(this).siblings(".input").val();
console.log(words);
hourInfo = $(this).siblings(".hour").text();
console.log(hourInfo);
localStorage.setItem(hourInfo, JSON.stringify(words));

savedText();


})



