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

    

    //% block="shuffled text = $text x = $x"
    export function shuffled(x: number, text: string) {

    }
}

namespace language{

    
     //% block
    export function statementWith5Arguments(arg1: number[],
        arg2: number, arg3: number,
        arg4: number, arg5: number) {
        
    }

    /*
    *@param spriteSpeaking 
    */
    //% spriteSpeaking.shadow="variables_get" spriteSPeaking.defl="mySprite"
    //%block 
export function avgAgesortNums(avgArray: number[], spriteSpeaking: Sprite) {
        let averageAge = 0

    if (avgArray.length > 0) {
        
        for (let value of avgArray) {
            averageAge += value
            spriteSpeaking.sayText(convertToText(value), 500, true)
            pause(500)
        }
        averageAge = averageAge / avgArray.length
        spriteSpeaking.sayText("The average age is " + convertToText(averageAge)) 
        pause(2000)
    }
        
}
    
} 
