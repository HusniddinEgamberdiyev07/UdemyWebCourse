// fetch()
//     .then(res=>{
//         return res.json()
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err);
//     })

axios.get("https://swapi.tech/api/people/1")
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

async function getPerson(id){
    const res = await axios.get(`https://swapi.tech/api/people/${id}`);
    const data = res.data;
    console.log(data);   
}

getPerson(10)

const getDadJoke = async () =>{
    const config = {headers:{Accept:"application/json"}}
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    console.log(res.data.joke);
}

getDadJoke()