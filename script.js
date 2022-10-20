function  showmsg() {
    var str = document.getElementById("sentence").value. toLowerCase();
     console.log(str);

    var letter = document.getElementById("letter").value. toLowerCase();
     console.log("Entered Letter:",letter)f;

    //indexOf = method returns -1 if the value is not found.
    if(str.indexOf(letter) == -1) {
        alert("Letter does not exist in the string");
    }
    else {
        var afterLetter = str.substring(str.indexOf(letter) +1);
        // console.log(afterLetter);
        document.getElementById("show").innerHTML = afterLetter;
    }
}