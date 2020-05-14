
function contar(){
   
   let inicio = document.querySelector('input#txtI');
   let  fim = document.querySelector('input#txtF');
   let  passo = document.querySelector('input#txtP');
   let resultado = document.querySelector('div#resultado');
    condiçãoTxts(inicio,fim,passo,resultado);
    

}
function condiçãoTxts(i,f,p,r){
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0 ){
        alert('[ERRO] FALTAM DADOS!');
    }else {
        contador(i,f,p,r);
    }
}
function contador(i,f,p,r){
    r.innerHTML = "contando: <br>";
    let ic = Number(i.value); //tive que mudar o nome da variável, pois "in" já era uma função do JS
    let fi = Number(f.value);
    let pa = Number(p.value);
    if(pa <= 0){
        alert (`passo inválido, considerando a partir do passo 1`);
        pa = 1;
    }
    for(let c= ic; c<=fi;c+=pa){
        r.innerHTML += `${c} \u{1F631}`;// a formatação para emoji no JS é \u{código do emoji}
    }
    r.innerHTML += ` \u{1F3C1}`; //os códigos dos emojis só funcionam entre crases (`)
}