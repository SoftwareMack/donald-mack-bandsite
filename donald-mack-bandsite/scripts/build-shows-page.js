import BandSiteApi from "./band-site-api.js";
const bandsiteAPI = new BandSiteApi();
const concertsData = [
    {
      date: "Mon Sept 06 2021",
      venue: "Ronald Lane",
      location: "San Francisco, CA",
      buttonText: "BUY TICKETS",
    },
    {
      date: "Tue Sept 21 2021",
      venue: "Pier 3 East",
      location: "San Francisco, CA",
      buttonText: "BUY TICKETS",
    },
    {
      date: "Fri Oct 15 2021",
      venue: "View Lounge",
      location: "San Francisco, CA",
      buttonText: "BUY TICKETS",
    },
    {
      date: "Sat Nov 06 2021",
      venue: "Hyatt Agency",
      location: "San Francisco, CA",
      buttonText: "BUY TICKETS",
    },
    {
      date: "Fri Nov 26 2021",
      venue: "Moscow Center",
      location: "San Francisco, CA",
      buttonText: "BUY TICKETS",
    },
    {
      date: "Wed Dec 15 2021",
      venue: "Press Club",
      location: "San Francisco, CA",
      buttonText: "BUY TICKETS",
    },
  ];


  function createConcertElement(concert) {
    const ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");
    ticketDiv.id = concert.id;

    const dateDiv = createSubElement("date", "DATE", concert.date);
    const venueDiv = createSubElement("venue", "VENUE", concert.place);
    const locationDiv = createSubElement("location", "LOCATION", concert.location);

    const button = document.createElement("button");
    button.classList.add("cta");
    button.textContent = "Buy Tickets";

    button.addEventListener("click", handleTicketClick);

    const divider = document.createElement("div");
    divider.classList.add("divider");

    ticketDiv.appendChild(dateDiv);
    ticketDiv.appendChild(venueDiv);
    ticketDiv.appendChild(locationDiv);
    ticketDiv.appendChild(button);


    ticketDiv.appendChild(divider);

    return ticketDiv;
  }


  function createSubElement(className, label, content) {
    const subDiv = document.createElement("div");
    subDiv.classList.add(className);

    const labelSpan = document.createElement("span");
    labelSpan.classList.add("label");
    labelSpan.textContent = label;

    const contentSpan = document.createElement("span");
    contentSpan.classList.add("content");
    contentSpan.textContent = content;

    subDiv.appendChild(labelSpan);
    subDiv.appendChild(contentSpan);

    return subDiv;
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







  function handleTicketClick() {

    document.querySelectorAll(".ticket").forEach((ticket) => {
      ticket.classList.remove("selected");
    });


    this.classList.add("selected");
  }


  async function renderConcerts() {
    const mainSection = document.querySelector(".main");
    let Array=await bandsiteAPI.getShows();
    Array.forEach((concert, index) => {

      concert.id = `ticket${index + 1}`;

      const concertElement = createConcertElement(concert);

      mainSection.appendChild(concertElement);
    });
  }


  document.addEventListener("DOMContentLoaded", renderConcerts);

