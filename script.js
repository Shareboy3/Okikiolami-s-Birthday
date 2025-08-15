function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener("DOMContentLoaded", function() {
    const gfName = localStorage.getItem('gfName') || 'My Love';
    document.getElementById('greeting').textContent = `🎉 Happy Birthday, ${gfName}! 🎉`;

    fetch('assets/')
    .then(response => response.text())
    .then(data => {
        // For GitHub Pages, we'll simulate file list manually
        const files = [
            'img1.jpg', 'img2.jpg', 'img3.jpg', 
            'video.mp4'
        ]; // Replace with actual file list
        const shuffled = shuffleArray(files);
        const container = document.getElementById('mediaContainer');

        shuffled.forEach(file => {
            const ext = file.split('.').pop().toLowerCase();
            if(['jpg', 'jpeg', 'png', 'gif'].includes(ext)) {
                const img = document.createElement('img');
                img.src = `assets/${file}`;
                container.appendChild(img);
            } else if(['mp4', 'webm'].includes(ext)) {
                const vid = document.createElement('video');
                vid.src = `assets/${file}`;
                vid.autoplay = true;
                vid.loop = true;
                vid.muted = true;
                container.appendChild(vid);
            } else if(['mp3', 'ogg'].includes(ext)) {
                document.getElementById('bgMusic').src = `assets/${file}`;
            }
        });
    });

    // Simple confetti
    const confettiContainer = document.getElementById('confetti');
    setInterval(() => {
        const confetto = document.createElement('div');
        confetto.className = 'confetto';
        confetto.style.left = Math.random() * 100 + 'vw';
        confetto.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetto.style.animationDuration = 2 + Math.random() * 3 + 's';
        confettiContainer.appendChild(confetto);
        setTimeout(() => confetto.remove(), 5000);
    }, 200);
});
