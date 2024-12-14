const icons = document.querySelectorAll(".icon");

const indicator = document.querySelector(".indicator");

const indicator_drop = document.querySelector(".indicator-drop");

icons.forEach((el) => el.addEventListener("click", clickIcon));

const active_icon = document.querySelector("input:checked + label");
indicator.style.left = `${active_icon.offsetLeft + 12}px`;
indicator.style.backgroundColor = "#004F8C";
indicator.style.setProperty("--indicator", "#e2921a");

indicator_drop.style.left = "31px";
indicator_drop.style.top = "75px";
indicator_drop.style.opacity = "0";

function clickIcon() {
  let active_icon = document.querySelector("input:checked + label");
  indicator.style.left = `${active_icon.offsetLeft + 12}px`;
  let active_icon_number = active_icon.getAttribute("for");

  indicator.className = "indicator indicator-animation";

  setTimeout(() => {
    indicator_drop.style.top = "55px";
    indicator_drop.style.left = `${active_icon.offsetLeft + 18}px`;
    indicator_drop.style.opacity = "1";
  }, 300);

  setTimeout(() => {
    indicator_drop.style.top = "75px";
    indicator_drop.style.left = "31px";
    indicator_drop.style.opacity = "0";
  }, 500);

  setTimeout(() => {
    indicator.className = "indicator";
  }, 500);

  switch (active_icon_number) {
    case "icon-one":
      indicator.style.backgroundColor = "#004F8C";
      indicator.style.setProperty("--indicator", "#e18e1c");
      break;
    case "icon-two":
      indicator.style.backgroundColor = "#004F8C";
      indicator.style.setProperty("--indicator", "#e3911a");
      break;
    case "icon-three":
      indicator.style.backgroundColor = "#004F8C";
      indicator.style.setProperty("--indicator", "#e1921a");
      break;
    case "icon-four":
      indicator.style.backgroundColor = "#004F8C";
      indicator.style.setProperty("--indicator", "#e39519");
      break;
    default:
      indicator.style.backgroundColor = "#004F8C";
      indicator.style.setProperty("--indicator", "#e18e1c");
  }
}
