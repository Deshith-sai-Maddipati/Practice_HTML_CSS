const descriptive_buttons = document.querySelectorAll("button.learn-more");
console.log(descriptive_buttons[3].nextElementSibling.innerHTML);

descriptive_buttons.forEach(button =>  {
   button.addEventListener("click",() => {
    const description = button.nextElementSibling;
    console.log(description.innerHTML);
    description.classList.toggle("show");
    button.textContent = description.classList.contains("show") ? "Show Less" : "Learn More";
   }
   );
}
);