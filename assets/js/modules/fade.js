const fadeOut = () => {
    const fade = setInterval(() => {
        track.volume -= .03
        /* console.log(track.volume); */
    },200)
    setTimeout(() =>{
        clearInterval(fade)
    } ,6000)
}
let fadeIn = () => {
    track.volume = .1
    const fade = setInterval(() => {
        track.volume += .02
        /* console.log(track.volume); */
    },300)
    setTimeout(() =>{
        clearInterval(fade)
        track.volume = 1
    } ,13000)
}

export {fadeOut,fadeIn}
