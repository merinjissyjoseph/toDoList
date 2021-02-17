let uname=document.getElementById("username").value;
var pwd=document.getElementById("password").value;
let formaction=document.getElementById("loginform").value;
function validate( ){
    console.log("inside function");
   let uname=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;
    // let demo=document.getElementById("demo").value;
    console.log(document.getElementById("username"));
    if(uname=="admin" && pwd =="12345"){
        console.log(uname);
        console.log(pwd);
        document.getElementById("demo").innerHTML="Success!!";
        // demo.style.color="green";
        // document.getElementById("demo1").innerHTML=uname;
        login();
         return true;
    }
    else{
        document.getElementById("demo").innerHTML="Invalid username or password";
        // document.getElementById("demo1").innerHTML=uname;
          return false;
 }
}
function login(){
    document.getElementById("loginform").setAttribute("action","./home.html");
    // console.log("inside login function page");
  
}