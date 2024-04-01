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
var Code_name = '';
function Generate_code_room_Button(){
    var Button = document.getElementById('generate_code_button')
    if (Button.textContent === 'Create a code!'){
        Generate_room_code();
    }
    if (Button.textContent === 'Create a room!'){
        document.getElementById('Generate_Code').innerHTML += '<br>' + 'Create Successful!';
        window.open('Room.html', '_blank');
        Display_Room_Name();
    }

  Change_to_room();

}
function Restart_Button(){
    var Code_name = document.getElementById('Generate_Code');
    Code_name.textContent = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123466789';
    var Code_name = ''
    var charactersLength = characters.length;
    var Length = 10;
    for (i = 0 ; i < Length ; i++){
        Code_name += characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    document.getElementById('Generate_Code').innerHTML += Code_name;

}

function Change_to_room(){
    var Button = document.getElementById('generate_code_button');
    Button.textContent = 'Create a room!';
}




function Generate_room_code(){
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123466789';
    Code_name = '';
    var charactersLength = characters.length;
    var Length = 10;
    for (i = 0 ; i < Length ; i++){
        Code_name += characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    document.getElementById('Generate_Code').innerHTML += Code_name;
    restrat_button.disabled = false;
    
}

//Room scripts
function Display_Room_Name(){
    document.getElementById('display_code_name').innerHTML = Code_name;
}