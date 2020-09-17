input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio =")
    basic.showNumber(area)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Base menor =")
    basic.showNumber(base_menor)
    basic.clearScreen()
    basic.showString("Base mayor =")
    basic.showNumber(base_mayor)
    basic.clearScreen()
    basic.showString("Altura =")
    basic.showNumber(altura)
})
let area = 0
let altura = 0
let base_menor = 0
let base_mayor = 0
basic.showString("Diego A01285294")
basic.clearScreen()
basic.pause(1000)
base_mayor = 20
base_menor = 12
altura = randint(1, 200)
area = base_mayor + base_menor / (2 * altura)
