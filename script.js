const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

if (quoteForm && formMessage) {
  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = quoteForm.querySelector(
      'button[type="submit"]'
    );

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch(quoteForm.action, {
        method: quoteForm.method,
        body: new FormData(quoteForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      formMessage.style.display = "block";
      formMessage.textContent =
        "Thank you. Your enquiry has been sent successfully.";

      quoteForm.reset();
    } catch (error) {
      formMessage.style.display = "block";
      formMessage.textContent =
        "Sorry, your enquiry could not be sent. Please try again.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Enquiry";
    }
  });
}
