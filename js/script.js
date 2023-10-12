const emailList = ['username@30.com', 'pippo@pluto.it', 'giornogiovanna10@napoli.it'];

const dado = [1, 2, 3, 4, 5, 6];
let lancioCPU = dado[Math.floor(Math.random()*7)];
let lancioUtente = dado[Math.floor(Math.random()*7)];

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