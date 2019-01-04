function editPostAction() {
    var button = document.getElementById('editPostBtn');
    var blogBody = document.getElementById('blogBody');
    var blogTitleNew = document.getElementById('blogTitleNew');
    if (blogBody.contentEditable == "true") {
        blogBody.contentEditable = "false";
        blogBody.style.border = "none";
        blogTitleNew.contentEditable = "false";
        blogTitleNew.style.border = "none";
        button.innerHTML = "Edit";
    } else {
        blogBody.contentEditable = "true";
        blogBody.style.border = "1px solid red";
        blogTitleNew.contentEditable = "true";
        blogTitleNew.style.border = "1px solid red";
        button.innerHTML = "Save";
    }
}

var likeCount = 0;
function likePostAction() {
    likeCount++;
    document.getElementById('likeBlogBtn').innerHTML = 'Liked!';
    if (likeCount == 1) {
        document.getElementById('likeCountText').innerHTML = likeCount + ' person liked this!';
    } else {
        document.getElementById('likeCountText').innerHTML = likeCount + ' people have liked this!';
    }
}

function addUserCommentAction(id) {
    var newComment = id.value + '<br>';
    var existingComments = document.getElementById('userCommentList').innerHTML;
    document.getElementById('userCommentList').innerHTML = '<p class="commentBlock">'+newComment+'</p>' + existingComments;
    var userComment = document.getElementById('userComment');
    userComment.value = userComment.defaultValue;
}