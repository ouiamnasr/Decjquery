var lalampeOff = false; //execution du 2eme evenemnt

function Lampa() {

    var btn = document.getElementById('BouttoN');

    var lmp = document.getElementById('oflampe');


    

    lalampeOff =! lalampeOff;  //permet le changement des photos de boutton et de lampe
    

    if (lalampeOff) {
        btn.style.backgroundImage = "url(buttrouge.jpeg)";
        lmp.src = 'lampeOn.png';
    } 
    

    else {
        btn.style.backgroundImage = "url(buttverte.jpeg)";
        lmp.src = 'lampeOf.png';
    }
    

    var audio = document.getElementById("audio");
    audio.play();
    
}