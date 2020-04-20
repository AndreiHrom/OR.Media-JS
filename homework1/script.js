

var container = document.getElementById("demo");
var btn1 = document.getElementById("myFun");
var btn2 = document.getElementById("SuperButton");
var btn3 = document.getElementById("button");


function myFunction(){    
    location.replace("https://www.w3schools.com")
  }


 
window.onload = function() {
    document.getElementById('SuperButton').onclick = function()
    {
        if(document.body.className != 'new_class')
        {
            document.body.className = 'new_class';
        }
        else
        {
            document.body.className = '';
        }
    }
}

document.getElementById("flexblok").style.display = "none";

btn3.onclick = function(){
  container.style.display = "none";   
    document.getElementById("flexblok").style.display = "flex";
}


var term = {
  Canada:10,
  Poland:15,
  Germani:20,
  Belarus:25,
  Moskov:23,
}
function sumTerm(){
  var sum = 0;
  for (var temperature of Object.values(term)){
      sum += temperature;
  }
  return resultterm = sum / Object.keys(term).length;
}

alert('Средняя температура  по городам :'+sumTerm(term) + ' градусов');
console.log('Средняя температура по городам :'+sumTerm(term)+ ' градусов');


function getMaxOfArray(term) {
  var term = Object.values(term);
 return max = Math.max.apply(null, term);
}  
alert('Максимальная температура  по городам :' + getMaxOfArray(term) + ' градусов');
console.log('Максимальная температура  по городам :' + getMaxOfArray(term) + ' градусов');

  /*  document.getElementById('newLocal').onclick = function(){
    document.getElementById('newLocal').style.display = "none";
    document.getElementById('myFun').style.display = "none";
    document.getElementById('SuperButton').style.display = "none";
    
}*/
