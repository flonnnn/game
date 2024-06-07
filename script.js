window.onload = function () {
    var img = document.getElementById("popcell1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop.mp3");

    img.addEventListener('mousedown', function () {
        increaseScore();
        img.src = 'popcell2.png';
        audio.play();
    });

    img.addEventListener('mouseup', function (){
            img.src = 'popcell1.png';
            audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
};