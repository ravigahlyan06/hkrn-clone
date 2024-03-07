const alertMsg = document.getElementById("alert_msg");

const loader = document.getElementById("loader_spin");




 function handleOnAlert(){
alertMsg.style.display = "block";
 }

 function handleBtn(){
loader.style.display = "block";
alertMsg.style.display = "none";
setTimeout(()=>{
   window.location = "D:/Ravi/ravii/Javascript/HKRN/candidateexperince.html"
},3000)
 }