function Display_code_name(){
    var code_name = document.getElementById('code_name_input').value;
    var button = document.getElementById('code_name_ok_button');
    var code_name_length = document.getElementById('display_code_name');
    if (code_name == 0 ){
        window.alert('請重新輸入!')
    }
    document.getElementById('display_code_name').innerHTML += '<br>' + code_name;
    if (code_name_length.textContent.trim().length > 0) {
button.disabled = true;
}
}


function Reinput(){
    window.location.reload();

}

function Create_Web_Title(text){
    var title = document.createElement('h1');
    title.textContent = text ;
    title.style.textAlign = 'center';
    return  title;
}

function Generate_code_room_Button(){
    var Button = document.getElementById('generate_code_button')
}

function Change_to_room(){

}

function Generate_room_code(){
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123466789';
    var code = ''
    var charactersLength = characters.length;
    var Length = 10;
    for (i = 0 ; i < Length ; i++){
        code += characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    document.getElementById('Generate_Code').innerHTML += code;
    var generate_code_button = document.getElementById('generate_code_button')
    if (generate_code_button.textContent === 'Create a code!') {
        generate_code_button.textContent = 'Create a room!';
    }
    if(generate_code_button.textContent === 'Create a room!'){
        
    }
    restrat_button.disabled = false;
}
