/**
 * Change the img to a female avatar.
 * @param {img dom element} ele 
 */
function toFemale(ele) {
    ele.src = "resources/female-avatar.jpg";
}


/**
 * Fallback in case we have to much time.
 */
function setOnClicks() {
    var test = document.getElementsByClassName('avatar');
    for (let i = 0; i < test.length; i ++) {
        test[i].onclick = () => toFemale(test[i]);
    }
}

window.onload = setOnClicks;