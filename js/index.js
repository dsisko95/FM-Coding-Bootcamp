// DOM elements

const previousIcon = document.querySelector('#previous-icon');
const nextIcon = document.querySelector('#next-icon');
const imageContainer = document.querySelector('#author-img');
const authorText = document.querySelector('#author-text');
const authorName = document.querySelector('#author-name');

const imagePaths = ['/FM-Coding-Bootcamp/images/image-tanya.jpg', '/FM-Coding-Bootcamp/images/image-john.jpg']
let imageIndex = 0;

// Events

previousIcon.addEventListener('click', () => updateBackground());
nextIcon.addEventListener('click', () => updateBackground());

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        updateBackground();
    }
});

// LOGIC

function updateBackground() {
    updateImageIndex();
    updateDynamicTextContent();

    imageContainer.style.background = `url('${imagePaths[imageIndex]}') no-repeat`;
    imageContainer.style.backgroundSize = '100% 100%';
}

function updateImageIndex() {
    const newImageIndex = imageIndex === 1 ? 0 : 1;
    imageIndex = newImageIndex;
}

function updateDynamicTextContent() {
    if (imageIndex === 0) {
        authorText.innerHTML = `
        " I've been interested in coding for a while
        but never taken the jump, until now. I
        couldn't recommended this course enough.
        I'm now in the job of my dreams and so
        excited about the future. "
        `;

        authorName.innerHTML = `
        <b>Tanya Sinclair</b> <span id="job-title">UX Engineer</span>
        `;
    } else {
        authorText.innerHTML = `
        " If you want to lay the best foundation
        possible I'd recommend taking this
        course. The depth the instructors go into
        is incredible. I now feel so confident about
        starting up as a profession developer. "
        `;

        authorName.innerHTML = `
        <b>John Tarkpor</b> <span id="job-title">Junior Front-end Developer</span>
        `;
    }
}