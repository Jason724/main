// Set current date
function updateCurrentDate() {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDateElement = document.getElementById('current-date');
    try {
        const today = new Date();
        currentDateElement.textContent = today.toLocaleDateString('en-US', dateOptions);
    } catch (error) {
        currentDateElement.textContent = 'Error loading date';
        console.error('Error setting date:', error);
    }
}

// Previous games data
const previousGames = [
    {
        date: new Date(2025, 3, 14),
        name: "Workout",
        category: "Fitness",
        url: "workout.html"
    },
    {
        date: new Date(2025, 2, 19),
        name: "Space Invaders",
        category: "Old School",
        url: "space.html"
    },
    {
        date: new Date(2025, 2, 18),
        name: "Flappy",
        category: "Random",
        url: "flappy.html"
    },
    {
        date: new Date(2025, 2, 17),
        name: "Frogger",
        category: "Old School",
        url: "frogger.html"
    },
    {
        date: new Date(2025, 2, 14),
        name: "Archer",
        category: "Stick Figure",
        url: "archer.html"
    },
    {
        date: new Date(2025, 2, 13),
        name: "Pong",
        category: "Old School",
        url: "pong.html"
    },
    {
        date: new Date(2025, 2, 12),
        name: "Connections",
        category: "Words",
        url: "connections.html"
    }
];

// Generate previous games list
function generateGameList() {
    const gameListElement = document.getElementById('previous-games-list');
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // Add loading state
    gameListElement.classList.add('loading');
    
    try {
        // Clear existing content
        gameListElement.innerHTML = '';
        
        previousGames.forEach(game => {
            const gameDate = game.date.toLocaleDateString('en-US', dateOptions);
            
            const gameElement = document.createElement('div');
            gameElement.className = 'game-item';
            gameElement.setAttribute('role', 'article');
            
            gameElement.innerHTML = `
                <div class="game-info">
                    <div class="game-date" aria-label="Game date">${gameDate}</div>
                    <div class="game-name" aria-label="Game name">${game.name}</div>
                    <div class="game-category" aria-label="Game category">${game.category}</div>
                </div>
                <a href="${game.url}" class="cta-button" aria-label="Play ${game.name}">Play</a>
            `;
            
            gameListElement.appendChild(gameElement);
        });
    } catch (error) {
        gameListElement.innerHTML = '<div class="error-message">Error loading games. Please try again later.</div>';
        console.error('Error generating game list:', error);
    } finally {
        // Remove loading state
        gameListElement.classList.remove('loading');
    }
}

// Back to top button functionality
function setupBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    backToTopButton.innerHTML = '↑';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    generateGameList();
    setupBackToTop();
}); 