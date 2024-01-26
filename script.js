const searchInput = document.getElementById('search-input');
const resultsAtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    ferch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = docment.getElementById('artist-name');
    const artistImage = docment.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    })

    resultsAtist.classList.remove('hidden');
}


document.addEventListener('input', function () {
    const searchTerm = searchInput.ariaValueMax.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultsAtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})