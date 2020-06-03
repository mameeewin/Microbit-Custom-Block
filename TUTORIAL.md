# CustomBlock How to use
## Step 1
Use the BlinkBlock at X Y
```blocks
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        animation.blink(2, 2, 1000)
        animation.blink(3, 4, 1000)
        animation.blink(1, 0, 1000)
    }
})

```
## Step 2
Use the Index in X Y
```blocks
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        animation.blink(index, 4, 1000)
        animation.blink(4, index, 1000)
        animation.blink(index, 0, 1000)
        animation.blink(0, index, 1000)
        animation.blink(randint(0, 4), randint(0, 4), 500)
    }
})
```

## Step 3
Try Use the Plot At Block
```blocks
basic.forever(function () {
    for (let index = 0; index <= 25; index++) {
        basic.pause(100)
        animation.plotAt(index)
    }
})
```
