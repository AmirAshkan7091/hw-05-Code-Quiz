let dateDisplay = $("#currentDay");
let realTime = moment().hours();
let nine = $("#nine");
let ten = $("#ten");
let eleven = $("#eleven");
let twelve = $("#twelve");
let one = $("#one");
let two = $("#two");
let three = $("#three");
let four =$("#four");
let five = $("#five");
let words;
let inputArray = [9,10,11,12,13,14,15,16,17]
let delvArray = [nine, ten, eleven, twelve, one, two, three, four, five]
console.log(realTime);


dateDisplay.append(moment().format('dddd, MMMM Do YYYY'));



for (let i = 0; i < 9; i++) {
 if (realTime === inputArray[i]) {
     $(delvArray[i]).addClass("present");
 } else if (realTime > inputArray[i]) {
  
     $(delvArray[i]).addClass("past"); 
} else {
  
     $(delvArray[i]).addClass("future");
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



function savedText () {
    let wordsNine = JSON.parse(localStorage.getItem("9:00 am"));
    $("#nine").val("");
    $("#nine").val(wordsNine);

    let wordsTen = JSON.parse(localStorage.getItem("10:00 am"));
    $("#ten").val("");
    $("#ten").val(wordsTen);

    let wordsEleven = JSON.parse(localStorage.getItem("11:00 am"));
    $("#elevin").val("");
    $("#elevin").val(wordsEleven);

    let wordsTwelve = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#twelve").val("");
    $("#twelve").val(wordsTwelve);

    let wordsOne = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#one").val("");
    $("#one").val(wordsOne);

    let wordsTwo = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#two").val("");
    $("#two").val(wordsTwo);

    let wordsThree = JSON.parse(localStorage.getItem("9:00 am"));
    $("#three").val("");
    $("#three").val(wordsThree);

    let wordsFour = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#four").val("");
    $("#four").val(wordsFour);

    let wordsFive = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#five").val("");
    $("#five").val(wordsFive);



}