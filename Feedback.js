const form = document.getElementById("feedback-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;

  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Email: ${email}`);
  console.log(`Feedback: ${feedback}`);
});
