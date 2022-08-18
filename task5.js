// )Print odd numbers in an array

// anonymous  : 

   letnumber=function(array){
  for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
           console.log(array[i])
        } 
   }
}
// IIFE :       


(function(array){
for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
           console.log(array[i])
        } 
   }
})([1,2,3,4])

// Convert all the strings to title caps in a string array

// anonymous :   
let title=function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}
// IIFE :

  (function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
})("MUDRA IS MY NAME");

// Sum of all numbers in an array 


// anonymous  :  

   let arrat=function(array){
  var sum = 0;
  for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
   }
   return sum;
}
// IIFE :     

(function(array){
var sum = 0;
  for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
   }
   return sum;
})([1,2,3,4])


// )Return all the prime numbers in an array

// Anonymous Function:
let prime=function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 }
// IIFE :
    
(function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 })([1,2,3,4])


//  Return all the palindromes in an array


// Anonymous Function :  

    let pali=function (arr, n)
{
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}

// IIFE : 

          (  function (arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    })([1,2,3] , 3)

    
    // .Remove duplicates from an Array


    // Anonymous Function :
    let duplicate= function(array){
      let dup = [...new Set(array)];
      console.log(dup);
    }
// IIFE :   
             (function(array){
      let dup = [...new Set(array)];
      console.log(dup);
     })([1,1,2,3,4])


    //  <----------------------------###########################--------------------------->

     // )Print odd numbers in an array

     oddNumbers = (array) => {
      for(var i = 0 ; i< array.length ; i++){
           if(array[i]%2!=0){
              console.log(array[i])
           } 
      }
           }

           // Convert all the strings to title caps in a string array

           titleCase = (str) => {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
            } 
            return str.join(' ');
          }            


          // Sum of all numbers in an array 


          sum = (array)=>{
            var sum = 0;
                 for(var i = 0 ; i< array.length ; i++){
                    sum = sum + array[i];
                  }
                  return sum;
                  }


                  // )Return all the prime numbers in an array


                  primeNumber = (numArray) => {
                    numArray = numArray.filter((number) => {
                      for (var i = 2; i <= Math.sqrt(number); i++) {
                        if (number % i === 0) return false;
                      }
                      return true;
                    });
                    console.log(numArray);
                }
                

