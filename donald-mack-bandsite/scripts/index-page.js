import BandSiteApi from "./band-site-api.js";
const bandsiteAPI = new BandSiteApi();

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
    const commentsSection = document.querySelector('.comments-container');

    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('avatar');

    const commentDetailsDiv = document.createElement('div');
    commentDetailsDiv.classList.add('comment-details');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = comment.name;

    const timestampDiv = document.createElement('div');
    timestampDiv.classList.add('timestamp');
    timestampDiv.textContent = getHumanReadableTimestamp(comment.timestamp);

    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    textDiv.textContent = comment.comment;

    commentDetailsDiv.appendChild(nameDiv);
    commentDetailsDiv.appendChild(timestampDiv);
    commentDetailsDiv.appendChild(textDiv);

    commentElement.appendChild(avatarDiv);
    commentElement.appendChild(commentDetailsDiv);

    commentsSection.appendChild(commentElement);
    
    const bioButton = document.querySelector('.main-nav__button--bio');
    const showsButton = document.querySelector('.main-nav__button--shows');

    bioButton.classList.add('active');
    showsButton.classList.remove('active');
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

  async function handleFormSubmission(event) {
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
      comment: commentText
    };

  await bandsiteAPI.postComment(newComment);


  const commentsSection = document.querySelector('.comments-container');
  commentsSection.innerHTML=""
    let Array=await bandsiteAPI.getComments();
    Array.forEach(displayComment);

    event.target.reset();

  }

  function clearComments() {
    const commentsSection = document.querySelector('.comments-container');
    commentsSection.innerHTML = '';
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmission);

  const commentsSection = document.querySelector('.comments-container');
  if (commentsSection.innerHTML.trim() === '') {
    let Array=await bandsiteAPI.getComments();
    Array.forEach(displayComment);
  }
