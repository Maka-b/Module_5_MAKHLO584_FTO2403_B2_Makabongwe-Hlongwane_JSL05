// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "RnB" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "RnB" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "6:16 in LA", artist: "Kendrick Lamar", genre: "Rap"},
    { title: "Expensive Sh**", artist: "Fela Kuti", genre: "Jazz" },
    { title: "As this Moment Slips Away", artist: "Joshua Redman", genre: "Jazz" },
    { title: "How Does it Feel", artist: "D'angelo", genre: "RnB" },
    { title: "Rising Son", artist: "Takuya Kuroda", genre: "Jazz" },
    { title: "Aquemini", artist: "OutKast", genre: "Rap" },
    { title: "A.T.H.F", artist: "DANGERDOOM", genre: "Rap" },


    
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax":"RnB",
    "Rocket":"Rap",
    "Groot":"Jazz"
    // Add preferences for Drax, Rocket, and Groot
}; 
//turn into array
const guardiansList = Object.keys(guardians)
const guardiansListGenres = Object.values(guardians)
const playlistEl = document.getElementById("playlists")

playlistEl.style.display = "flex"
playlistEl.style.flexWrap = "wrap"



// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
   
    // genre's put in their own arrays

    const rockSongsInfo = songs.filter( song => song.genre.includes("Rock"))
    const rockSongs = rockSongsInfo.map(song => {
        return `<li><a id = "song"  href ="">${song.title}</a> by ${song.artist}</li>`
    }).join("")


    const rapSongsInfo = songs.filter( song => song.genre.includes("Rap"))
    const rapSongs = rapSongsInfo.map(song => {
        return `<li> <a id = "song" href ="">${song.title}</a>  by ${song.artist}</li>`
   }).join("")

    const rnbSongsInfo = songs.filter( song => song.genre.includes("RnB"))
    const rnbSongs = rnbSongsInfo.map(song => {
        return `<li><a id = "song"  href ="">${song.title}</a>  by ${song.artist}</li>`
    }).join("")

    const popSongsInfo = songs.filter( song => song.genre.includes("Pop"))
    const popSongs = popSongsInfo.map(song => {
        return `<li><a id = "song"  href ="">${song.title}</a>  by ${song.artist}</li>`
    }).join("")

    const jazzSongsInfo = songs.filter( song => song.genre.includes("Jazz"))
    const jazzSongs = jazzSongsInfo.map(song => {
        return `<li><a id = "song"  href ="">${song.title}</a>  by ${song.artist}</li>`
    }).join("")
   
    

    const guardianSongs = guardiansListGenres.map( item => {
        
        let index;
        if (item == 'Rock'){
            populateDom('Rock', rockSongs)

        }else if (item == 'RnB'){
            populateDom('RnB', rnbSongs)
        }else if (item == 'Pop'){
            populateDom('Pop', popSongs)
            
        }else if (item == 'Jazz'){
            populateDom('Jazz', jazzSongs)
            index = guardiansListGenres.indexOf('Jazz')
           
        }else if (item == 'Rap'){
            populateDom('Rap', rapSongs)
        }
    } )
   
    function populateDom (genre, songs) {
        index = guardiansListGenres.indexOf(genre)
        const guardianHeaderEl = document.createElement("h1")
        guardianHeaderEl.textContent = `${guardiansList[index]}'s Playlist`
        guardianHeaderEl.style.color="white"
        const containerEl = document.createElement("div")
        containerEl.style.background = "blue"
        containerEl.style.borderRadius = "10px"
        const listEl = document.createElement("ul")
        listEl.style.listStyleType = "none"
        listEl.innerHTML =  songs
        containerEl.append(guardianHeaderEl)
        playlistEl.append(containerEl)
        containerEl.append(listEl)
        containerEl.style.margin ='10px'
        containerEl.style.padding ='10px'
    }
    
    
    //console.log(guardiansListGenres.indexOf('Rap'))
    console.log(guardianSongs)
    

    

    


    // Use the map() function to create playlists for each Guardian
   
    // Your code here
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);




