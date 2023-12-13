const defaultComments = [
    {
      name: "Connor Walton",
      timestamp: "02/17/2021",
      text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Emilie Beach",
      timestamp: "01/09/2021",
      text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
      name: "Miles Acosta",
      timestamp: "12/20/2020",
      text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
  ];

  function displayComment(comment) {
    const commentsSection = document.querySelector('.comments-section');

    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    commentElement.innerHTML = `
      <div class="avatar"></div>
      <div class="comment-details">
        <div class="name">${comment.name}</div>
        <div class="timestamp">${getHumanReadableTimestamp(comment.timestamp)}</div>
        <div class="text">${comment.text}</div>
      </div>
    `;

    commentsSection.insertBefore(commentElement, commentsSection.firstChild);
  }

  function getHumanReadableTimestamp(timestamp) {
    const currentTimestamp = new Date();
    const commentTimestamp = new Date(timestamp);
    const timeDifference = currentTimestamp - commentTimestamp;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  }

  function handleFormSubmission(event) {
    event.preventDefault();


    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    const name = nameInput.value;
    const commentText = commentInput.value;

    if (!name || !commentText) {

      alert('Name and comment cannot be empty!');
      return;
    }


    const newComment = {
      name: name,
      timestamp: new Date().toLocaleString(),
      text: commentText
    };


    defaultComments.unshift(newComment);


    nameInput.value = '';
    commentInput.value = '';

    clearComments();
    defaultComments.forEach(displayComment);
  }


  function clearComments() {
    const commentsSection = document.querySelector('.comments-section');
    commentsSection.innerHTML = '';
  }


  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmission);


  const commentsSection = document.querySelector('.comments-section');
  if (commentsSection.innerHTML.trim() === '') {
    defaultComments.forEach(displayComment);
  }

