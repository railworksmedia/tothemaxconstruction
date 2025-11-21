// Main JavaScript file for To The Max Construction
// Additional functionality will be added incrementally

document.addEventListener('DOMContentLoaded', function() {
    // Initialize app
    console.log('To The Max Construction - Website Loaded');

    // Image-text section slide animation on scroll
    const imageColumn = document.querySelector('.animate-slide-left');
    const textColumn = document.querySelector('.animate-slide-right');
    
    if (imageColumn && textColumn) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    imageColumn.classList.add('in-view');
                    textColumn.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(imageColumn);
    }

    // Trigger renovation list animations on scroll
    const renovationItems = document.querySelectorAll('.renovation-item');
    
    if (renovationItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Item is in viewport, animation will play due to CSS
                    entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                    // Get the index for staggered delay
                    const index = Array.from(renovationItems).indexOf(entry.target);
                    entry.target.style.animationDelay = (index * 0.1) + 's';
                    // Stop observing this element
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        renovationItems.forEach(item => {
            observer.observe(item);
        });
    }
});