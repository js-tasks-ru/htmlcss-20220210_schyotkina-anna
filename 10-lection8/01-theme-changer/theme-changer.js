const changer = document.getElementById('theme-changer');
const changer_2 = document.getElementById('theme-changer_2');
const html = document.documentElement;

changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});

changer_2.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});
