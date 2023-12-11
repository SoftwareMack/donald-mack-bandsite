document.addEventListener('DOMContentLoaded', function () {
  const comments = [
    { name: 'Connor Walton', timestamp: new Date('02/17/2021'), text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' },
    { name: 'Emilie Beach', timestamp: new Date('01/09/2021'), text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' },
    { name: 'Miles Acosta', timestamp: new Date('12/20/2020'), text: 'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.' }
  ];

  const commentForm = document.getElementById('commentForm');

  function displayComments() {
    const commentsSection = document.querySelector('.comments-section');
    commentsSection.innerHTML = '';

    comments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');

      const commentHeader = document.createElement('div');
      commentHeader.classList.add('comment__header');

      const avatar = document.createElement('div');
      avatar.classList.add('comment__avatar');

      const info = document.createElement('div');
      info.classList.add('comment__info');

      const name = document.createElement('h3');
      name.textContent = comment.name;

      const timestamp = document.createElement('p');
      timestamp.classList.add('comment__timestamp');
      timestamp.textContent = formatTimestamp(comment.timestamp);

      const text = document.createElement('p');
      text.classList.add('comment__text');
      text.textContent = comment.text;

      const divider = document.createElement('div');
      divider.classList.add('comment__divider');

      commentHeader.appendChild(avatar);
      info.appendChild(name);
      info.appendChild(timestamp);
      commentHeader.appendChild(info);

      commentElement.appendChild(commentHeader);
      commentElement.appendChild(text);
      commentElement.appendChild(divider);

      commentsSection.appendChild(commentElement);
    });
  }

  function addComment(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    if (!nameInput.value || !commentInput.value) {
      return;
    }

    const newComment = {
      name: nameInput.value,
      timestamp: new Date(),
      text: commentInput.value
    };

    comments.unshift(newComment);

    nameInput.value = '';
    commentInput.value = '';

    displayComments();
  }

  function formatTimestamp(timestamp) {
    const now = new Date();
    const timeAgoInSeconds = Math.floor((now - timestamp) / 1000);
    const minutes = Math.floor(timeAgoInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  }

  commentForm.addEventListener('submit', addComment);

  displayComments();
});
