

let nome = "Cesar";
let xp = 2001;
let nivel = "";

if (xp <= 1000) {
    nivel = "Ferro";
}
 else if (xp >= 1001 && xp <= 2000) {
    nivel = "bronze";
} 
else if (xp >= 2001 && xp <= 3000) {
    nivel = "prata";
} 
else if (xp >= 3001 && xp <= 4000) {
    nivel = "ouro";
}
 else if (xp >= 4001 && xp <= 5000) {
    nivel = "platina";
}
 else if (xp >= 5001 && xp <= 7000) {
    nivel = "ascendente";
}
 else if (xp >= 7001 && xp <= 8000) {
    nivel = "imortal";
}
else {
    {
        nivel = "radiante";
    }
}



console.log(`O Herói de nome ${nome} estáno nível ${nivel}`)