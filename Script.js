// Destinations Data
const destinations = [
    {
        name: "Hyderabad",
        tagline: "The City of Pearls, History and Culture",
        description: "Hyderabad, India's tech hub, is a vibrant city known for its rich history, delicious cuisine, and modern infrastructure, offering a unique blend of tradition and innovation.",
        mobileImage: "Images/Hyderabad_Mobile.jpg",
        desktopImage: "Images/Hyderabad_Desktop.jpg",
        fallbackImage: "Images/Hyderabad_Desktop.jpg"
    },
    {
        name: "Paris",
        tagline: "The City of Lights, Romance and timeless Art",
        description: "Also known as the City of Light, Paris is one of the most fascinating European capitals, not just because of its art, culture, architecture, history, or even Emily in Paris. Though it may be synonymous with romance, Paris has many quirky secrets that only add to its appeal.",
        mobileImage: "Images/paris-mobile.jpg",
        desktopImage: "Images/paris-desktop.jpg",
        fallbackImage: "Images/paris-desktop.jpg"
    },
    {
        name: "Tokyo",
        tagline: "The City of the Future, Innovation and Culture",
        description: "Tokyo, Japan's sprawling capital, seamlessly blends cutting-edge technology, neon-lit streets, and trendsetting culture with deep historical roots, offering a vibrant mix of experiences from serene temples to bustling markets and futuristic entertainment.",
        mobileImage: "Images/tokyo-mobile.jpg",
        desktopImage: "Images/tokyo-desktop.jpg",
        fallbackImage: "Images/tokyo-desktop.jpg"
    },
    {
        name: "Bali",
        tagline: "The Island of the Gods, Tranquility and Beauty",
        description: "Bali, Indonesia's jewel, is a paradise island known for its stunning beaches, lush landscapes, and rich cultural heritage, offering a perfect blend of relaxation and adventure.",
        mobileImage: "Images/bali-mobile.jpg",
        desktopImage: "Images/bali-desktop.jpg",
        fallbackImage: "Images/bali-desktop.jpg"
    }
];

// Function to create destination cards dynamically
function createDestinationCards() {
    const container = document.getElementById('destinations-container');
    
    if (!container) return;
    
    destinations.forEach(destination => {
        const article = document.createElement('article');
        article.className = 'card';
        
        article.innerHTML = `
            <picture>
                <source srcset="${destination.mobileImage}" media="(max-width: 600px)">
                <source srcset="${destination.desktopImage}" media="(min-width: 601px)">
                <img src="${destination.fallbackImage}" alt="${destination.name}" loading="lazy">
            </picture>
            <h3>${destination.name}</h3>
            <p>${destination.tagline}</p>
            <button class="btn learn-more">Learn More</button>
            <div class="descriptions">
                ${destination.description}
            </div>
        `;
        
        container.appendChild(article);
    });
    
    // Initialize Learn More button functionality after cards are created
    initializeLearnMoreButtons();
}

// Function to initialize Learn More button functionality
function initializeLearnMoreButtons() {
    const descriptive_buttons = document.querySelectorAll(".learn-more");
    
    descriptive_buttons.forEach(button => {
        button.addEventListener("click", () => {
            const description = button.nextElementSibling;
            description.classList.toggle("show");
            button.textContent = description.classList.contains("show") ? "Show Less" : "Learn More";
        });
    });
}

// Initialize cards when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDestinationCards);
} else {
    createDestinationCards();
}

// Hamburger Menu Toggle Functionality
function initHamburgerMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Initialize hamburger menu
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHamburgerMenu);
} else {
    initHamburgerMenu();
}

// Dynamic Footer time
const footerTime = document.querySelector('.site-footer p');
if (footerTime) {
    const originalText = footerTime.innerHTML;
    
    function updateFooterTime() {
        const currentdate = new Date();
        footerTime.innerHTML = originalText.replace('2026', currentdate);
    }
    
    // Update immediately
    updateFooterTime();
    
}

// Trip Calculator Functionality
const tripCalculatorForm = document.getElementById('tripCalculatorForm');
if (tripCalculatorForm) {
    // City costs per day (in USD)
    const cityCosts = {
        'Hyderabad': 50,
        'Paris': 150,
        'Tokyo': 200,
        'Bali': 80
    };

    const resultDiv = document.getElementById('result');
    const resultMessage = document.getElementById('resultMessage');

    tripCalculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const city = document.getElementById('city').value;
        const days = parseInt(document.getElementById('days').value);

        if (!city || !days || days < 1) {
            alert('Please fill in all fields correctly.');
            return;
        }

        const costPerDay = cityCosts[city];
        const totalCost = days * costPerDay;

        resultMessage.textContent = `You need approximately $${totalCost} for your ${days} day trip to ${city}.`;
        resultDiv.style.display = 'block';
    });
}


