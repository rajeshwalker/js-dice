document.getElementById('roll-btn').addEventListener('click',rollDice)

function rollDice(){
    var random = Math.floor(Math.random() * (7 - 1)) + 1

    var source = 'dice'+random+'.png'

    document.getElementById('image').setAttribute('src',source)

    document.getElementById('result').innerHTML = 'You Got : '+random
}
