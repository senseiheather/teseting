/**
 * For better readability, you should rewrite the function
 * signature in a "natural language" way. You can refer to
 * each variable in any order using the $VARIABLE syntax.
 */

//% color="#AA278D"
namespace formatting {

    //% block="fooooooo"
    export function foo() {
        effects.blizzard.startScreenEffect(500)

    }

    //% block="testing" 
    export function sortNums(avgArray: any[], spriteSpeaking: Sprite) {
    if (avgArray.length > 0) {
        averageAge = 0
        for (let value of numList) {
            averageAge += value
            spriteSpeaking.sayText(convertToText(value), 500, true)
            pause(500)
        }
        pause(2000)
    }
}

    //% block="shuffled text = $text x = $x"
    export function shuffled(x: number, text: string) {

    }
}
