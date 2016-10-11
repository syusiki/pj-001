function openPage(evt, pageName){
    var i, x, highLights;
    x = document.getElementsByClassName("Page");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    highLights = document.getElementsByClassName("highLight");
    for (i = 0; i < highLights.length; i++) {
        highLights[i].className = highLights[i].className.replace("w3-amber", ""); 
        highLights[i].className = highLights[i].className.replace("w3-text-white", "");
    }
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " w3-amber";
  evt.currentTarget.className += " w3-text-white";
}
function mytimmer(){
  var mydate = new Date();
  y = mydate.getFullYear();
  z = mydate.getMonth();
  w = mydate.getDay();
  d = mydate.getDate();
  h = mydate.getHours();
  m = mydate.getMinutes();
  s = mydate.getSeconds();
  // ms = mydate.getMilliseconds();
  var rr = y + "." + z + "." + d + " " + h + ":" + m + ":" + s;
  document.getElementById("foot").innerHTML = rr;
  setTimeout("mytimmer()",1000);
}
mytimmer();