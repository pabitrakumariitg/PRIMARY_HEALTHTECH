let title = document.querySelector('.taglines'); 
let textCycle = [
    "Your Medical Solutions Partner",
    "Shop Smarter",
    "Find Your Instruments"
];
let textIndex = 0;
let charIndex = 0;

const typeWriter = () => {
    if (charIndex < textCycle[textIndex].length) {
        title.innerText = textCycle[textIndex].slice(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 100); 
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % textCycle.length;
            typeWriter(); 
        }, 1000); 
    }
};

typeWriter(); 