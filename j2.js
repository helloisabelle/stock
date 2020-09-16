var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("name");

$(document).ready(function() {
    // initial state
    if (sessionStorage.getItem(c)){
        $('#fav').text("Delete");
        $('#fav').css({"background-color": "lightblue"});
    } else {
        $('#fav').text("Favorite");
        $('#fav').css({"background-color": "lightpink"});
    }
    $('#s').text(c);
});

function f(){
    if (!sessionStorage.getItem(c)){
        sessionStorage.setItem(c, 'fav');
        $('#fav').text("Delete");
        $('#fav').css({"background-color": "lightblue"});
    } else {
        sessionStorage.removeItem(c);
        $('#fav').text("Favorite");
        $('#fav').css({"background-color": "lightpink"});
    }
}
