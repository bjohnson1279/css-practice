const allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (!document.startViewTransition) {
            setActiveItem(e.target);
            return;
        }

        document.startViewTransition(() => setActiveItem(e.target));
    });
});

function setActiveItem(element) {
    allLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}