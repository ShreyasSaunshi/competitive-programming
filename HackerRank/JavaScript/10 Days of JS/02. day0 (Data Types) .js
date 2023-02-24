function performOperation(secondInteger, secondDecimal, secondString) {
     const firstInteger = 4;
     const firstDecimal = 4.0;
     const firstString = 'HackerRank ';
     
     // write code below
     console.log((firstInteger + parseInt(secondInteger, 0)));
     console.log((firstDecimal + parseFloat(secondDecimal, 2)));
     console.log(`${firstString}${secondString}`); 
}
