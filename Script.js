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