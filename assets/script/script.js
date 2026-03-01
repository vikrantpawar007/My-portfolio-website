const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});


navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ── Language Toggle ─────────────────────────────────────────────
const langBtn = document.getElementById('lang-toggle-btn');
const langBtnText = document.getElementById('lang-btn-text');
let currentLang = 'en'; // starts in English, button shows "日本語"

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ja' : 'en';

    // Update button label
    langBtnText.textContent = currentLang === 'en' ? '日本語' : 'ENG　';

    // Update every element that has data-en / data-ja attributes
    document.querySelectorAll('[data-en][data-ja]').forEach(el => {
        const text = el.getAttribute('data-' + currentLang);

        // h1 may contain inner HTML with <span> tags — use innerHTML for it
        if (el.tagName === 'H1') {
            el.innerHTML = text;
        } else {
            el.textContent = text;
        }
    });
});
