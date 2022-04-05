/*let canciones 

let sliderVolumen;
function setup() {
  createCanvas(windowHeight,windowHeight);
  slider = createSlider(0, 1, 9.99, 0.01);
}
//reproductor

function preload() {
cancion = loadSound("furia.mp3", loaded);
cancion = loadSound("familia.mp3", loaded);
cancion = loadSound("ser un cantante.mp3", loaded);

function loaded() {
  cancion.play();
  }
  
}




function draw() {
  background(0);
  cancion.setVolume(slider.value());
}
*/

let Reina;
let canciones=[];
indice=0;
let slider;
nombresCanciones=["furia","familia","ser un cantante","mi destino"]


function preload() {
 Reina = loadImage("RF.jpg")
  canciones[0] = loadSound("furia.mp3");
  canciones[1] = loadSound("familia.mp3");
  canciones[2] = loadSound("ser un cantante.mp3");
  canciones[3] = loadSound("mi destino.mp3");
  
}

function setup() {

  createCanvas(765,620);
  

  
  botonPlay=createButton("Reproducir");
  botonPlay.mousePressed(Play);
  botonPlay.position(30,575);
  botonStop=createButton("Pausar");
  botonStop.mousePressed(Stop);
  botonStop.position(120,575);
  botonNext=createButton("Siguiente");
  botonNext.mousePressed(Next);
  botonNext.position(190,575);
  slider = createSlider(0, 1, 0.5, 0.01);

  
}

function draw() {
image(Reina,0,0,windowWidth,windowHeight);
//background("blanco");
textSize(24);
text(nombresCanciones[indice],width/2,height/2);
canciones.setVolumen(slider.value());
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
