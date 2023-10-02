var inc=0;
function myfunction(){
    var name= document.getElementById("box").value;
    var password= document.getElementById("boxs").value;

    
    if(name == "santosh" && password == "santosh123" ){
       alert("you have succesfully loggedin");
    }
    else{
        alert("Enter correct credentials");
        inc ++;
        if(inc>=3){
            alert("your id was blocked");
            return false;
        }
    }
}

