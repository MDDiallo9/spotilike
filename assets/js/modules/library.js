
const createLibrary = () => {
    const libList = document.querySelector("#lib-list")
    for (let i = 0 ;i < catalogue.length;i++){
        const info = document.createElement("div")
        const coverImg = document.createElement("div")
        coverImg.innerHTML = `<img src="${coverUrl+catalogue[i].cover}" alt="${catalogue[i].title}">`
        const li = document.createElement("li")
        li.setAttribute("data-index",`${i}`)
        const trackname = document.createElement("p");
        trackname.textContent = catalogue[i].title;
        const artistname = document.createElement("p");
        artistname.textContent = catalogue[i].artist;
        info.append(trackname)
        info.append(artistname)
        
        // song duration
        const audio = new Audio("./assets/audio/"+ catalogue[i].audio);
        const duration = document.createElement("p");
        console.dir(audio)
        setTimeout(()=>{
            duration.textContent = new Date(audio.duration * 1000)
            .toISOString()
            .slice(14, 19)
        },300)
        info.append(duration)
        // Like
        const liked = document.createElement("p");
        if (catalogue[i].liked){
            liked.innerHTML = `<i class="fa-solid fa-heart" style="color: #ec184d;"></i>`
        }else {
            liked.innerHTML = `<i class="fa-solid fa-heart"></i>`

        }
        info.append(liked)
        li.append(coverImg)
        li.append(info)
    
        libList.append(li)
    }

}

export {createLibrary}