var bird = document.getElementById("flappy");
var contador = document.getElementById("contador");
var block0 = document.getElementById("block0");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var ground = document.getElementById("terrain");

var t0 = document.getElementById("t0");
var b0 = document.getElementById("b0");

var t1 = document.getElementById("t1");
var b1 = document.getElementById("b1");

var t2 = document.getElementById("t2");
var b2 = document.getElementById("b2");

var pos = 60;
var arrC = [ "3", "2", "1", ""];
var cont = 0;
var juego = setInterval(Iniciar, 1000);
var salto = false;
var aux = 0.2;
var pos1 = 100;
var pos2 = 150;
var pos3 = 200;

function Iniciar() {
  if (cont < 4) {
    contador.innerHTML = arrC[cont];
    cont += 1;
  } else {
    clearInterval(juego);
    var sb = setInterval(bajar, 20);
  }
}
var angulo = 360;
var aAux=0;
var vAux =0;
function bajar() {
  moverObs();
  moverGround();
  if (pos != 0 && salto == false) {
    //acelerar bajada
    pos -= aceleracion(vAux);
      vAux+=0.5;
    bird.style.bottom = pos + "%";
    if (440 > angulo) {
      //acelerar giro
      aAux += 3;
      angulo+=aceleracion(aAux);
    }
    bird.style.transform = "rotate("+angulo+"deg)";
  } else if (aux <= 2 && salto == true)
  {
    pos += subida(aux);
    aAux = 0;
    vAux = 0;
    bird.style.bottom = pos + "%";
    bird.style.transform = "rotate("+335+"deg)";
    aux+=0.3;
    angulo=335;
  } else {
    salto = false;
    aux = 0;
  }
}


function aceleracion(x){
  return (x^4)/16;
}

function subida(x){
  var y = -(((x^2)-4)/2);
  return y;
}

function subir() {
  salto = true;
}
var posAux1=100;
var posAux2=150;
var posAux3=200;

function moverObs(){
    posAux1 -= 0.5; 
    posAux2 -= 0.5;
    posAux3 -= 0.5;
    block0.style.left = posAux1 + "%";
    block1.style.left = posAux2 + "%";
    block2.style.left = posAux3 + "%";
    if (posAux1 == 0) {
      posAux3 = 100;
      genTubos(block2);
    }
    if (posAux2 == 0) {
      posAux1 = 100;
      genTubos(block0);
    }
    if (posAux3 == 0) {
      posAux2 = 100;
      genTubos(block1);
    }
}

var groundAux = 0;

function moverGround(){
  if (groundAux <= 7) {
    groundAux += 1;
    ground.style.left = (0-groundAux)+"%";
  }else{
    groundAux = 0;
  }
}
//max top 90% min top 40%
function genTubos(b){
  var t = Math.ceil((Math.random() * 51) + 40);
  b.style.top = (-1*(t-20)) + "%";
}
function morir(x) {
  if (x) {
    
  }
}