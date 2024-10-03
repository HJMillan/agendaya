document.addEventListener("DOMContentLoaded", function() {
    const toggleSections = document.querySelectorAll('.toggle-section');

    toggleSections.forEach(section => {
        section.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        });
    });
});
