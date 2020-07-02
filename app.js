$(".button").click(() => {
    let colour = ['yellow', 'blue', 'red', 'grey', 'black', 'white']
    let num = (Math.random() * 5).toFixed(0)
    $('.backg').css('background-color', colour[num]);
})