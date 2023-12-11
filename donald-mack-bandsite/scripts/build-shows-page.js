const SHOWS_TABLE_ROW_CLASS = 'shows-table__row';

const showsData = [
  { date: 'Mon Sept 06 2021', venue: 'Ronald Lane', location: 'San Francisco, CA' },
  { date: 'Tue Sept 21 2021', venue: 'Pier 3 East', location: 'San Francisco, CA' },
  { date: 'Fri Oct 15 2021', venue: 'View Lounge', location: 'San Francisco, CA' },
  { date: 'Sat Nov 06 2021', venue: 'Hyatt Agency', location: 'San Francisco, CA' },
  { date: 'Fri Nov 26 2021', venue: 'Moscow Center', location: 'San Francisco, CA' },
  { date: 'Wed Dec 15 2021', venue: 'Press Club', location: 'San Francisco, CA' },
  
];

function createShowRow(show) {
  const tableRow = document.createElement('div');
  tableRow.classList.add(SHOWS_TABLE_ROW_CLASS);

  const dateCell = createTableCell(show.date, 'shows-table__cell--date');
  const venueCell = createTableCell(show.venue, 'shows-table__cell--venue');
  const locationCell = createTableCell(show.location, 'shows-table__cell--location');
  const buyTicketsButton = createBuyTicketsButton();

  tableRow.appendChild(dateCell);
  tableRow.appendChild(venueCell);
  tableRow.appendChild(locationCell);
  tableRow.appendChild(buyTicketsButton);

  return tableRow;
}

function createTableCell(text, className) {
  const cell = document.createElement('div');
  cell.classList.add('shows-table__cell', className);
  cell.textContent = text;
  return cell;
}

function createBuyTicketsButton() {
  const button = document.createElement('button');
  button.classList.add('cta-button', 'shows-table__cta-button');
  button.textContent = 'BUY TICKETS';
  
  return button;
}

function renderShowsData() {
  const showsTable = document.querySelector(`.${SHOWS_TABLE_ROW_CLASS}s`); 

  showsData.forEach(show => {
    const tableRow = createShowRow(show);
    showsTable.appendChild(tableRow);

    tableRow.addEventListener('mouseover', () => {
      tableRow.classList.add('hover-state');
    });

    tableRow.addEventListener('click', () => {
      
      document.querySelectorAll(`.${SHOWS_TABLE_ROW_CLASS}`).forEach(row => {
        row.classList.remove('selected-state');
      });

      tableRow.classList.add('selected-state');
    });
  });
}

function embedSoundCloud() {
  const soundcloudContainer = document.querySelector('.hero__soundcloud');
  soundcloudContainer.innerHTML = `
    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1669098723&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
      <a href="https://soundcloud.com/imperss" title="Imperss Music ♪" target="_blank" style="color: #cccccc; text-decoration: none;">Imperss Music ♪</a> ·
      <a href="https://soundcloud.com/imperss/the-ways-of-the-heart-imperss-music-original-mix" title="The Ways Of The Heart @ Imperss Music (Original Mix)" target="_blank" style="color: #cccccc; text-decoration: none;">The Ways Of The Heart @ Imperss Music (Original Mix)</a>
    </div>`;
}

renderShowsData();
embedSoundCloud();

