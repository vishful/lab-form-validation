// Progression 1 
// Check username
// create a function called as checkUserName()
function checkUserName(){
    var usn = document.myForm.UserName.value;
    console.log(usn);
    var special= /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
// username should not be empty
if (usn=="")
    return false;
// username should be a minimum of 8 characters and above 
else if ((usn.length < 9) || (usn.length > 15))
return false;
// username should be less than 15 characters
else if (usn.length < 15)
return false;
// No space is allowed in username
else if (usn.includes(" "))
return false;
// username should not contain special characters
else if (!special.test(usn))
return false;
// the function should return true if all the conditions above are validated.
else 
    return true;
// return false if the validation fails
}
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Document.myForm.email.value))
         {
           return (true)
         }
           alert("You have entered an invalid email address!")
           return (false)

}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function CheckPassword() 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(document.myForm.password.value.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}