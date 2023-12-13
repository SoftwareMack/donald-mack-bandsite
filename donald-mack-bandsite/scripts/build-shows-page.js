document.addEventListener('DOMContentLoaded', function () {

  const showsData = [
    {
      date: 'Mon Sept 06 2021',
      venue: 'Ronald Lane',
      location: 'San Francisco, CA',
    },
  
  ];

  function renderShows() {
    const mainSection = document.querySelector('.main');

    showsData.forEach((show, index) => {
      const ticket = document.createElement('div');
      ticket.classList.add('ticket');
      ticket.id = `ticket${index + 1}`;

      ['date', 'venue', 'location'].forEach(key => {
        const label = document.createElement('span');
        label.classList.add('label');
        label.textContent = key.toUpperCase();

        const content = document.createElement('span');
        content.classList.add('content');
        content.textContent = show[key];

        const infoContainer = document.createElement('div');
        infoContainer.classList.add(key);
        infoContainer.appendChild(label);
        infoContainer.appendChild(content);

        ticket.appendChild(infoContainer);
      });

      const ctaButton = document.createElement('button');
      ctaButton.classList.add('cta');
      ctaButton.textContent = 'BUY TICKETS';
      ctaButton.addEventListener('click', function (event) {
        event.stopPropagation();
        alert(`Buy Tickets Clicked for ${ticket.id}`);
 
      });

      ticket.appendChild(ctaButton);

    
      ticket.addEventListener('click', function () {
        handleTicketClick(ticket.id);
      });


      mainSection.appendChild(ticket);
    });
  }

  function handleTicketClick(ticketId) {
  
    resetTickets();

    const clickedTicket = document.getElementById(ticketId);
    clickedTicket.classList.add('selected');
  }

 
  function resetTickets() {
    const allTickets = document.querySelectorAll('.ticket');
    allTickets.forEach(ticket => {
      ticket.classList.remove('selected');
    });
  }

  renderShows();


});

     

 
