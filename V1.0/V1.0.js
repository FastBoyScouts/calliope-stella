let neo: neopixel.Strip = null
let neolaenge = 0
neolaenge = 5
neo = neopixel.create(DigitalPin.C16, neolaenge, NeoPixelMode.RGB)
neo.setBrightness(255)
basic.forever(() => {
    neo.show()
    neo.rotate(1)
    basic.pause(50)
})
