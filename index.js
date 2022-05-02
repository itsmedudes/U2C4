// write js code here corresponding to index.html
// You should add submit event on the form
var arr = JSON.parse(localStorage.getItem("schedule")) || []
var form = document.querySelector("#masaiForm")
form.addEventListener("submit",function(){
   event.preventDefault();
   
  
   
   var obj = {
     match : document.querySelector("#matchNum").value,
     teamA :document.querySelector("#teamA").value,
     teamB :document.getElementById("teamB").value,
     date : document.getElementById("date").value,
     venue : document.getElementById("venue").value,

   }
   arr.push(obj)

   localStorage.setItem("schedule",JSON.stringify(arr))
   console.log(arr)
   
})
