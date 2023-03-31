function initAppBar() {
    document.getElementById('hello-link').style.padding = "4px 10px";
    document.getElementById('hello-link').style.borderBottom = "3px solid white";
}

const clickNavItem = function(itemId) {
    let elements = document.getElementsByClassName('nav-item');
    for (let i = 0; i < elements.length; i++) {
        document.getElementById(elements.item(i).id).style.padding = "0";
        document.getElementById(elements.item(i).id).style.borderBottom = "0px";
    }
    document.getElementById(itemId).style.padding = "4px 10px";
    document.getElementById(itemId).style.borderBottom = "3px solid white";
}