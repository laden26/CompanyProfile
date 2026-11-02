// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Scroll Animation Observer
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);


});

// Penanganan Form Kontak langsung ke WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 1. Mengambil data yang diketik oleh pengunjung
        const name = document.getElementById('clientName').value;
        const contact = document.getElementById('clientContact').value;
        const message = document.getElementById('clientMessage').value;
        
        // 2. Masukkan nomor WhatsApp tujuan 
        const phoneNumber = "6281776610932";
        
        // 3. Mengatur format teks pesan yang akan masuk ke WhatsApp
        const text = `Hello RH Interior,\n\nMy Name: ${name}\nContact: ${contact}\nProject Details: ${message}`;
        
        // 4. Membuat URL otomatis ke WhatsApp
        const waURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        
        // 5. Membuka tab/aplikasi WhatsApp
        window.open(waURL, '_blank');
    });
}