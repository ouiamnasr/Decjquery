var imageButton = document.getElementById('imageCon');

imageButton.addEventListener('click', function() {
    var contentDiv = document.getElementById('divv');

    contentDiv.innerHTML = ''; // Vide le contenu précédent
    
    var image = document.createElement('img');
    image.src = "picjava.png";

    contentDiv.appendChild(image);
});




var cvButton = document.getElementById('cvCon');

cvButton.addEventListener('click', function() {

    var contentDiv = document.getElementById('divv');

    contentDiv.innerHTML = ''; // Vide le contenu précédent
    
    var image = document.createElement('img');
    image.src = "cv.jpeg";

    contentDiv.appendChild(image);
});





var videoButton = document.getElementById('VidCon');

videoButton.addEventListener('click', function() {
    
    var contentDiv = document.getElementById('divv');

    contentDiv.innerHTML = ''; // Vide le contenu précédent
    
    var video = document.createElement('video');
    video.src = "vapor.mp4";
    video.setAttribute('controls', true);

    contentDiv.appendChild(video);
});




var formButton = document.getElementById('formulCon');

formButton.addEventListener('click', function() {

    var contentDiv = document.getElementById('divv');

    contentDiv.innerHTML=''; //pour eviter la repitition


    var b = document.createElement('h2');
    b.innerHTML="<label>Nom:</label>  <input placeholder=Required>";


    var c = document.createElement('h2');
    c.innerHTML="<label>Prénom:</label>  <input placeholder=Required>";


    var d = document.createElement('h2');
    d.innerHTML="<label>Courriel:</label>  <input placeholder=Required>";


    var e = document.createElement('h2');
    e.innerHTML="<label>Téléphone:</label>  <input placeholder=Required>";


    var f = document.createElement('h2');
    f.innerHTML="<label>Adresse:</label>  <input placeholder=Optional>";


    var g = document.createElement('h2');
    g.innerHTML = "<input type=submit value=Envoyer>";
    
    

    contentDiv.appendChild(b);
    contentDiv.appendChild(c);
    contentDiv.appendChild(d);
    contentDiv.appendChild(e);
    contentDiv.appendChild(f);
    contentDiv.appendChild(g);
    
});

