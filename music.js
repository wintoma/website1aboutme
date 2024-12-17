const hitSong = new Audio("websitesong.mp3")

let isPlaying = false

function playSong() {
    console.log('playing...')

    if (isPlaying === false) {
        console.log('play')
        hitSong.play() 
        isPlaying = true 
    } else {
        console.log('pause')
        hitSong.pause()
        isPlaying = false 
    }

}