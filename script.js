const events = [
    { date: '01 Nov', time: '09:30', day: 'Friday', match: 'India vs New Zealand - 3rd Test - Day 1', stadium: 'Wankhede Stadium', location: 'Mumbai, Maharashtra', available: true },
    { date: '02 Nov', time: '09:30', day: 'Saturday', match: 'India vs New Zealand - 3rd Test - Day 2', stadium: 'Wankhede Stadium', location: 'Mumbai, Maharashtra', available: false },
    { date: '03 Nov', time: '09:30', day: 'Sunday', match: 'India vs New Zealand - 3rd Test - Day 3', stadium: 'Wankhede Stadium', location: 'Mumbai, Maharashtra', available: false },
    { date: '10 Nov', time: '14:30', day: 'Friday', match: 'Australia vs South Africa - 2nd ODI', stadium: 'Eden Gardens', location: 'Kolkata, West Bengal', available: true },
    { date: '15 Nov', time: '14:30', day: 'Tuesday', match: 'Pakistan vs Sri Lanka - 1st T20', stadium: 'Feroz Shah Kotla', location: 'Delhi, India', available: true },
    { date: '18 Nov', time: '18:00', day: 'Friday', match: 'Bangladesh vs Afghanistan - 3rd T20', stadium: 'Rajiv Gandhi Stadium', location: 'Hyderabad, Telangana', available: false },
    { date: '20 Nov', time: '10:00', day: 'Sunday', match: 'England vs India - 5th ODI', stadium: 'M. Chinnaswamy Stadium', location: 'Bangalore, Karnataka', available: true },
    { date: '25 Nov', time: '10:30', day: 'Thursday', match: 'West Indies vs India - 2nd Test - Day 1', stadium: 'Wankhede Stadium', location: 'Mumbai, Maharashtra', available: false },
    { date: '30 Nov', time: '10:00', day: 'Wednesday', match: 'New Zealand vs Pakistan - 4th ODI', stadium: 'Sardar Patel Stadium', location: 'Ahmedabad, Gujarat', available: true },
    { date: '05 Dec', time: '09:00', day: 'Monday', match: 'India vs Bangladesh - 1st Test - Day 1', stadium: 'Chidambaram Stadium', location: 'Chennai, Tamil Nadu', available: false },
    { date: '07 Dec', time: '09:00', day: 'Wednesday', match: 'India vs Bangladesh - 1st Test - Day 2', stadium: 'Chidambaram Stadium', location: 'Chennai, Tamil Nadu', available: true },
    { date: '12 Dec', time: '14:30', day: 'Sunday', match: 'Australia vs West Indies - 1st T20', stadium: 'M. A. Chidambaram Stadium', location: 'Chennai, Tamil Nadu', available: false },
    { date: '18 Dec', time: '18:00', day: 'Saturday', match: 'England vs Australia - 4th T20', stadium: 'Eden Gardens', location: 'Kolkata, West Bengal', available: true },
    { date: '22 Dec', time: '14:30', day: 'Thursday', match: 'South Africa vs Sri Lanka - 2nd ODI', stadium: 'Feroz Shah Kotla', location: 'Delhi, India', available: true },
    { date: '28 Dec', time: '10:30', day: 'Wednesday', match: 'India vs Australia - 5th Test - Day 1', stadium: 'Wankhede Stadium', location: 'Mumbai, Maharashtra', available: true },
    { date: '30 Dec', time: '10:30', day: 'Friday', match: 'India vs Australia - 5th Test - Day 2', stadium: 'Wankhede Stadium', location: 'Mumbai, Maharashtra', available: false }
];


// Display the event list
function displayEvents(events) {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

        eventDiv.innerHTML = `
            <div class="details">
                <h3>${event.match}</h3>
                <p>${event.day}, ${event.date} - ${event.time}</p>
                <p>Location: ${event.stadium}, ${event.location}</p>
            </div>
            <div class="action">
                ${event.available ? 
                    '<a href="booktic.html"><button>Book Tickets</button></a>' :
                    '<button class="unavailable" disabled>Seats Full!</button>'}
            </div>
        `;
        eventList.appendChild(eventDiv);
    });
}

// Search function
function searchMatch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredEvents = events.filter(event => event.match.toLowerCase().includes(query));
    displayEvents(filteredEvents);
}

// Initial load
displayEvents(events);
function applyFilters() {
    const date = document.getElementById('dateFilter').value;
    const stadium = document.getElementById('stadiumFilter').value;
    const availableOnly = document.getElementById('availabilityFilter').checked;

    const filteredEvents = events.filter(event => {
        const matchesDate = date ? event.date === date : true;
        const matchesStadium = stadium ? event.stadium.includes(stadium) : true;
        const matchesAvailability = availableOnly ? event.available : true;
        return matchesDate && matchesStadium && matchesAvailability;
    });

    displayEvents(filteredEvents);
}

function initializeFilters() {
    const dates = [...new Set(events.map(event => event.date))];
    const stadiums = [...new Set(events.map(event => event.stadium))];

    const dateFilter = document.getElementById('dateFilter');
    const stadiumFilter = document.getElementById('stadiumFilter');

    dates.forEach(date => {
        const option = new Option(date, date);
        dateFilter.add(option);
    });

    stadiums.forEach(stadium => {
        const option = new Option(stadium, stadium);
        stadiumFilter.add(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayEvents(events);
    initializeFilters();
});

