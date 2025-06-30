function getArrayParams(...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
        sum += num;
    }

    let avg = (sum / arr.length).toFixed(2);
    return { min: min, max: max, avg: Number(avg) };
}

function summElementsWorker(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];

        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    let sumOddElement = 0;
    let sumEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element % 2 !== 0) {
            sumOddElement += element;
        } else {
            sumEvenElement += element;
        }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element % 2 === 0) {
            sumEvenElement += element;
            countEvenElement++;
        }
    }
    
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (const arr of arrOfArr) {
        const result = func(...arr);

        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    
    return maxWorkerResult;
}
