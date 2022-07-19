document.getElementById('roll-btn').addEventListener('click',rollDice)

function rollDice(){
    var random1 = Math.floor(Math.random() * (7 - 1)) + 1
    var random2 = Math.floor(Math.random() * (7 - 1)) + 1

    
    var source1 = 'dice'+random1+'.png'
    var source2 = 'dice'+random2+'.png'

    

    document.getElementById('image').setAttribute('src',source1)
    document.getElementById('image1').setAttribute('src',source2)
    
    if(random1>random2){
        document.getElementById('result').innerHTML='Player 1 Win'
    }
    else if(random2>random1){
        document.getElementById('result').innerHTML='Player 2 Win'
    }
    else{
        document.getElementById('result').innerHTML='draw'
    }
    document.getElementById('Reload').addEventListener('click',function(){
        location.reload()
    })
}



