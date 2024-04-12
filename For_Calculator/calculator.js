let val;
let expression = '';

function Get_All_Buttons(){
    let button = document.querySelectorAll('button')

    for (i = 0 ; i < button.length ; i++){
        button[i].addEventListener("click" , buttonclick);
    }
}

function buttonclick(){
    val = this.value;
    switch(val){
        default:
            expression += val;
            document.getElementById('dispaly').innerHTML = expression;
            break;
    }

}