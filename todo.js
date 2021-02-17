let myPromise=new Promise(function(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    var title1=myObj.title;
    var status=myObj.completed;
    var counter =0;
    
        var list1="";
        for (var i=0;i<myObj.length;i++){
            
            // list1+="<br>"+title1[i]+status[i]+"<br>";
            // console.log(myObj[i])
            // var x = document.createElement("INPUT");
            //  x.setAttribute("type", "checkbox");
            // x.checked=myObj[i].completed;
        
            if (myObj[i].completed==true){
            list1+='<input type="checkbox" id="checkbox" checked=true disabled >' +myObj[i].title+"<br><br>";
          }
          else{
            list1+='<input type="checkbox" id="checkbox" onclick=updateList() >' +myObj[i].title+"<br><br>";
          }
     

        }
         document.getElementById("demo").innerHTML=list1;



  }
};
xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xmlhttp.send();
});

var counter =0;
function updateList(){
  var myPromise= new Promise(function(resolve,reject){
  var myCheck = document.getElementById("checkbox");
  // check https://flaviocopes.com/how-to-disable-button-javascript/
  if (myCheck.checked == true){
    myCheck.disabled=true;
    counter+=1;
      console.log("inside counter");
    console.log(counter);
  }
 if (counter==5){
   resolve(alert("congratulations , you have sucessfully completed 5 tasks"))
 }
})
myPromise.then(function(){

 alert("Good Job!! Come and finish the remaining task tomorrow");
  window.location.href="./home.html";
});
}




//promise

// myPromise.then(function(){
//   console.log("inside promise");
// } );

