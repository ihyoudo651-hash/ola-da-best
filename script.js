/*
    JavaScript for Ola is the Best Website
    Adding a little bit of interactivity!
*/

document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.getElementById('main-title');
    const coolButton = document.getElementById('cool-button');
    const olaImage = document.getElementById('ola-image');

    // 1. Title Effect: Change the color on mouseover
    mainTitle.addEventListener('mouseover', () => {
        // Change color to a cool cyan/purple gradient temporarily
        mainTitle.style.background = 'linear-gradient(45deg, #00ffff, #8a2be2)';
        mainTitle.style.webkitBackgroundClip = 'text';
        mainTitle.style.color = 'transparent';
    });

    mainTitle.addEventListener('mouseout', () => {
        // Revert back to the original blue color (defined in CSS)
        mainTitle.style.background = 'none';
        mainTitle.style.webkitBackgroundClip = 'unset';
        mainTitle.style.color = 'var(--blue-anime)'; // Uses the CSS variable for blue
    });

    // 2. Button Action: Display a cool message
    coolButton.addEventListener('click', () => {
        alert("🎉 BOOYAH! You've unlocked the truth: Ola is officially the coolest!");
        coolButton.textContent = "TRUTH ACKNOWLEDGED!";
    });

    // 3. Image Action: Trigger a visual effect on click
    olaImage.addEventListener('click', () => {
        // Apply a quick 'spin' animation class
        olaImage.classList.add('spin-effect');
        
        // Remove the class after the animation is done so it can be clicked again
        setTimeout(() => {
            olaImage.classList.remove('spin-effect');
        }, 1000); // The duration of the spin animation in CSS
    });
    
    // Add the spin-effect CSS dynamically (or add it to style.css)
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .spin-effect {
            animation: spin 1s ease-in-out;
        }
    `;
    document.head.appendChild(styleSheet);
});