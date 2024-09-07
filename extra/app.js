console.log('Hello world')

const forma = document.querySelector('#forma')
const inp = document.querySelector('#inp')
const container = document.querySelector('.container')

forma.addEventListener('submit',(e)=>{
    e.preventDefault()
    const movieName = inp.value
    getData(movieName)
})


const getData = async (movieName)=>{
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${movieName}`) //beril linkni fetch qilib req ga tebglaydi
    const movies = await req.json()//berilagan req ni bizga json fayilga o'tkazgab xolda movies ga tenglaydi
    console.log(movies);
    makeImg(movies)
}

function makeImg(movies){
    for (let movie of movies){
        let rasm = movie.show.image.medium
        const img = document.createElement('img')
        img.src = rasm
        container.appendChild(img)
    }
}