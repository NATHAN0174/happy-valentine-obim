// Button click effect
document.querySelector('.heart-button').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create confetti
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = ['#ff1493', '#ff006e', '#ff69b4', '#ffb6c1', '#ff1493'][Math.floor(Math.random() * 5)];
        confetti.style.left = (50 + (Math.random() - 0.5) * 20) + '%';
        confetti.style.top = '50%';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);
        
        const angle = (Math.random() * Math.PI * 2);
        const velocity = 5 + Math.random() * 10;
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let vx = Math.cos(angle) * velocity;
        let vy = Math.sin(angle) * velocity - 5;
        
        const animate = () => {
            x += vx;
            y += vy;
            vy += 0.2; // gravity
            
            confetti.style.left = x + 'px';
            confetti.style.top = y + 'px';
            confetti.style.opacity = Math.max(0, 1 - (y - window.innerHeight / 2) / 300);
            
            if (y < window.innerHeight + 100) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        animate();
    }
    
    // Button animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    }, 100);
});