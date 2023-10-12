const emailList = ['username@30.com', 'pippo@pluto.it', 'giornogiovanna10@napoli.it'];

const dado = [1, 2, 3, 4, 5, 6];
let lancioCPU = dado[Math.floor(Math.random()*7)];
console.log(lancioCPU);
let lancioUtente = dado[Math.floor(Math.random()*7)];
console.log(lancioUtente);

if(lancioCPU > lancioUtente){
    console.log('ha vinto il computer');
}else{
    console.log("ha vinto l'utente");
}

const sendBtn = document.getElementById('invia');
let flag = false;


sendBtn.addEventListener('click', 

    function(){
        let userEmail = document.getElementById('email').value;

        for(let i = 0; i < emailList.length; i++){
            if(userEmail === emailList[i]){
                alert('utente trovato');
                flag = true;
                break;
            }else{
                alert('utente non trovato');
            }
        }


    }
)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}