const wrapper = document.querySelector('.wrapper');
const bgPics = document.querySelectorAll('.bg-pic');
const buttons = document.querySelectorAll('button');

console.log(buttons);

// buttons.forEach(e => console.log(e));
// buttons.forEach((e) => console.log(e));
// buttons.forEach((e, i) => console.log(e, i));
// buttons.forEach((e, i, a) => console.log(e, i, a));


// buttons.forEach(consoleItem);

// function consoleItem(item, index, arr) {
//     console.log(item, index, arr)
// }

buttons.forEach(e => {e.addEventListener('click', blurImages)});

// function testAlert() {
//     alert('well done!')
// }

function blurImages() {
    bgPics.forEach(e => {e.classList.toggle('bg-pic__blur')})
}
