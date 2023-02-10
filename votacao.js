let qtjdm = 1;
let qtale = 1;
let qtusa = 1; 
let resul = 0;

function opcao01() {
    document.getElementById("text").innerHTML = "JDM";
    document.getElementById("qtjdm").innerHTML = qtjdm;
    qtjdm++;
    resul++
    document.getElementById("resul").innerHTML = resul;
}

function opcao02() {
    document.getElementById("text").innerHTML = "Alemão";
    document.getElementById("qtale").innerHTML = qtale;
    qtale++;
    resul++
    document.getElementById("resul").innerHTML = resul;
}

function opcao03() {
    document.getElementById("text").innerHTML = "Americano";
    document.getElementById("qtusa").innerHTML = qtusa;
    qtusa++;
    resul++;
    document.getElementById("resul").innerHTML = resul;
}

