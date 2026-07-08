const form = document.querySelector("#searchForm");
const shows = document.querySelector("#shows")

form.addEventListener("submit", async function(e){
    e.preventDefault();

    const searchTitle = form.elements.query.value;
    try{
        const showdata = await getTvShow(searchTitle);
        createShow(showdata)
    }catch(err){
        console.log("Oops", err);
    }
})

async function getTvShow(title) {
    try{
        const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${title}`);
        const data = res.data;
        return data
    }catch(err){
        console.log("No movie");
        console.log(err);
    }
}

function createShow(data){
    let show = document.createElement("div");
    show.classList.add("show")

    let img = document.createElement("img");
    img.src = data.image.original
    show.append(img)

    let name = document.createElement("h3");
    name.append(`Name: ${data.name}`)
    show.append(name)

    let premiered = document.createElement("h3");
    premiered.append(`Premiered: ${data.premiered}`)
    show.append(premiered)

    let language = document.createElement("h3");
    language.append(`Language: ${data.language}`)
    show.append(language)

    show.innerHTML+= data.summary
    shows.append(show)
}

getTvShow("iron man")