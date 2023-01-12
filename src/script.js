/* Javascript - script.js */

//Variáveis e Constantes
const inicio = document.querySelector("#inicio");
const jogo = document.querySelector("#jogo");
var labirinto = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1],
];
var elementos = [
    "<span class='e0'>█</span>",
    "<span class='e1'>█</span>",
    "<span class='e2'>█</span>",
];
var personagens = [
    "<span class='p0'>☻</span>",
    "<span class='p1'>☻</span>",
    "<span class='p2'>☻</span>",
];
var posicoes = [
    [1,1],
    [10,9],
    [18,19],
];
var pontos = 0;

//Exibe a tela de início
function showInicio() {
    //Esconde a tela do jogo
    jogo.style.display = "none";
    //Exibe a tela de inicio
    inicio.style.display = "flex";
    //Zera as posições
    posicoes = [
        [1,1],
        [10,9],
        [18,19]
    ];
    document.querySelector("#pontos").innerHTML = 0;
    pontos = 0;
}

//Exibe a tela de jogo
function showJogo() {
    //Exibe a tela do jogo
    jogo.style.display = "block";
    //Esconde a tela de inicio
    inicio.style.display = "none";
    //Renderiza o labirinto
    render();
}

//Renderiza o labirinto
function render() {
    var l = "";
    for(var i=0; i<labirinto.length; i++){
        for(var j=0; j<labirinto[i].length; j++){
            var existePers = false;
            for(var k=0; k<personagens.length; k++){
                if(posicoes[k][0] === j && posicoes[k][1] === i){
                    l += personagens[k];
                    existePers = true;
                }
            }
            if(!existePers) {
                l += elementos[labirinto[i][j]];
            }
        }
        l += "<br>";
    }
    //Desenha o labirinto
    document.querySelector("#labirinto").innerHTML = l;
}

//Move personagem
function move(nPers, x, y){
    var xP = posicoes[nPers][0]+x;
    var yP = posicoes[nPers][1]+y;
    if(labirinto[yP][xP]===0) {
        posicoes[nPers][0] += x;
        posicoes[nPers][1] += y;
    }
    render();
}

//Move Jogador
function moveJ(x, y) {
    move(0, x, y);
    //Move o oponente
    var dir = parseInt(Math.random()*2);
    if(dir === 0){
        if(posicoes[0][0] > posicoes[1][0]) move(1,1,0);
        else move(1,-1,0);
    } else {
        if(posicoes[0][1] > posicoes[1][1]) move(1,0,1);
        else move(1,0,-1);
    }
    //Move o resgatado
    if(dir === 0){
        if(posicoes[1][0] > posicoes[2][0]) move(2,1,0);
        else move(2,-1,0);
    } else {
        if(posicoes[1][1] > posicoes[2][1]) move(2,0,1);
        else move(2,0,-1);
    }
    render();
    //Verifica se deu game over
    if(posicoes[0][0] === posicoes[1][0] && posicoes[0][1] === posicoes[1][1]){
        alert("Game Over");
        showInicio();
    }
    if(posicoes[2][0] === posicoes[1][0] && posicoes[2][1] === posicoes[1][1]){
        alert("Game Over");
        showInicio();
    }
    //Verifica se resgatado
    if(posicoes[0][0] === posicoes[2][0] && posicoes[0][1] === posicoes[2][1]){
        alert("Parabéns você resgatou");
        //Zera as posições
        posicoes = [
            [1,1],
            [10,9],
            [18,19]
        ];
        pontos++;
        document.querySelector("#pontos").innerHTML = pontos;
        render();
    }
}

//Evento do teclado
function keypress(event) {
    switch(event.code){
        case("ArrowUp"): moveJ(0,-1); break;
        case("ArrowDown"): moveJ(0,1); break;
        case("ArrowLeft"): moveJ(-1,0); break;
        case("ArrowRight"): moveJ(1,0); break;
    }
}

//Executa ao iniciar o app
showInicio();
