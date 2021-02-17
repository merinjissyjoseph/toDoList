let myPromise=new Promise(function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var title1=myObj.title;
      var status=myObj.completed;
      var counter =0;
      
      var list1="";
          // var list1=[];
          for (var i=0;i<myObj.length;i++){
              
                   
              if (myObj[i].completed==true){
                // list1.push('<input type="checkbox" id="checkbox" checked=true disabled >' +myObj[i].title+"<br><br>");
              //  list1[i]+='<input type="checkbox" id="checkbox" checked=true disabled >' +myObj[i].title+"<br><br>";
              list1+='<input type="checkbox" id="checkbox" checked=true disabled >'+"  " +myObj[i].title+"<br><br>";
            }
            else{
              // list1.push('<input type="checkbox" id="checkbox" onclick=updateList() >' +myObj[i].title+"<br><br>");
               list1+='<input type="checkbox" id="checkbox" onclick=updateList() >'+"  " +myObj[i].title+"<br><br>";
            }
       
  
          }
           document.getElementById("todo").innerHTML=list1;
  
  
  
    }
  };
  xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xmlhttp.send();
  });
  
  
  var counter ;
  function updateList(){
    var myPromise= new Promise(function(resolve,reject){
    var myCheck = document.getElementById("checkbox");
    var compltedTasks = document.querySelectorAll('input[type="checkbox"]:disabled').length;
    // console.log(compltedTasks);
    // if (myCheck.checked == true){
    //   // myCheck.disabled=true;
    //   counter+=1;
      var checkedTasks = document.querySelectorAll('input[type="checkbox"]:checked').length;
      counter=checkedTasks-compltedTasks;
        // console.log(checkedTasks);
  
      console.log(counter);
    
   if (counter==5){
     resolve(alert("Congratulations !! You have sucessfully completed 5 tasks"))
   }
  })
  myPromise.then(function(){
  
   alert("Good Job!! Come and finish the remaining task tomorrow");
    window.location.href="./home.html";
  });
  }
  
  
  
  