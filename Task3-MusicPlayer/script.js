const music= document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const singer =document.getElementById("Artist");
const song = document.getElementById("Song");
const previous = document.getElementById("prev");
const next = document.getElementById("next");

        let isPlaying=false;

        // Play Function
        const playMusic = ()=>{
            isPlaying=true;
            music.play();
            play.classList.replace("fa-play", "fa-pause");
            img.classList.add("animate");
        };

        // Pause Function
        const pauseMusic = ()=>{
            isPlaying=false;
            music.pause();
            play.classList.replace( "fa-pause" ,"fa-play");
            img.classList.remove("animate");
        };

        play.addEventListener("click", ()=>{
            isPlaying ? pauseMusic() : playMusic();
        })

        const songs =[
            {
                name:"1",
                title:"Pehlay bhi ma tmse mila",
                artist:"Vishal Mishra",
            },
            {
                name:"2",
                title:"O re piya",
                artist:"Rahet Fateh Ali Khan",
            },
            {
                name:"3",
                title:"Tm hi ho",
                artist:"Arijit Singh",
            }]

            const loadSongs =(songs)=>{
                song.textContent=songs.title;
                singer.textContent=songs.artist;
                music.src= `music/${songs.name}.mp3`;
                img.src=`images/${songs.name}.jpg`;

                body.style.backgroundImage = `url(${songDetails.background})`;
            }

            songsIndex=0;
            const nextSong = ()=>{
                songsIndex =(songsIndex + 1) % songs.length;
                loadSongs(songs[songsIndex]);
                playMusic();
            }

            const prevSong = ()=>{
                songsIndex =(songsIndex - 1 + songs.length) % songs.length;
                loadSongs(songs[songsIndex]);
                playMusic();
            }

            next.addEventListener("click",nextSong);
            previous.addEventListener("click",prevSong);

