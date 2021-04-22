var xmlhttp = new XMLHttpRequest();
var url = "https://api.github.com/users/thejatinbabbar/repos";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var arr = JSON.parse(this.responseText);
        const newArr = [];
        while(arr.length) newArr.push(arr.splice(0,3));
        myFunction(newArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = '';
    var i;
    for (i = 0; i < arr.length; i++) {
        // out += '<div class="col-4 col-12-mobile">';
        for (j = 0; j < arr[i].length; j++) {
            // out += '<div class="row">';
            console.log(i, j, arr[i][j].name);
            out += '<div class="col-4 col-12-mobile">';
            out += '<article class="item">';
            out += '<header>';
            out += '<h3>';
            out += '<a href="';
            out += arr[i][j].html_url;
            out += '">';
            out += arr[i][j].name;
            out += '</a>';
            out += '</h3>';
            out += '<ul id="portfolio_list">';
            out += arr[i][j].description;
            out += '</ul>';
            out += '</header>';
            out += '</article>';
            out += '</div>';
            out += '<br>';
            // out += '</div>';
        }
        // out += '</div>';
    }
    document.getElementById("repos").innerHTML = out;
}
