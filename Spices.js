const spiceCards = document.querySelectorAll('.spice-card');

spiceCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.querySelector('.spice-info').style.opacity = 1;
    });

   card.addEventListener('mouseout', () => {
        card.querySelector('.spice-info').style.opacity = 0;
    });
});