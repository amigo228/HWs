const div = document.querySelector('.text-holder');

// create textarea element
const textarea = document.createElement('textarea');
const text = div.textContent;
textarea.innerHTML = text;

// document.body.addEventListener('keydown', (ev) => console.log(ev));

document.body.addEventListener('keydown', (event) => {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.stopPropagation();
        event.preventDefault();
        div.replaceWith(textarea);
    }

    else if (event.code == 'Equal' && (event.ctrlKey || event.metaKey)) {
        event.stopPropagation();
        event.preventDefault();
        const str = textarea.value;
        div.textContent = str;
        textarea.replaceWith(div);
    }
})
