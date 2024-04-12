let val;
let expression = '';

function Get_All_Buttons(){
    let button = document.querySelectorAll('button')

    for (i = 0 ; i < button.length ; i++){
        button[i].addEventListener("click" , buttonclick);
    }
}
//實作這次的運算 不關上一次的運算
function buttonclick(){
    val = this.value;

    
    switch(val){
        case '=':
            let result = eval(expression)
            dispaly.innerHTML = result;
            break;

        case 'C':
            dispaly.innerHTML = '0';
            expression = '';
            break;

        default:
            expression += val;
            document.getElementById('dispaly').innerHTML = expression;
            break;
    }

}