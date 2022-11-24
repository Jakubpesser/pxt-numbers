let number = 0;
basic.showNumber(number)

basic.forever(function() {
    if (input.buttonIsPressed(Button.A))
        if (number > 0)
        {
           number -= 1
        }   
        whaleysans.showNumber(number)

    if (input.buttonIsPressed(Button.B))
        if (number < 10)
        {
           number += 1
        }
}

// input.onButtonPressed(Button.A, function() {
//     if (number > 0)
//     {
//         number -= 1
//     }   
//     whaleysans.showNumber(number)
//     
// })
// input.onButtonPressed(Button.B, function() {
//     if (number < 10) 
//     {
//         number += 1
//     }
//     whaleysans.showNumber(number)
// })