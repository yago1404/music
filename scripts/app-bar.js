const hash = {
    "hello-link": "index.html",
    "galeria-link": "galeria.html",
    "#": "#"
  };

const initAppBar = function(itemId) {
    item =  document.getElementById(itemId);
    item.style.padding = "4px 10px";
    item.style.borderBottom = "3px solid white";
}

 const clickNavItem = function(itemId) {
    if(hash[itemId] === undefined){
        itemId = "#";
    }
    window.location.href = hash[itemId];
}