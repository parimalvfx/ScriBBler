function toggleModal1(modalID) {

    var modal = document.getElementById(modalID);
    if (modal.style.display == '') {
        modal.style.display = 'block';
    }
 else {
        modal.style.display = '';
    }
}

document.getElementById("allposts").addEventListener("click", myFunction);

function myFunction() {
window.location.href = 'html/bloglist.html';

}
