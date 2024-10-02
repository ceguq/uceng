// GSAP Animation for the Hero Section SVG Wave
gsap.to("#wave path", {
    duration: 4,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    attr: { d: "M0,160L40,180C80,200,160,240,240,240C320,240,400,200,480,180C560,160,640,160,720,180C800,200,880,240,960,260C1040,280,1120,260,1200,220C1280,180,1360,120,1400,100L1440,80L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" }
});

// Scroll-triggered animation for the 3D Cards using GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("[data-scroll='3d']").forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out"
    });
});

// 3D Card flip effect using GSAP
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { duration: 0.6, rotationY: 180, ease: "back.out(1.7)" });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, { duration: 0.6, rotationY: 0, ease: "back.out(1.7)" });
    });
});

// Button click to animate background color
const button = document.getElementById('animate-bg-button');
button.addEventListener('click', () => {
    gsap.to('body', {
        backgroundColor: `hsl(${Math.random() * 360}, 70%, 80%)`,
        duration: 2,
        ease: "power2.inOut"
    });
});
