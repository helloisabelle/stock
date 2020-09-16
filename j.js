$(document).ready(function() {
    var d = new Date();
    var time = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    var h = new Date(time).getHours();
    var min = new Date(time).getMinutes();
    if (d.getDay() >= 6 || (h < 9 || h > 16) || (h == 9 && min < 30) || (h == 4 && min > 0)){
        $("#meetings").css({"display": "none"});
    }
});

function md(name){
  window.location.href = 'results.html?name=' + name;
  $('#s').text(name);
};