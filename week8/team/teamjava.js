// Fetch data from API
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

//Get people function.
function getPeople(url) {
    return getJSON(url);
}

// Render a list of people
function renderPeopleList(people, peopleListElement) {

    const list = peopleListElement;

    list.innerHTML = "";
    people.forEach((character) => {
        let card = document.createElement('section');
        // let name = document.createElement('h2');
        let url = document.createElement('a');
        url.setAttribute('id', 'url');
        url.setAttribute('href', `${character.url}`);
        let haircolor = document.createElement('p');
        let birthyear = document.createElement('p');
        let gender = document.createElement('p');

        url.innerHTML = `${character.url}`;
        url.textContent = `${character.name}`;
        console.log(url);
        // name.innerHTML = `${character.name}`;
        haircolor.innerHTML = `${character.hair_color}`;
        birthyear.innerHTML = `${character.birth_year}`;
        gender.innerHTML = `${character.gender}`;


        card.appendChild(url);
        // card.appendChild(name);
        card.appendChild(haircolor);
        card.appendChild(birthyear);
        card.appendChild(gender);


        card.addEventListener("click", function (event) {
            document.getElementById('detailsbox').classList.remove('hidden');
            event.preventDefault();
            getPeopleDetails(character.url);
        });

        list.appendChild(card);

    })
}

function renderPeopleDetails(peopleData) {
    console.log(peopleData);
    document.getElementById('name').innerHTML = peopleData.name;
    document.getElementById('birthYear').innerHTML = peopleData.birth_year;
    document.getElementById('height').innerHTML = peopleData.height;
    document.getElementById('mass').innerHTML = peopleData.mass;
    document.getElementById('hairColor').innerHTML = peopleData.hair_color;
    document.getElementById('skinColor').innerHTML = peopleData.skin_Color;
    document.getElementById('gender').innerHTML = peopleData.gender;
}

// Show the list of people 10 at a time.
function showPeople(url = "https://swapi.dev/api/people/") {
    getPeople(url).then(function (data) {
        console.log(data);

        const results = data.results;

        const peopleListElement = document.getElementById('peopleList');
        renderPeopleList(results, peopleListElement);

        // enable the next and prev buttons.
        if (data.next) {
            const next = document.getElementById("next");

            next.onclick = () => {

                showPeople(data.next);
            };
        }
        if (data.previous) {
            const prev = document.getElementById("prev");

            prev.onclick = () => {
                showPeople(data.previous);
            };
        }
    });
}

// People details function
function getPeopleDetails(url) {
    //call getJSON functions for the provided url
    getPeople(url).then(function (data) {
        renderPeopleDetails(data);
        //with the results populate the elements in the #detailsbox
    });
}


showPeople();