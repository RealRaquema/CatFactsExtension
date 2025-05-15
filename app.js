let url = "https://catfact.ninja/fact";
async function facts(){
   try{
     let res = await fetch(url);
     let data = await res.json();
    let fact = data.fact;
    return fact;    
}
catch(e){return"no fact";}
}

let btn = document.querySelector('button').addEventListener('click',async ()=>{
    let p = document.querySelector('p');
   p.innerText = await facts();
});