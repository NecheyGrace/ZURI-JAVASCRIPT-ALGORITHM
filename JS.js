  //1st task 

 function convertFahrToCelsius (temp) { if (typeof(temp) === 'number'|| typeof(temp) === 'string') {return ((temp - 32) * 5/9).toFixed(4)} else {
    return `${temp} is not a valid number but a/an ${typeof(temp)}`;
  }}


  //2nd task 

  function checkYuGiOh(n) {
   return Array.from({length: n}, (x, i) => i) 

    else (n%2==0){console.log('Yu')}                                                              
    else  (n%3==0) {console.log('Gu')}                                                     
    else  (n%5==0) {console.log('Oh')} } 
