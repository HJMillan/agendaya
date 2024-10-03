document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('h2');

    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            const nextParagraphs = this.nextElementSibling;

            if (nextParagraphs) {
                nextParagraphs.style.display = nextParagraphs.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});
