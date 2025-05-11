// Add event listener to hero button
document.querySelector('.learn-more-btn').addEventListener('click', () => {
    alert('Learn More button clicked!');
});

// Add event listener to navigation links
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Navigation link clicked!');
    });
});

// Add event listener to footer links
document.querySelectorAll('.footer-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Footer link clicked!');
    });
});

// Add animation to hero section
document.querySelector('.hero').addEventListener('mouseover', () => {
    document.querySelector('.hero-content h1').style.transform = 'translateY(-10px)';
    document.querySelector('.hero-content p').style.transform = 'translateY(-10px)';
});

document.querySelector('.hero').addEventListener('mouseout', () => {
    document.querySelector('.hero-content h1').style.transform = 'translateY(0)';
    document.querySelector('.hero-content p').style.transform = 'translateY(0)';
});