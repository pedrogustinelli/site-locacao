const scrollItems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
});

scrollItems.forEach((item) => observer.observe(item));

const waLink = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20loca%C3%A7%C3%A3o%20de%20caminh%C3%B5es%20e%20ca%C3%A7ambas.';

document.querySelectorAll('[data-whatsapp]').forEach((button) => {
  button.addEventListener('click', () => {
    window.open(waLink, '_blank');
  });
});
