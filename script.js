/* -----------------------------------
   Tab Navigation Logic
----------------------------------- */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}
/* -----------------------------------
   Side Menu Logic (Mobile)
----------------------------------- */
var sidebar = document.getElementById("sidebar");
function openmenu() {
    sidebar.style.right = "0";
}
function closemenu() {
    sidebar.style.right = "-250px";
}
/* -----------------------------------
   Contact Form Submission (Google Sheets)
----------------------------------- */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ-EA7u0dSefyfSFGbcDPz0O-kJMnVt3xGKYxll5wwyv2HZFx5icoS8y62aA_OQ0E/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
            .then(response => {
                form.reset();
                document.getElementById('successModal').classList.add('active');
            })
            .catch(error => console.error('Error!', error.message));
    });
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
    location.reload(); // Refresh page as requested
}
/* -----------------------------------
   Scroll Animations (Intersection Observer)
----------------------------------- */
const observerOptions = {
    root: null,
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px"
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // Fade out when leaving
        }
    });
}, observerOptions);
const animateSections = document.querySelectorAll('.reveal-section');
animateSections.forEach(section => observer.observe(section));

/* -----------------------------------
   Floating Particles Logic
----------------------------------- */
function createParticles() {
    const container = document.body; // Global target

    const particles = [
        "instagram: mr_de.k",
        "console.log()",
        "<div>",
        "{ }",
        "npm install",
        "git push",
        "</>",
        "const",
        "=>"
    ];

    // Create particles periodically
    // Initial batch
    for (let i = 0; i < 8; i++) {
        spawnParticle(container, particles);
    }

    // Continuous spawning
    setInterval(() => {
        spawnParticle(container, particles);
    }, 3000);
}

function spawnParticle(section, particles) {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    particle.innerText = particles[Math.floor(Math.random() * particles.length)];

    // Random positioning and animation properties
    const startLeft = Math.random() * 95; // 0 to 95%
    const duration = Math.random() * 10 + 15; // 15s to 25s
    const fontSize = Math.random() * 10 + 14; // 14px to 24px
    const delay = Math.random() * 5; // 0 to 5s delay for initial batch feel

    particle.style.left = startLeft + '%';
    particle.style.animationDuration = duration + 's';
    particle.style.fontSize = fontSize + 'px';
    // Random color variant (cyan or purple accent)
    particle.style.color = Math.random() > 0.5 ? 'var(--accent-cyan)' : 'var(--accent-purple)';

    section.appendChild(particle);

    // Remove particle after animation ends to prevent DOM overload
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Initialize particles
createParticles();

const audio = document.getElementById("bg-audio");
const musicBtn = document.querySelector(".music-btn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play().catch(err => console.log(err));
        isPlaying = true;
        musicBtn.classList.add("playing");
    } else {
        audio.pause();
        isPlaying = false;
        musicBtn.classList.remove("playing");
    }
});


