'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});
function readLine() {
    return inputString[currentLine++];
}
/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here
    const  addNum=(a,b)=>{
        const lenA=a.length
        const lenB=b.length
        let rememberNum=0
        const sum=[]
        if(lenA<lenB){
            const a1=[...a]
            for(let i=lenB-lenA-1;i>=0;i--){
                a1.unshift('0')
            }
            for(let i=lenB-1;i>=0;i--){
                let sumNum=Number.parseInt(a1[i])+Number.parseInt(b[i])
                if(i!==lenB-1&&rememberNum!==0){
                    sumNum+=rememberNum
                    rememberNum=0
                }
                if(sumNum>10)rememberNum=1
                sum.unshift(sumNum)
            }
        }else{
            const b1=[...b]
            for(let i=lenA-lenB-1;i>=0;i--){
                b1.unshift('0')
            }
            for(let i=lenA-1;i>=0;i--){
                let sumNum=Number.parseInt(a[i])+Number.parseInt(b1[i])
                if(i!==lenA-1&&rememberNum!==0){
                    sumNum+=rememberNum
                    rememberNum=0
                }
                if(sumNum>=10){
                    const sumNumStr=String(sumNum).split("")
                    sumNum=sumNumStr[sumNumStr.length-1]
                    rememberNum=1
                }
                sum.unshift(Number.parseInt(sumNum))
            }
        }
        return Number.parseInt(sum.join(""))
    }
    let total=0
    for(let i=0;i<ar.length;i++){
        total=addNum(String(total).split(""),String(a[i]).split(""))
    }
    return total
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const arCount = parseInt(readLine().trim(), 10);
    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
    const result = aVeryBigSum(ar);
    ws.write(result + '\n');
    ws.end();
}

// const a=[1000000001,1000000002,1000000003,1000000004,1000000005]
// console.log(aVeryBigSum(a))