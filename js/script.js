
var allproduct = document.querySelectorAll(".parent .p1")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1") 

var totalprice=document.querySelector("#totalprice")
let total=0

allproduct.forEach(function(item){
    item.onclick = function (){
      total += +(item.getAttribute("price"))
      content.innerHTML += item.textContent+" && "
      if (content.innerHTML != ""){
        btn.style.display="block"
        
      }
    }
}) 
  btn.onclick = function () {
    console.log(total)
    document.getElementById("totalprice").innerHTML = total
  }

