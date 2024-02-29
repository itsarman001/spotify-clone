async function getSongs() {
    let fetchSongs = await fetch("http://127.0.0.1:5501/server/");
    let responce = await fetchSongs.text();
    let div = document.createElement("div");
    div.innerHTML = responce;
    let fetchedSongs = div.getElementsByTagName("a");
    let songs = [];
    for (let i = 0; i < fetchedSongs.length; i++) {
        const element = fetchedSongs[i];
        if(element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    return songs;
}

async function main() {
    let songs = await getSongs()
    console.log(songs);

    let songUL = document.querySelector(".songLists").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHtml + `<li>${song.replaceAll("/server/", " ")}</li>`;
    }
}

main()