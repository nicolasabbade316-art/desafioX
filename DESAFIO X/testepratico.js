//primeiros comandos 

console.log ("BEM VINDO AO MEU PRIMEIRO TESTE PRÁTICO")
console.log ("DIGITE O NOME DO PERSONAGEM PARA SABER AS INFORMAÇÕES")
let nickname = "Nicolas Abbade"
let nivelXp = 5001
let nomeClasses = ["ferro" , "bronze" , "prata" , "ouro" , "platina" , "ascendente" , "imortal" , "radiante"]
// limite de classes
let limiteXp = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
for (let i = 0; i <nomeClasses.length; i++) {
    if (nivelXp <= limiteXp[i]) {console.log("O herói de nome" + nickname + "está na classe" + nomeClasses[i]);
        break;}}

    