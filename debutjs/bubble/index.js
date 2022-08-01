// console.log("kamelcase = maVariableSuperCool");
// // les == verifie si la valeur est la meme
// // et le === verfie la valeur et le TYPE
// // visibility hidden pour cacher l'element en html
// const a = document.querySelector('h4');
// // important le const , ne peut etre changer 
// const b = document.querySelector('.lol');
// console.log(a);

// const c = document.getElementById("btn-1"); // elementbyid est + performant car cherche direct un id 

// // premier est l'lement (click, scroll, input...) apres c'est l'action de levenement
// b.addEventListener("click", () =>{// quand on clique sur un la div lol il ecrit dans la console CLICK !
//     console.log('CLICK ! ');
//     b.classList.add('question-click'); // ajoute la class ffectuer dans le css
// });

// a.addEventListener("click", () =>{// quand on clique sur un la div lol il ecrit dans la console CLICK !
//     console.log('CLICK ! ');
//     a.classList.toggle('question-click-a'); // ajoute la class ffectuer dans le css
//     // toggle fait le "vrai faux" si 'a' a ete clic ou pas 
// });


const score = document.createElement('h3');
const play = document.querySelector('#btn-1');
const leave = document.querySelector('#btn-2');
const divFlex = document.querySelector('.flex');





// par defaut le score est à 0 

score.textContent = "0";
score.classList.add('breakbubble');

const bubbleMaker = () => {
 
    const span = document.createElement('span');

    const size = Math.round((Math.random() * 100 + 100)) + "px";
    const topp = Math.round((Math.random() * 100 + 50)) + "%";
    const left = Math.round((Math.random() * 100  + 25)) + "%";




    span.classList.add('bubble');

    
    span.style.height = size;
    span.style.width = size;
    span.style.top= topp;
    span.style.left= left;

    const plusMoins = Math.random() > 0.5 ? 1 : -1; // si le math ramdom rend sup à 0.5 alors plusmoins = 1 else -1 

    span.style.setProperty('--y', Math.round((Math.random() * 100 * plusMoins)) + "%");
    


    span.addEventListener("click", () =>{
        eval(score.textContent++)
        span.remove();   
    })

    document.body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 8000);
};

play.addEventListener('click', () =>{
    
    if(location.pathname == "/lien.html")
    {
        play.classList.add('btn-animer');
        setTimeout(() =>{

            divFlex.remove();
        }, 1000)
        document.body.appendChild(score);
        setInterval(() => {
            bubbleMaker(); 
        }, 1000);
    }
    else
    {
        location.pathname = "/lien.html";
    }

})


leave.addEventListener('click', () =>{
    leave.classList.add('btn-animer');
    setTimeout(() =>{
       leave.classList.remove('btn-animer'); 
    }, 500)
    history.back();
})

