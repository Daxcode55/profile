let nav = document.querySelector('.container-links');
document.getElementById("bars").addEventListener('click', () => {
    nav.classList.toggle('activ');
})

window.onscroll = () => {
    nav.classList.remove('activ')
}



// animate typing text
const text = document.querySelector(".second-text");

const textload = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0)

    setTimeout(() => {
        text.textContent = "Developer";
    }, 4000)

    setTimeout(() => {
        text.textContent = "Blogger";
    }, 8000)
}

textload();

setInterval(textload, 12000);