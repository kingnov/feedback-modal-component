// write your JavaScript here

/**
 * DOM elements references
 *   */
const openModalBtn = document.getElementById("openModalBtn");
const Modal = document.getElementById("modal");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");
const closeBtn = document.getElementById("closeBtn");
const ratingBtns = document.querySelectorAll(".rating-btn");
const message = document.getElementById("message");

//? Track the rating
let rating = null;

//? open the feedback model
openModalBtn.addEventListener("click", () => {
  Modal.classList.remove("hidden");
  //* Reset button state when opening modal
  ratingBtns.forEach(btn => btn.classList.remove("selected"));
  rating = null;
});

//? close modal with X button
closeBtn.addEventListener("click", () => {
  Modal.classList.add("hidden");
});

//? close modal with cancel button
cancelBtn.addEventListener("click", () => {
  Modal.classList.add("hidden");
});

//handle rating selection
ratingBtns.forEach((button) => {
  button.addEventListener("click", () => {
    ratingBtns.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    rating = button.textContent;
  });
});

// Submit feedback and save rating to localStorage
submitBtn.addEventListener("click", () => {
  if (rating) {    
    // Store the rating data in localStorage
    localStorage.setItem('rating', JSON.stringify(rating));
    
    // show thank you message
    message.textContent = `You have rated us ${rating}/10! Thank you🥰`;
    message.classList.add('show');
    
    Modal.classList.add("hidden");
    rating = null;
    ratingBtns.forEach((btn) => btn.classList.remove("selected"));
  } else {
    alert("You must select rating first!!");
  }
});
