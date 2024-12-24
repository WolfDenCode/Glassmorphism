const icons = document.querySelectorAll(".icon");
const indicator = document.querySelector(".indicator");
const indicatorDrop = document.querySelector(".indicator-drop");

let previousActiveLabel = null; // Track the previously active icon label

// Set initial state without animations
initializeIndicatorPosition();

// Attach event listeners to all icons
icons.forEach((icon) =>
  icon.addEventListener("click", updateIndicatorPosition)
);

function initializeIndicatorPosition() {
  const activeIconLabel =
    document.querySelector("input:checked + label") ||
    icons[0].querySelector("label");
  const { offsetLeft, offsetWidth } = activeIconLabel;

  // Position the indicator without animation
  indicator.style.transition = "none";
  indicator.style.left = `${
    offsetLeft + offsetWidth / 2 - indicator.offsetWidth / 2
  }px`;

  // Apply the fill animation state immediately
  activeIconLabel
    .querySelector("svg use.icon-active")
    .classList.add("fill-animation-start");

  // Set the indicator color
  indicator.style.backgroundColor = "#004F8C";
  indicator.style.setProperty("--indicator", "#e2921a");

  // Reset the transition for future animations
  setTimeout(() => {
    indicator.style.transition = "0.3s ease-in-out";
  });
}

function updateIndicatorPosition() {
  const activeIconLabel = document.querySelector("input:checked + label");

  if (!activeIconLabel || activeIconLabel === previousActiveLabel) return;

  previousActiveLabel = activeIconLabel; // Update the active label reference

  // Get the dimensions and position of the active icon
  const { offsetLeft, offsetWidth } = activeIconLabel;

  // Update indicator position
  indicator.style.left = `${
    offsetLeft + offsetWidth / 2 - indicator.offsetWidth / 2
  }px`;
  indicator.classList.add("indicator-animation");

  // Animate the ball from the peak of the indicator
  setTimeout(() => {
    // Start the ball at the peak of the indicator
    indicatorDrop.style.transition = "none";
    indicatorDrop.style.transform = "translateY(30px)";
    indicatorDrop.style.opacity = "1";
    indicatorDrop.style.left = `${
      offsetLeft + offsetWidth / 2 - indicatorDrop.offsetWidth / 2
    }px`;

    // Animate the ball towards the icon
    setTimeout(() => {
      indicatorDrop.style.transition =
        "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in-out";
      indicatorDrop.style.transform = "translateY(0)";
      indicatorDrop.style.opacity = "0";

      // Trigger the icon's fill animation
      activeIconLabel
        .querySelector("svg use.icon-active")
        .classList.add("fill-animation-start");
    }, 50); // Small delay to ensure smooth animation start
  }, 300); // Matches the indicator's animation duration

  // Remove the indicator animation class to allow for new transitions
  setTimeout(() => {
    indicator.classList.remove("indicator-animation");
  }, 300); // Matches the indicator's animation duration
}
