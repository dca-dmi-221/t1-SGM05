// SANTIAGO GÓMEZ MELO - A00372228 - REPRODUCTRO MP3
// LINK BEHANCE:https://www.behance.net/gallery/141067595/Reproductor-MP3
// DIAFRAMA DE FLIJO: https://lucid.app/lucidchart/169b8186-e037-480b-bf52-0464c6e110d2/edit?invitationId=inv_20e04018-5b9a-435c-9079-28f52f92f51a
// UML: https://lucid.app/lucidchart/0cee17b9-a75a-48c8-b733-8ed19421f50d/edit?invitationId=inv_68d97a73-181a-4f33-b5b1-305f8dd9c95b


//DEF VARIABLES

let Reina;
let furia;
let familia;
let serUnCantante;
let miDestino;

let canciones=[];
indice=0;
let slider;
//nombresCanciones=["furia","familia","ser un cantante","mi destino"]


function preload() {
 RF = loadImage("RF.jpg")
 furia = loadImage("furia.jpg")
 familia = loadImage("familia.jpg")
 serUnCantante = loadImage("SerUnCantante.jpg")
 miDestino = loadImage("miDestino.jpg")
  canciones[0] = loadSound("furia.mp3");
  canciones[1] = loadSound("familia.mp3");
  canciones[2] = loadSound("serUnCantante.mp3");
  canciones[3] = loadSound("miDestino.mp3");
  
}

function setup() {

  createCanvas(1500,650);
  

  
  botonPlay=createButton("Reproducir");
  botonPlay.mousePressed(Play);
  botonPlay.position(30,575);
  botonStop=createButton("Pausar");
  botonStop.mousePressed(Stop);
  botonStop.position(120,575);
  botonNext=createButton("Siguiente");
  botonNext.mousePressed(Next);
  botonNext.position(190,575);
  botonBack=createButton("Anterior");
  botonBack.mousePressed(Back);
  botonBack.position(280,575);
  slider = createSlider(0,1, 0.5, 0.01 );

  
}

function draw() {
image(RF,0,0,windowWidth,windowHeight);
//background("blanco");
textSize(24);
//text(nombresCanciones[indice],width/2,height/2);
canciones[indice].setVolume(slider.value());

//FOTOS DE LA CANCION QUE ESTA SONANDO
if (canciones[0].isPlaying() === true) image(furia, 70, 220, 250, 250);
if (canciones[1].isPlaying() === true) image(familia, 70, 220, 250, 250);
if (canciones[2].isPlaying() === true) image(serUnCantante, 70, 220, 250, 250);
if (canciones[3].isPlaying() === true) image(miDestino, 70, 220, 250,250);


//NOMBRE DE LA CANCION QUE ESTA SONANDO
//fill(255,255,255)
rect (72,185,247,30);
if (canciones[0].isPlaying() === true) text("furia", 170, 190, 250, 250);
if (canciones[1].isPlaying() === true) text("familia", 170, 190, 250, 250);
if (canciones[2].isPlaying() === true) text("serUnCantante", 115, 190, 250, 250);
if (canciones[3].isPlaying() === true) text("miDestino", 140, 190, 250,250);

}


function Play(){
  canciones[indice].play();
  console.log(nombresCanciones[indice]);
}

function Stop(){
  canciones[indice].stop();
}
function Next(){
  Stop();
  if(indice<canciones.length-1){
  indice+=1;
  }
  else{
    indice=0;
  }
  Play();
}

function Back(){
  Stop();
  if(indice<canciones.length +1){
  indice-=1; 
  }
  else{
    indice=0;
  }
  Play();
}

