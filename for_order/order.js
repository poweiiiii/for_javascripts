//Websocket
host = 'ws://localhost:5500'

//使用 WebSocket 的網址向 Server 開啟連結
let ws = new WebSocket(host)

//聊天室訊息欄位
const uuidspan = document.querySelector('#uuid')
const input = document.querySelector('#message')
const sendbtn = document.querySelector('#sendbtn')


//開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行
ws.onopen = () => {
    console.log('open connection')
}
//接收 Server 發送的訊息
ws.onmessage = ( event) => {
    console.log(event)
}

//聊天室 : 按下btn ,傳送input欄位資料
if(sendbtn != null){
sendbtn.addEventListener('click',() => {
    const value = input.value
    ws.send(JSON.stringify(
        {
            content : value
        }
    ))
})}
else {
    window.alert('sendbtn not exist')
}

//關閉後執行的動作，指定一個 function 會在連結中斷後執行
ws.onclose = () => {
    console.log('close connection')
}


//

//使用socket 建立的房號會透過server 傳送到input_code網頁 左邊列表
function Display_code_name(){
    Push_room_to_array ();
    var code_name = document.getElementById('code_name_input').value;
    var button = document.getElementById('code_name_ok_button');
    var code_name_length = document.getElementById('display_code_name');
    if (code_name == 0 ){
        window.alert('請重新輸入!')
    }
    document.getElementById('display_code_name').innerHTML += '<br>' + code_name;
    if (code_name_length.textContent.trim().length > 0) {

        window.open('Room.html', '_blank');}

        button.disabled = true;
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
var save_room_array = JSON.parse(localStorage.getItem('data')) || [];


function Generate_code_room_Button(){
    var Button = document.getElementById('generate_code_button')
    if (Button.textContent === 'Create a code!'){
        Generate_room_code();
    }
    if (Button.textContent === 'Create a room!'){
        document.getElementById('Generate_Code').innerHTML += '<br>' + 'Create Successful!';
        window.open('Room.html', '_blank');
        //只會存到第一次創建 刪除不會跟著刪除
        Push_room_to_array ();
        }
        Save_Room   ()
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

//把創建的room存起來 有在資料裡面才可加入 沒有的話就不加入

function Save_Room(){
        save_room_array.push(Code_name_array);
        sessionStorage.setItem('data', JSON.stringify(save_room_array));
        console.log('Data saved:', save_room_array);
    
}




//Room scripts
//全域變數Current room people 
var Current_room_people = 0 ; 
function Display_How_Many_People(){ 

}

//創建一個每個都有API 加入後不會重複跑+1



