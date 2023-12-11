document.addEventListener('DOMContentLoaded', function () {

    const showsData = [
      { date: 'Mon Sept 06 2021', venue: 'Ronald Lane', location: 'San Francisco, CA' },
    ];


    function createTicket(show) {
      const ticketContainer = document.querySelector('.ticket-container');

      const ticket = document.createElement('div');
      ticket.classList.add('ticket');

      const dateDesktop = document.createElement('p');
      dateDesktop.classList.add('date', 'desktop');
      dateDesktop.textContent = show.date;

      const dateMobile = document.createElement('p');
      dateMobile.classList.add('date', 'mobile');
      dateMobile.textContent = formatMobileDate(show.date);

      const venue = document.createElement('p');
      venue.classList.add('venue');
      venue.textContent = show.venue;

      const location = document.createElement('p');
      location.classList.add('location');
      location.textContent = show.location;

      const buyTicketsButton = document.createElement('button');
      buyTicketsButton.classList.add('buy-tickets-cta');
      buyTicketsButton.textContent = 'BUY TICKETS';

      ticket.appendChild(dateDesktop);
      ticket.appendChild(dateMobile);
      ticket.appendChild(venue);
      ticket.appendChild(location);
      ticket.appendChild(buyTicketsButton);

      ticketContainer.appendChild(ticket);
    }

 
    function formatMobileDate(dateString) {
      const dateArray = dateString.split(' ');
      return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
    }


    showsData.forEach((show) => {
      createTicket(show);
    });
  });
