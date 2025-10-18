const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acc => {
  const title = acc.querySelector('.accordion-title');
  const body = acc.querySelector('.accordion-body');

  title.addEventListener('click', () => {
    // Fecha todos os outros
    accordions.forEach(a => {
      if (a !== acc) {
        a.classList.remove('active');
        a.querySelector('.accordion-body').classList.remove('active');
      }
    });

    acc.classList.toggle('active');
    body.classList.toggle('active');
  });
});
