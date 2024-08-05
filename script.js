const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const loadingSpinner = document.getElementById("loading-spinner");
const errorMessage = document.getElementById("error-message");

const fetchQuote = async () => {
  loadingSpinner.classList.remove("hidden");
  errorMessage.classList.add("hidden");
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    quoteText.textContent = data.content;
    quoteAuthor.textContent = `— ${data.author}`;
    quoteText.classList.add("fade-in");
    quoteAuthor.classList.add("fade-in");
  } catch (error) {
    errorMessage.textContent = "An error occurred. Please try again.";
    errorMessage.classList.remove("hidden");
    console.error("Error fetching quote:", error); // For debugging
  } finally {
    loadingSpinner.classList.add("hidden");
  }
};

// Fetch a quote on page load
fetchQuote();

// Fetch a new quote when the button is clicked
newQuoteBtn.addEventListener("click", fetchQuote);
