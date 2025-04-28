// charity_profile.js

// Function to show the contact form
function showContactForm() {
  // Create the form dynamically
  const formHTML = `
    <form id="volunteerForm">
      <label for="volunteerName">Your Name:</label>
      <input type="text" id="volunteerName" name="volunteerName" required />

      <label for="volunteerEmail">Your Email:</label>
      <input type="email" id="volunteerEmail" name="volunteerEmail" required />

      <label for="volunteerPhone">Your Phone Number:</label>
      <input type="text" id="volunteerPhone" name="volunteerPhone" required />

      <button type="submit" class="btn-submit">Submit</button>
    </form>
  `;

  // Insert the form into the page
  const formContainer = document.getElementById('contactFormContainer');
  formContainer.innerHTML = formHTML;
  formContainer.style.display = 'block'; // Make the form visible
}

// Function to add additional charity details on hover
function showCharityDetails() {
  const charityDetails = document.createElement('div');
  charityDetails.classList.add('charity-details');
  charityDetails.innerHTML = `
    <p><strong>Mission Statement:</strong> Helping feed the local community through donations and volunteer efforts.</p>
    <p><strong>Founded:</strong> 1985</p>
    <p><strong>Location:</strong> 123 Charity Lane, City, State</p>
  `;
  document.body.appendChild(charityDetails);
}

// Add an event listener to the "Volunteer Now" button
document.addEventListener('DOMContentLoaded', () => {
  const volunteerButton = document.getElementById('volunteerButton');
  volunteerButton.addEventListener('click', showContactForm);

  // Add hover event to display charity details
  const charityLogo = document.getElementById('charityLogo');
  charityLogo.addEventListener('mouseover', showCharityDetails);
});
