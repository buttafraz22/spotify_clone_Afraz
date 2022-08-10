let songIndex = 0;
let audioElement = new Audio('Billo(Slow+Reverb).mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gifPlay = document.getElementById('picInfo');
let prev = document.getElementById('previous');
let next = document.getElementById('next');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {
        songName:"Billo",
        filePath:"Billo(Slow+Reverb).mp3",
        coverPath:"cover.jpg"
    },
    {
        songName:"Alec Koff(Motivational)",
        filePath:"Alec Koff - Motivational Speaker (Cinematic Background Music for Videos No Copyright).mp3",
        coverPath:"cover2.jpg"
    }
];

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerHTML= songs[i].songName;
})

//audioElement.play()


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gifPlay.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gifPlay.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log("Time Update");
    let progressinPercents = parseFloat((audioElement.currentTime / audioElement.duration) *100);
    //console.log(progressinPercents)
    progressBar.value = progressinPercents;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       /// audioElement.src = `songs[songIndex].filePath`;
        //console.log(audioElement.src)
       // masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gifPlay.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}