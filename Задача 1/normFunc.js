function norm(maxN){

    let resultArray = [];
    // перебираем все простые числа, пока массив с результатом не достигнет заданного
    for (let n = 2; resultArray.length < maxN; n++) {
        // вводим вспомгательный маркер (мне так проще)
        let check = false;  
        // Проверка чисел на деление
        for (let resultArrayIndex = 0; resultArrayIndex < resultArray.length; resultArrayIndex++) {

            if (n % resultArray[resultArrayIndex] === 0 && !(n / resultArray[resultArrayIndex] === 1)) {
                check = true
                break
            }
            
        }

        if (check === false) {
            resultArray.push(n)
        };

    }

    return resultArray;

}


console.time();
console.log(norm(process.argv[2]));
console.timeEnd();


// Math.sqrt(n) < resultArray[arrIndex]