document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons with class "live"
  const liveButtons = document.querySelectorAll(".live");

  // Iterate over each button and set the href attribute of its anchor tag
  liveButtons.forEach(button => {
      button.addEventListener("click", function () {
          // Get the index of the button in its parent element
          const index = Array.from(this.parentNode.parentNode.parentNode.children).indexOf(this.parentNode.parentNode);
          // Define folder names for each button index
          const folderNames = ["JumpingWords", "BellNotification", "Illumination", "Search", "AnimationProject", "Resume"];
          // Construct the href path using the folder name corresponding to the index
          const href = `./${folderNames[index]}/index.html`;
          // Set the href attribute of the anchor tag inside the button
          const anchorTag = this.querySelector("a");
          anchorTag.setAttribute("href", href);
          // Open link in a new tab
          anchorTag.setAttribute("target", "_blank");
      });
  });
});

// Get all buttons with the class 'live'
const buttons = document.querySelectorAll('.live');

// Add event listeners for mouseenter and mouseleave to each button
buttons.forEach(button => {
  button.addEventListener('mouseenter', expandButton);
  button.addEventListener('mouseleave', shrinkButton);
});

// Function to expand the button
function expandButton(event) {
  // Increase the button size and add transition effect
  event.target.style.transform = 'scale(1.05)'; // Adjust the scale value here
  event.target.style.transition = 'transform 0.5s ease';
}

// Function to shrink the button
function shrinkButton(event) {
  // Restore the button size and add transition effect
  event.target.style.transform = 'scale(1)';
  event.target.style.transition = 'transform 0.5s ease';
}
