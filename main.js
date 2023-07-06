var videoPlayed = false;

window.addEventListener("scroll", function () {
    var video = document.getElementById("myVideo");
    var videoOffsetTop = video.offsetTop;
    var videoHeight = video.offsetHeight;
    var videoBottom = videoOffsetTop + videoHeight;
    var windowBottom = window.scrollY + window.innerHeight;

    if (windowBottom < videoOffsetTop || window.scrollY > videoBottom) {
        video.pause();
        videoPlayed = false;
    } else if (windowBottom >= videoOffsetTop && window.scrollY <= videoBottom && !videoPlayed) {
        videoPlayed = true;
    }
});

const studentVideosContainer = document.querySelector('.student-videos-container');
const leftButton = document.createElement('button');
leftButton.textContent = '<>';
const rightButton = document.createElement('button');
rightButton.textContent = '>';

const center = studentVideosContainer.clientWidth / 2;

studentVideosContainer.appendChild(leftButton);
studentVideosContainer.appendChild(rightButton);

const videos = Array.from(document.querySelectorAll('.video5'));
let currentIndex = 0;

const videoWidth = videos[0].offsetWidth;

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % videos.length;
    studentVideosContainer.scrollTo({
        left: center - videoWidth / 2,
        top: 0,
    });
});

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    studentVideosContainer.scrollTo({
        left: center + videoWidth / 2,
        top: 0,
    });
});

setInterval(() => {
    if (videos.length < 5) {
        videos.push(document.createElement('video'));
    }

    if (currentIndex === 0) {
        videos.push(videos.shift());
    } else if (currentIndex === videos.length - 1) {
        videos.unshift(videos.pop());
    }
}, 5000);
