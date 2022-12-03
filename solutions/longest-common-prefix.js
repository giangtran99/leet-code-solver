

var longestCommonPrefix = function(strs) {
    const lengthStrs = strs.map(item=>item.length)
    let minLoop = Math.min(...lengthStrs)

    console.log({minLoop})
    let longestPrefix = ""
    
    for(let i = 0; i < minLoop ; i++){
        let currentChar = strs[0][i]
        let count = 0
        let stopLoop = false
        for(let j = 1; j < strs.length ; j++){

            if(strs[j][i] === currentChar){
                count++
            }   
            else{
                stopLoop = true
            }
           
        }

        if(stopLoop){
            break
        }

        if(count === strs.length - 1){
            longestPrefix = longestPrefix + currentChar
        }
    }
    return longestPrefix

};

const strs = ["cir","car"]
console.log(longestCommonPrefix(strs))