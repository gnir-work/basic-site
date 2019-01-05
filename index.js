const FEMALE_AVATAR_SRC = "resources/female-avatar.jpg";
const MALE_AVATAR_SRC = "resources/male-avatar.jpg";


/**
 * At 50 50 change change the gender of the avatar.
 * @param {img dom element} element 
 */
function changeGender(element) {
    if (Math.random() > 0.5) {
        element.src = FEMALE_AVATAR_SRC;
    } else {
        element.src = MALE_AVATAR_SRC;
    }
}


/**
 * Fallback in case we have to much time.
 */
function setOnClicks() {
    var avatar = document.getElementsByClassName('avatar');
    for (let i = 0; i < avatar.length; i ++) {
        avatar[i].onclick = () => changeGender(avatar[i]);
    }
}

window.onload = setOnClicks;