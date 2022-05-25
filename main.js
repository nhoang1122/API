let btn = document.querySelector('button');

const clicked = () => {
    axios
        .get('https://swapi.dev/api/planets/?search=alderaan')
        .then(res => {
            console.log(res.data)
            let resident = res.data.results[0].residents;
            for (let i = 0; i < resident.length; i++){
                axios
                    .get(resident[i])
                    .then(res => {
                        let person = document.createElement("h2");
                        person.textContent = res.data.name;
                        document.body.appendChild(person);
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));    
}

btn.addEventListener('click', clicked);

