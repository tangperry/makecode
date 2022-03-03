
input.onButtonPressed(Button.A, function () {
    // 顯示數字5
    basic.showNumber(5)
    basic.pause(100)
    // 顯示數字4
    basic.showNumber(4)
    basic.pause(100)
    // 顯示數字3
    basic.showNumber(3)
    basic.pause(100)
    // 顯示數字2
    basic.showNumber(2)
    basic.pause(100)
    // 顯示數字1
    basic.showNumber(1)
    basic.clearScreen()// 清空畫面
})
input.onButtonPressed(Button.B, function () {
    const love="TAIWAN!!";
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showString(""+love)
    basic.clearScreen()
})
