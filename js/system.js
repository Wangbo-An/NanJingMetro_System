let t = document.getElementsByClassName("time")[0];
t.innerHTML = getTime();
function getTime(){

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return `\n ${year}/${month+1}/${String(day).padStart(2, 0)} ${String(hour).padStart(2, 0)}:${String(min).padStart(2, 0)}:${String(sec).padStart(2, 0)}`
}

setInterval(function(){
    t.innerHTML = getTime();}, 1000);

let login_out = document.getElementsByClassName("login_out")[0];
login_out.addEventListener("click", function(){
    window.open("login.html", "_self");
});

let video = document.getElementsByTagName("video")[0]
let left_item = document.getElementsByClassName("item");
let right_method = document.getElementsByClassName("right_content");
right_method[0].style.display = "block";
left_item[0].style.color = "indianred";
left_item[0].style.fontSize = "25px";

for (let i=0; i<right_method.length; i++){
    left_item[i].addEventListener("click", function(){
        Array.from(right_method).forEach(function(e){
            e.style.display = "none";
        });
        Array.from(left_item).forEach(function(e){
            e.style.color = "rgba(0, 0, 0, 0.495)";
            e.style.fontSize = "20px";
        });
        right_method[i].style.display = "block";
        left_item[i].style.color = "indianred";
        left_item[i].style.fontSize = "25px";
        if (i == 3) video.play();
        else video.pause();
})
}

import data from "../images/flow_in.json"

let dayTime = []
let index = 0;

for (let i=0; i<24; i++){
    for (let j=0; j<60; j += 15){
        dayTime.push([String(i).padStart(2, 0) + ":" + String(j).padStart(2, 0), data[String(index)]]);
        index++;
    }
}
anychart.onDocumentLoad(function() {

    var chart = anychart.line();
    var series = chart.line(dayTime);
    series.stroke("5px royalblue");
    series.color("skyblue");
    series.name("客流预测值");
    chart.legend(false);
    chart.xAxis().title("时间");
    chart.xAxis().labels().fontSize(18);
    chart.xAxis().labels().rotation(-45);
    chart.xAxis().title().fontSize(18);
    chart.yAxis().title("客流量/人次");
    chart.yAxis().labels().fontSize(18);
    chart.yAxis().title().fontSize(18);
    chart.yAxis().labels().rotation(-45);

    chart.title("大行宫站当日预计进站客流量");
    chart.title().fontSize(20);
    chart.title().fontFamily("华文宋体");
    chart.title().fontWeight(800);
    chart.container("container").draw();
  });
