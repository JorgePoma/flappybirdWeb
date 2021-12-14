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
    cont = 0;
    contador.style.fontSize = 3+"em";
    contador.style.paddingTop = 2+"%";
    contador.innerHTML = cont;
    clearInterval(juego);
    sb = setInterval(bajar, 20);
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
    if (pos <= 16) {
      var repetir = confirm("perdiste : puntuacion "+cont);
      clearInterval(sb);
      if (repetir || !repetir) {
        location.reload();
      }
    }
  } else if (aux <= 2 && salto == true){
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

paso1 = genTubos(block0);
paso2 = genTubos(block1);
paso3 = genTubos(block2);

function moverObs(){
    posAux1 -= 0.5; 
    posAux2 -= 0.5;
    posAux3 -= 0.5;
    block0.style.left = posAux1 + "%";
    block1.style.left = posAux2 + "%";
    block2.style.left = posAux3 + "%";
    if (posAux1 == 0) {
      posAux3 = 100;
      paso3 = genTubos(block2);
    }
    if (posAux2 == 0) {
      posAux1 = 100;
      paso1 = genTubos(block0);
    }
    if (posAux3 == 0) {
      posAux2 = 100;
      paso2 = genTubos(block1);
    }
    colision(posAux1, pos, paso1);
    colision(posAux2, pos, paso2);
    colision(posAux3, pos, paso3);
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
//max top 70% min top 20%
function genTubos(b){
  var t = Math.ceil((Math.random() * 51) + 20);
  b.style.top = (-1*(t)) + "%";
  return t;
}

function colision(posAux, pos, paso){
  if (posAux == 45 || posAux == 55 ){ 
    //console.log(paso+17);
    //console.log("pajaro "+ pos);
    //console.log(paso);
    if(pos < paso) {
      console.log("perdiste!!");
      var repetir2 = confirm("perdiste : puntuacion "+cont);
      clearInterval(sb);
      if (repetir2 || !repetir2) {
        location.reload();
      }
    }else if(pos > paso+17){
      console.log("perdiste!!");
      var repetir3 = confirm("perdiste : puntuacion "+cont);
      clearInterval(sb);
      if (repetir3 || !repetir3) {
        location.reload();
      }
    }else if(posAux == 55){
      cont +=1;
      contador.innerHTML = cont;
    }
  }
}