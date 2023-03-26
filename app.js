const API_RICK_AND_MORTY = "https://rickandmortyapi.com/api/character"

const callApi = fetch(API_RICK_AND_MORTY);

callApi.then((data) => {
    return data.json()
})
.then((data) => {
    const $ContainerCards = document.getElementById("Container-cards")

    for (let i = 0; i < data.results.length; i++) {
        $ContainerCards.innerHTML += `
        <div class="Card">
                <img src=${data.results[i].image} alt="test"/>
                <h3>${data.results[i].name}</h3>
                <p>Gender: ${data.results[i].gender}</p>
                <p>Species: ${data.results[i].species}</p>
                <p>Status: ${data.results[i].status}</p>
            </div>`
    }
})