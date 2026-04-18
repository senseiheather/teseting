/**
 * For better readability, you should rewrite the function
 * signature in a "natural language" way. You can refer to
 * each variable in any order using the $VARIABLE syntax.
 */



namespace trainAI{


    /*
    *@param spriteSpeaking 
    *@param avgArray
    */
    //% spriteSpeaking.shadow="variables_get" spriteSPeaking.defl="mySprite"
    //%block="Get average of $avgArray from $spriteSpeaking"
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
    /*
    *@param numberArray
    */ 
    //% numberArray.shadow="variables_get" numberArray.delf="list" 
    //%block="Ask for age from $numberArray"
    export function askQuestion (numberArray: number[]) {
    numberArray.push(game.askForNumber("How old are you?", 2))
}


    /*
    *@param answerChoices
    *@param answerCount
    */ 
    //% answerChoices.shadow="variables_get" answerChoices.delf="list" 
    //% answerCount.shadow="variables_get" answerCount.delf="list"
    //%block="Use %answerChoices to hold choices and %answerCount to count responses" 
    export function answerQuestion (answerChoices: string[], answerCount: number[]) {
    story.showPlayerChoices(answerChoices[0], answerChoices[1], answerChoices[2], answerChoices[3])
    if (story.checkLastAnswer(answerChoices[0])) {
        answerCount[0] = answerCount[0] + 1
    } else if (story.checkLastAnswer(answerChoices[1])) {
        answerCount[1] = answerCount[1] + 1
    } else if (story.checkLastAnswer(answerChoices[2])) {
        answerCount[2] = answerCount[2] + 1
    } else if (story.checkLastAnswer(answerChoices[3])) {
        answerCount[3] = answerCount[3] + 1
    }
}

    /*
    *@param answerList
    *@param answerCounter
    *@param fave
    //% answerList.shadow="variables_get" answerList.delf="list" 
    //% answerCounter.shadow="variables_get" answerCounter.delf="list" 
    //% fave.shadow="variables_get" fave.delf="string" 
    //%block="Use $answerList for choices, $answerCounter for votes, and $fave to find the favorite"  
    */ 
    export function checkFavorite (answerList: string[], answerCounter: number[], fave: string) {
    let biggestNum = 0
    let counter = 0
    let checkVal = 0
    for (let value of answerCounter) {
        if (value > biggestNum) {
            biggestNum = value
            checkVal = counter
        }
        counter += 1
    }
    game.showLongText("the best " + fave + " is " + answerList[checkVal], DialogLayout.Bottom)
}
    /*
    *@param ans
    *@param counter
    */
    //% ans.shadow="variables_list" ans.delf="answers" 
    //% counter.shadow="variables_list" counter.delf="counter" 
    //block="create survey from $ans and $counter" 
    export function createSurvey (ans: string[], counter: number[]) {
    ans.shift()
    counter.shift()
    game.showLongText("You will ask someone about their favorite thing! Each answer will need to be a single word", DialogLayout.Center)
    let ques = game.askForString("What favorite thing should they list?")
    let theQues = ques
    for (let index = 0; index < 4; index++) {
        answer1 = game.askForString("Add one choice for the player(s) to answer")
        ans.push(answer1)
        counter.push(index)
    }
    return theQues
}
} 
