
// function generateList(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            // document.getElementById("demo").innerHTML=this.responseText;
            var response=JSON.parse(this.responseText);
            //  console.log(response);
             var cartitems = response.shoppinglist;
            //  console.log(cartitems);
            var list1="";
            for (var i=0;i<cartitems.length;i++){
                // list1+="<li>"+cartitems[i].name+"</li>";
                // list1+="<tr>";
                // list1+="<td>"+cartitems[i].name+"</td>";
                // list1+="<td>"+cartitems[i].quantity+"</td>";
                // list1+="<td>"+cartitems[i].department+"</td></tr>";
                // // 
                // list1+="<br>";
                list1+="<tr><td>"+cartitems[i].serialnumber+"</td><td>"+cartitems[i].name+"</td><td>"+cartitems[i].quantity+"</td><td>"+cartitems[i].unit+"</td><td>"+cartitems[i].department+"</td><td>"+cartitems[i].notes+"</td></tr>";
    
            }
            document.getElementById("demo").innerHTML=list1;
        }
     }
    xhttp.open("GET","items.json",true);
    xhttp.send();
    // }
    