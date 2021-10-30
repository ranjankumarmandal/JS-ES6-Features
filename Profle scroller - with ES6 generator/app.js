// profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
        }
    };
}

const data = [
    {
        name: 'Ranjan Kumar Mandal',
        age: 22,
        gender: 'male',
        lookingfor: 'female',
        location: 'Bangalore',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },

    {
        name: 'sweeti Kumar Mandal',
        age: 42,
        gender: 'female',
        lookingfor: 'male',
        location: 'Indiranagar',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },

    {
        name: 'brad Kumar Mandal',
        age: 50,
        gender: 'male',
        lookingfor: 'female',
        location: 'Habbal',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);

// next event
document.getElementById('next').addEventListener('click', nextProfile);

nextProfile();                                  

function nextProfile(e) {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Gender: ${currentProfile.gender}</li>
                <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}" alt="image">
        `;
    } else {
        window.location.reload();   // reload the page
    }

}
