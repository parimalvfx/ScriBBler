function toggleModal(modalID) {
    var modal = document.getElementById(modalID);
    if (modal.style.display == '') {
        modal.style.display = 'block';
    } else {
        modal.style.display = '';
    }
}
