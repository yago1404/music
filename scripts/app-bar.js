const initAppBar = function(itemId) {
    item =  document.getElementById(itemId);
    item.style.padding = "4px 10px";
    item.style.borderBottom = "3px solid white";
}

 const clickNavItem = function(itemId) {
     switch (itemId) {
        case 'hello-link':
            window.location.href = 'index.html';
            break;

         case 'galeria-link':
             window.location.href = 'galeria.html';
             break;
         case 'email':
             break;

         default:
             break;
     }
}