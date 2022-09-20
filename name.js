const input = document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');
let partmirrored = "";
let mirrored = "";
let i = 0;
input.addEventListener('keydown', function(e) {
    // console.log(e)
    if (e.key === 'Enter') {
        button.click(); 
        // calcMoms(gurkPrisInput.value);
    }
});

button.addEventListener('click', () => {
    const name = input.value;
    for(i; i < name.length; i++){
        console.log(name[i]);
    }
    for(i; i => 0; i--){
        mirrored + name[i]
        console.log(name[i]);
        if(i < 0){
            break
        }
    }
    let message = document.createElement('p');
    message.textContent = mirrored;
    messageBox.appendChild(message);
});