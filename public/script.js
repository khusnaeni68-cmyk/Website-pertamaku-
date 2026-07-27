// ==========================================
// TOMBOL MAGIC
// ==========================================
const btnMagic = document.getElementById('btn-magic');
const magicText = document.getElementById('magic-text');

const kalimatRandom = [
    "Kamu hebat sudah mulai belajar coding! 🎉",
    "Website ini dibuat dari HP lho! 📱",
    "Terus belajar, jangan menyerah! 💪",
    "Coding itu seru kalau sudah terbiasa! 🚀",
    "Dari nol bisa jadi hero! 🦸‍♂️",
    "Setiap expert dulunya pemula! 🌱",
    "Kopi + Coding = Sempurna ☕",
    "Bug itu teman belajar terbaik! 🐛"
];

btnMagic.addEventListener('click', () => {
    const random = Math.floor(Math.random() * kalimatRandom.length);
    magicText.textContent = kalimatRandom[random];

    // Animasi bounce
    btnMagic.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btnMagic.style.transform = 'scale(1)';
    }, 150);
});

// ==========================================
// FORM CONTACT (simulasi)
// ==========================================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    formMessage.textContent = `Terima kasih ${nama}! Pesan kamu sudah diterima ✅`;

    // Reset form
    contactForm.reset();

    // Hilangkan pesan setelah 5 detik
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});

// ==========================================
// COUNTER PENGUNJUNG (simulasi sederhana)
// ==========================================
let count = localStorage.getItem('visitorCount') || 0;
count = parseInt(count) + 1;
localStorage.setItem('visitorCount', count);
document.getElementById('count').textContent = count;

// ==========================================
// SMOOTH SCROLL untuk navigasi
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('🚀 Website berhasil dimuat!');