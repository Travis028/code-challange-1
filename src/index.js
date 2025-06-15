document.addEventListener('DOMContentLoaded', () => {
    const guestForm = document.getElementById('guest-form');
    const guestNameInput = document.getElementById('guest-name');
    const guestList = document.getElementById('guest-list');
    const MAX_GUESTS = 10;

    guestForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (guestList.children.length >= MAX_GUESTS) {
            alert('Guest list is full! Maximum 10 guests allowed.');
            return;
        }

        const guestName = guestNameInput.value.trim();
        if (guestName) {
            const li = createGuestListItem(guestName);
            guestList.appendChild(li);
            guestNameInput.value = '';
        }
    });

    function createGuestListItem(name) {
        const li = document.createElement('li');
        li.className = 'guest-item';

        const guestName = document.createElement('span');
        guestName.textContent = name;
        guestName.className = 'guest-name';

        const rsvpButton = document.createElement('button');
        rsvpButton.textContent = 'Not Attending';
        rsvpButton.className = 'rsvp-button';
        rsvpButton.addEventListener('click', () => {
            li.classList.toggle('attending');
            rsvpButton.textContent = li.classList.contains('attending') ? 'Attending' : 'Not Attending';
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(guestName);
        li.appendChild(rsvpButton);
        li.appendChild(removeButton);
        
        return li;
    }
});



