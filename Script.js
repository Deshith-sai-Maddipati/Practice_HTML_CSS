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
        desktopImage: "data:image/jpeg;base64,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",
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
        
        // Create picture container with loading indicator
        const pictureContainer = document.createElement('div');
        pictureContainer.className = 'picture-container';
        
        // Create loading spinner
        const loadingSpinner = document.createElement('div');
        loadingSpinner.className = 'loading-spinner';
        loadingSpinner.innerHTML = `
            <div class="spinner"></div>
            <p>Loading...</p>
        `;
        
        // Create picture element
        const picture = document.createElement('picture');
        const sourceMobile = document.createElement('source');
        sourceMobile.srcset = destination.mobileImage;
        sourceMobile.media = '(max-width: 600px)';
        
        const sourceDesktop = document.createElement('source');
        sourceDesktop.srcset = destination.desktopImage;
        sourceDesktop.media = '(min-width: 601px)';
        
        const img = document.createElement('img');
        img.src = destination.fallbackImage;
        img.alt = destination.name;
        img.loading = 'lazy';
        
        // Show loading spinner initially
        loadingSpinner.style.display = 'flex';
        
        // Hide loading spinner when image loads
        img.onload = function() {
            loadingSpinner.style.display = 'none';
        };
        
        // Handle image load errors - show fallback and hide spinner
        img.onerror = function() {
            this.src = destination.fallbackImage;
            loadingSpinner.style.display = 'none';
        };
        
        // Append elements
        picture.appendChild(sourceMobile);
        picture.appendChild(sourceDesktop);
        picture.appendChild(img);
        
        pictureContainer.appendChild(loadingSpinner);
        pictureContainer.appendChild(picture);
        
        article.innerHTML = `
            <h3>${destination.name}</h3>
            <p>${destination.tagline}</p>
            <button class="btn learn-more">Learn More</button>
            <div class="descriptions">
                ${destination.description}
            </div>
        `;
        
        // Insert picture container at the beginning
        article.insertBefore(pictureContainer, article.firstChild);
        
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


