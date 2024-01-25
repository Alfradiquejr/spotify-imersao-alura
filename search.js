const searchInput = document.getElementById("search-input");
const resultArtists = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name=${searchTerm}`;
    fetch(url)
        .then((reponse) => reponse.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtists.classList.remove("hidden");

}

document.addEventListener('input', ()  => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultArtists.classList.add('hidden');
        playlistContainer.classList.remove('hidden');
        return;
    }
    
    requestApi(searchTerm);
});