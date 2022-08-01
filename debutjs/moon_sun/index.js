const dark = document.body;
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

const check = document.body.querySelector('.cb');

check.addEventListener('click', () =>{
    dark.classList.toggle('dark');
    moon.classList.toggle('changeColor');
    console.log(moon);

})

