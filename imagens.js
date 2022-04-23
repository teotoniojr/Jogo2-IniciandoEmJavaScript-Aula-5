// Variáveis das Imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// Variáveis dos Sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("estrada.png");
  imagemDoAtor = loadImage("ator-1.png");
  imagemCarro1 = loadImage("carro-1.png");
  imagemCarro2 = loadImage("carro-2.png");
  imagemCarro3 = loadImage("carro-3.png");
  imagensCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("trilha.mp3");
  somDaColisao = loadSound("colidiu.mp3");
  somDoPonto = loadSound("pontos.wav")
}
