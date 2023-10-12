const emailList = ['username@30.com', 'pippo@pluto.it', 'giornogiovanna10@napoli.it'];

const sendBtn = document.getElementById('invia');

sendBtn.addEventListener('click', 

    function(){
        let userEmail = document.getElementById('email').value;

        for(let i = 0; i < emailList.length; i++){
            if(userEmail === emailList[i]){
                alert('utente trovato');
                break;
            }
        }
    }
)