// write js code here corresponding to matches.html

var data = JSON.parse(localStorage.getItem("schedule")) || []
var arr = []
newfilter(data)

function newfilter(match){ 
  document.querySelector("tbody").innerHTML =""
   match.forEach(function(ele){
var tr = document.createElement("tr")

var td1 = document.createElement("td")
td1.innerText = ele.match
var td2 = document.createElement("td")
td2.innerText = ele.teamA
var td3 = document.createElement("td")
td3.innerText = ele.teamB
var td4 = document.createElement("td")
td4.innerText = ele.date
var td5 = document.createElement("td")
td5.innerText = ele.venue
var td6 = document.createElement("td")
td6.innerText = "Favourite"
td6.style.cursor ="pointer"
td6.style.color ="green"
td6.addEventListener("click",function(){
   arr.push(ele)
   localStorage.setItem("favourites",JSON.stringify(arr))
})
tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr)
})
}

  var filter = document.querySelector("#filterVenue").addEventListener("change",handlesort)

  function handlesort(){
     var select = document.querySelector("#filterVenue").value
     var filt = data.filter(function(ele){
      return ele.venue == select
     })
       newfilter(filt)
     }
    
  
  







