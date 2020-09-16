$(document).ready(function() {
    var d = new Date();
    var time = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    var h = new Date(time).getHours();
    var min = new Date(time).getMinutes();
    if (d.getDay() >= 6 || (h < 9 || h > 16) || (h == 9 && min < 30) || (h == 4 && min > 0)){
        $("#content").css({"display": "none"});
        $("#sub").text("We're closed!");
    }
});

function filter() {
    $('#list').children('li').each(function () {
        if (!this.innerText.toUpperCase() .startsWith($('#input').val().toUpperCase())){
            this.style.display = "none";
        } else {
            this.style.display = "list-item";
        }
    });
}

function redir(name){
  window.location.href = 'results.html?name=' + name;
  $('#s').text(name);
};