let y = 0
let player = 3
led.plot(2, player)
for (let index = 0; index < 4; index++) {
    if (y == player) {
        led.unplot(2, player)
        basic.pause(1000)
        led.unplot(2, y)
        led.plot(0, 0)
        led.plot(1, 1)
        led.plot(2, 2)
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(0, 4)
        led.plot(1, 3)
        led.plot(3, 3)
        led.plot(4, 4)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        led.plot(2, y)
        basic.pause(1000)
        led.unplot(2, y)
        y = y + 1
    }
    
}
