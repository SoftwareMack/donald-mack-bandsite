// Default comments array
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

  // Function to display comments dynamically
  function displayComment(comment) {
    const commentsSection = document.querySelector('.comments-section');

    // Create comment element
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

    // Insert the new comment at the beginning
    commentsSection.insertBefore(commentElement, commentsSection.firstChild);
  }

  // Function to get human-readable timestamp
  function getHumanReadableTimestamp(timestamp) {
    const currentTimestamp = new Date();
    const commentTimestamp = new Date(timestamp);
    const timeDifference = currentTimestamp - commentTimestamp;

    // Convert time difference to human-readable format
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

  // Function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault();

    // Get form values
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    const name = nameInput.value;
    const commentText = commentInput.value;

    // Form validation
    if (!name || !commentText) {
      // Handle validation error state (not specified in the code, you can customize this part)
      alert('Name and comment cannot be empty!');
      return;
    }

    // Construct a new comment object
    const newComment = {
      name: name,
      timestamp: new Date().toLocaleString(), // Using current date and time as timestamp
      text: commentText
    };

    // Push the new comment object to the array of comments
    defaultComments.unshift(newComment);

    // Clear input fields
    nameInput.value = '';
    commentInput.value = '';

    // Re-render all comments from the comment array
    clearComments();
    defaultComments.forEach(displayComment);
  }

  // Function to clear all comments from the page
  function clearComments() {
    const commentsSection = document.querySelector('.comments-section');
    commentsSection.innerHTML = '';
  }

  // Event listener for form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmission);

  // Display default comments only if the comments section is empty
  const commentsSection = document.querySelector('.comments-section');
  if (commentsSection.innerHTML.trim() === '') {
    defaultComments.forEach(displayComment);
  }
