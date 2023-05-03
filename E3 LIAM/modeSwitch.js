
let isDark = false;


let darkCol = "#171219";
let lightCol = "#f2fbeb";


if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  isDark = true;
  document.documentElement.style.setProperty("--col-01", lightCol);
  document.documentElement.style.setProperty("--col-02", darkCol);
  document.getElementById("mode-button").innerHTML = "Light Mode";
}

function switchModes(){

  if (isDark){
  
    isDark = false;
 
    document.documentElement.style.setProperty("--col-01", darkCol);
    document.documentElement.style.setProperty("--col-02", lightCol);
 
    document.getElementById("mode-button").innerHTML = "Dark Mode";
  } else {
  
    isDark = true;
    document.documentElement.style.setProperty("--col-01", lightCol);
    document.documentElement.style.setProperty("--col-02", darkCol);
    document.getElementById("mode-button").innerHTML = "Light Mode";
  }
}