'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});
function readLine() {
    return inputString[currentLine++];
}
function getArea(length, width) {
    let area;  
    return area;
}
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    
    return perimeter;
}
function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}
