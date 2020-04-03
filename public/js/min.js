  var style =  document.getElementById(`item`).style

// if (style.height<"0%"){
//   return openNav()
// }
    
function openNav() {
  if (style.display=="flex"){
    return closeNav()
  }else{
    style.display = "flex";
    style.width = "100%";
  } 
}

function closeNav() {
  if (document.querySelector('nav').style.height=="65px"){
    return closeNav()
  }else{
    style.display = "none";
    style.width = "0%"; 
  }
}  


function alerts() {
  document.getElementById(`success`).style.display = "none";
}
function alerte() {
  document.getElementById(`error`).style.display = "none";
}