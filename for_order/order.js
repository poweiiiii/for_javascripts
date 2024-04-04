function Display_code_name(){
    var code_name = document.getElementById('code_name_input').value;
    var button = document.getElementById('code_name_ok_button');
    var code_name_length = document.getElementById('display_code_name');
    if (code_name == 0 ){
        window.alert('請重新輸入!')
    }
    document.getElementById('display_code_name').innerHTML += '<br>' + code_name;
    if (code_name_length.textContent.trim().length > 0) {
        window.open('Room.html', '_blank');
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
//problem : 按下regenerate 會把所有的字串全刪除 不會丟新的進來

var Code_name = '';
var Code_name_array = [];

function Generate_code_room_Button(){
    var Button = document.getElementById('generate_code_button')
    if (Button.textContent === 'Create a code!'){
        Generate_room_code();
    }
    if (Button.textContent === 'Create a room!'){
        document.getElementById('Generate_Code').innerHTML += '<br>' + 'Create Successful!';
        window.open('Room.html', '_blank');
        
        }

  Change_to_room();

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
    Code_name_array.push(Code_name);
    localStorage.setItem('Code_name' , JSON.stringify(Code_name_array));

    localStorage.setItem('Code_name' , Code_name);
}

function Regenerate_Button(){
    Remove_Code_Array()
    var Code_name = document.getElementById('Generate_Code');
    Code_name.textContent = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123466789';
    Code_name = '';
    var charactersLength = characters.length;
    var Length = 10;
    for (i = 0 ; i < Length ; i++){
        Code_name += characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    Code_name_array.push(Code_name);
    localStorage.setItem('Code_name' , JSON.stringify(Code_name_array));
    localStorage.setItem('Code_name' , Code_name);
    document.getElementById('Generate_Code').innerHTML += Code_name;
}

function Remove_Code_Array(){
    if (Code_name_array.length > 0) {
        Code_name_array.pop(); 
        localStorage.setItem('Code_name', JSON.stringify(Code_name_array)); 
     }
}

function Change_to_room(){
    var Button = document.getElementById('generate_code_button');
    Button.textContent = 'Create a room!';
}

//Room scripts
//全域變數Current room people 
var Current_room_people = 0 ; 
function Display_How_Many_People(){ 

}

