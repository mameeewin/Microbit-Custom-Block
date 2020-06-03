//% color=#007A4B weight=31 icon="\uf03e"
namespace animation {
    /**
     * Address LEDs linearly row first
     */
    //% blockId=screenmagicplotat
    //% block="plot at $index"
    //% index.min=0 index.max25
    export function plotAt(index: number): void {
        index |= 0
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x, y)
        let sprites: game.LedSprite[] = []
    }

let sprites: game.LedSprite[] = []
    /**
     * Blink an LED at a particular interval (ms)
     * @param x horizontal led coordinate
     * @param y vertical led coordinate
     * @param interval time in milli seconds between blinks
     */
    //% block="blink x $x y $y every $interval ms"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1
    //% interval.shadow=timePicker
    export function blink(x:number, y: number, interval: number): void {
        // find an existing sprite
        let sprite = sprites.find(s => s.x() == x && s.y() == y);
        if (!sprite)
            sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }   
    
}