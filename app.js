let emial=document.querySelector("#input-1");
let password=document.querySelector("#input-2");

function singin(event){
    event.preventDefault();
 let userEmail= emial.value; //store input value
 let userPassword= password.value; //store input value
 console.log(userEmail);
 console.log(userPassword);
 
 emial.value="";
 password.value="";
 
}
