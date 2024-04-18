var input_score = document.getElementById('input_score')




function Display_Score(){
    var score = input_score.value;
    
    if (score <= 100 &&score >= 0){
        if(score > 90){
            document.getElementById('display_score').innerHTML += '<span style="color: blue;">' + score + '</span> <br> ' 

        }
        else{
    document.getElementById('display_score').innerHTML += score + '<br>'
        }
}

 
    else{
        window.alert('請重新輸入')
        location.reload();

    }
}