var button = document.getElementById("countDown");

function myCounter() {
    for (var i = 0; i<=100; i++){
        delay(i);
    }
    function delay(i){
        setTimeout(function(){button.innerHTML = i;}, 1000*i)
    }
}


