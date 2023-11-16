function handleButtonClick(action, sectionId) {
    switch (action) {
        case 'like':
            toggleLike(sectionId);
            break;
        case 'comments':
            toggleComments(sectionId);
            break;
        case 'comment':
            addComment(sectionId);
            break;
        default:
            console.error('Unsupported action');
    }
}

function toggleLike(sectionId) {
    const likeCount = document.getElementById(`like-count-${sectionId}`);
    likeCount.innerText = parseInt(likeCount.innerText) + 1;
}

function toggleComments(sectionId) {
    const commentsSection = document.getElementById(`comments-section-${sectionId}`);
    commentsSection.classList.toggle('hidden');
}

function addComment(sectionId) {
    const commentInput = document.getElementById(`comment-input-${sectionId}`);
    const commentText = commentInput.value;

    if (commentText.trim() !== '') {
    const commentList = document.getElementById(`comment-list-${sectionId}`);
    const newComment = document.createElement('div');
    newComment.innerText = commentText;
    commentList.appendChild(newComment);
    }
}
