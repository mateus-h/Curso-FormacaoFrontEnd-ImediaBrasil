// JavaScript Document
var minhaFoto = document.getElementById("espacofoto");
var album = ["arco.jpg","basilica.jpg","eifel.jpg","coliseu.jpg"];
var i = 0;


function mudarFoto () {
	minhaFoto.setAttribute("src",album[i]);
	i++;

	if (i >= album.length) {
		i = 0;	
	}
}
setInterval(mudarFoto, 3000);