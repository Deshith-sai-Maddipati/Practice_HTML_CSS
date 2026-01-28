const descriptive_buttons = document.querySelectorAll(".learn-more");


descriptive_buttons.forEach(button =>  {

   button.addEventListener("click",() => {
    
    const description = button.nextElementSibling;
    
    description.classList.toggle("show");
    button.textContent = description.classList.contains("show") ? "Show Less" : "Learn More";
   }
   );
}
);

// Dynamic Footer Year - Updates every second
const footerTime = document.querySelector('.site-footer p');
if (footerTime) {
    const originalText = footerTime.innerHTML;
    
    function updateFooterTime() {
        const currentdate = new Date();
        footerTime.innerHTML = originalText.replace('2026', currentdate);
    }
    
    // Update immediately
    updateFooterTime();
    
    // Update every second
    setInterval(updateFooterTime, 1000);
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


