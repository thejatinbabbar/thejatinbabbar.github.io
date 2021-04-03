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
        out += '<div class="col-4 col-12-mobile">';
        for (j = 0; j < arr[i].length; j++) {
            out += '<div class="col-4 col-12-mobile">';
            console.log(i, j, arr[i][j].name);
            out += '<article class="item"><header><h3><a href="' + 
                    arr[i][j].url + '">' + arr[i][j].name + 
                    '</a></h3><ul id="portfolio_list">' + arr[i][j].description + 
                    '</ul></header></article></div><br>';
        }
        out += '</div>';
    }
    document.getElementById("repos").innerHTML = out;
}