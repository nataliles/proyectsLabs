class ipodMp3 {

    constructor (marca,color,capacidad,bateria,modoDeCarga,stock,id) {
            
           this.marca = marca;
           this.color = color;
           this.capacidad = capacidad;
           this.bateria = bateria;
           this.modoDeCarga = modoDeCarga;
           this.stock = stock;
           this.id = id;
    }
     
    infoipodMp3() {
        return `Marca: ${this.marca} <br> Color: ${this.color}<br> Capacidad de almacenamiento: ${this.capacidad} <br> Duración de Bateria: ${this.bateria}, Modo de Carga: ${this.modoDeCarga} <br> Stock: ${this.stock} <br> ID del producto: ${this.id}.` 
    }

}

const mp3 = new ipodMp3 ("Apple Ipod MP3","Gris oscuro", "30 GB", "14 horas de reprodución", "USB", "10", "FX2");

console.log (mp3.infoipodMp3());

class ipodTouch extends ipodMp3 {
    constructor(marca,color,capacidad,bateria,modoDeCarga,stock,id,so,pantalla,camara){
    super(marca,color,capacidad,bateria,modoDeCarga,stock,id);
    this.so = so;
    this.pantalla = pantalla;
    this.camara = camara;
    }

    infoipodTouch() {
        let touch = `Sistema operativo: ${this.so} <br> Pantalla: ${this.pantalla} <br> Cámara: ${this.camara}`;
        return `${this.infoipodMp3()} ${touch}`;
    }
}

const touch = new ipodMp3 ("Ipod touch 7 Gen", "Rosado", "256 GB","40 horas de audio, 8 de video", "USB", "20","234", "iOS 13", "Resolución 1136x640 con tecnologia IPS", "8MP,Video HD 1080p.")


/* MP3 */

let estadomp3caja = false;

let botone = document.querySelector(".botone");
let musica= document.querySelector("#musica")

botone.onclick =()=>{
    if(estadomp3caja==false)  {
        estadomp3caja = true;
       /*  pantalla.classList.remove("activa"); */
        reproducirMusica();
    }
    else {
        estadomp3caja=false;
        /* ipodMp3.classList.add("activa"); */
    }
}

function reproducirMusica() {
    if(musica.paused) {
     musica.play();
    }
    else{
        musica.pause();

    }
}

/* Apagar mp3 */

let encender = document.querySelector(".encender");
let pantalla = document.querySelector(".pantalla"); 

let album = document.querySelector(".album");
let barra = document.querySelector(".barra");
let texto = document.querySelector(".texto");


encender.onclick =()=>{
    if(estadomp3caja==false)  {
        estadomp3caja = true;
        album.style.display="none";
        barra.style.display="none";
        texto.style.display="none";
        pantalla.classList.add("apagado");
        musica.stop();
    }
    else {
        estadomp3caja=false;
        pantalla.classList.remove("apagado"); 
        album.style.display="inline";
        barra.style.display="block";
        texto.style.display="inline";
        musica.currentTime = 0;
    }
}

/*--------- Ipod Touch --------- */

/* Reproducir video */
let estadoipod = false;

let play = document.querySelector(".play");
let videoa = document.querySelector(".videoa");

play.onclick =()=>{
    if(estadoipod==false)  {
        estadoipod = true;
        reproducirVideo();
        play.classList.add("pausa");
       
    }
    else {
        estadoipod=false;
        play.classList.remove("pausa");
    }
}

function reproducirVideo() {
    if(videoa.paused) {
     videoa.play();
    }
    else{
        videoa.pause();
    }
}

/* Ir al inicio */

let touchpantalla = document.querySelector(".touchpantalla");
let botoninicio = document.querySelector(".botoninicio")
let volver = document.querySelector(".volver");
let proximo = document.querySelector(".proximo");
let voltear = document.querySelector(".voltear");

botoninicio.onclick =()=>{
    if(estadoipod==false)  {
        estadoipod = true;
        touchpantalla.classList.add("inicio");
        videoa.style.display="none";
        play.style.display="none";
        volver.style.display="none";
        proximo.style.display="none";
        voltear.style.display="none";
    }
    else {
        estadoipod=false;
        touchpantalla.classList.remove("inicio");
        videoa.style.display="block";
        play.style.display="inline";
        volver.style.display="inline";
        proximo.style.display="inline";
        voltear.style.display="inline";
    }
}

/* Apagar ipod */

let botonencenderi = document.querySelector(".botonencenderi");

botonencenderi.onclick =()=>{
    if(estadoipod==false)  {
        estadoipod = true;
        videoa.style.display="none";
        play.style.display="none";
        volver.style.display="none";
        proximo.style.display="none";
        voltear.style.display="none";
        touchpantalla.classList.add("apagar");
    }
    else {
        estadoipod=false;
        touchpantalla.classList.remove("apagar"); 
        videoa.style.display="block";
        play.style.display="inline";
        volver.style.display="inline";
        proximo.style.display="inline";
        voltear.style.display="inline";
        videoa.currentTime = 0;
    }
}