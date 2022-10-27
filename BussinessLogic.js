
// check If the character is a Number
function isNumber(char) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if((char.toUpperCase != char && char.toLowerCase != char) && (specialChars.test(char) == false)){
        if (typeof char !== 'string') {
            return false;
          }
        
          if (char.trim() === '') {
            return false;
          }
          return !isNaN(char);
    }
  }

 // check If the character is a special character

  function containsSpecialChars(char) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (typeof char !== 'string') {
        return false;
    } else if (char.trim() === '') {
        return false;
    } else {
        !isNaN(char);

        if((char.toUpperCase != char && char.toLowerCase != char)){
            return specialChars.test(char);
        }
    }
  }

  // check If the character is a Letter

  function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return char.toLowerCase() !== char.toUpperCase();
  }
 

 // Check the Password's Strength and register
function register(){
     
    var password = document.getElementById("password").value;
    var countUppercases = 0;
    var countNumbers = 0;
    var countSpecialCharacters = 0;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


    if(password != ""){
        if(password.length >=6)
    {
        if(password.length <=10){
            for (var letter of password){


                if(charIsLetter(letter) && (letter.toUpperCase() == letter)){
                 
                    countUppercases ++;
                 
                } else if(isNumber(letter)){

                    countNumbers ++;

                } else if(containsSpecialChars(letter)){

                    countSpecialCharacters ++;
                   
                }
            }

            if(countUppercases<1 || countNumbers < 1 || countSpecialCharacters< 1){
 
                alert("Your Password is weak. A Strong Password must contain at least: one uppercase letter one Number and a Special Character");
                window.location.reload(false);
            } else{

                alert("You have successfully Registered");
            
               
            }
             

        }else{
             
            alert("The Password is too long. A Strong Password must contain at least: one uppercase letter, one Number, a Special Character and a length in the range of 6 - 10 characters")
            window.location.reload(false);
        }
        
    } else{
        
        alert("The Password is too short. A Strong Password must contain at least: one uppercase letter, one Number, a Special Character and a length in the range of 6 - 10 characters")
        window.location.reload(false);
    }

} 

}

// Login

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email === "david@gmail.com"){

        if(password == "David@10"){

            alert("you have successfully login");

            window.location.reload(true);

        } else {
            alert("The Password is incorrect!");
            window.location.reload(false);
        }
         
    }  else {
        alert(email + " is incorrect!. Please try again");
        window.location.reload(false);
    }

}


// Reset Password

function resetPassword(){
    var email = document.getElementById("email").value;
    var oldPassword = document.getElementById("oldPassword").value;
    var newPassword = document.getElementById("newPassword").value;
    var retypedPassword = document.getElementById("retypedPassword").value;

    if(email != "" && oldPassword != "" && newPassword != "" && retypedPassword != ""){

        if(email === "david@gmail.com"){

            if(oldPassword == "David@10"){
                if(newPassword == retypedPassword){
    
                    alert("Password successfully reset");
                    window.location.reload(true);
                    
                } else {
                    alert("your new Password is not the same as the retyped one");
                    window.location.reload(false);
                }
    
            } else {
                alert("Your old Password is incorrect!");
                window.location.reload(false);
            }
             
        }  else {
            alert(email + " is incorrect!. Please try again");
            window.location.reload(false);
        }

    }

}