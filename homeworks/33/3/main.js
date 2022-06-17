const textHolder = document.querySelector('.text-holder');
let domRect = textHolder.ownerDocument

textHolder.addEventListener('mouseenter', () => {
    textHolder.classList.add('yellow');
})

textHolder.addEventListener('mouseleave', () => {
    textHolder.classList.remove('yellow');
})


// Log its total width
console.log(domRect.width);

console.log(domRect.height)