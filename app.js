const moonPath =
  "M16 27.5C16 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 16 12.3122 16 27.5Z";
const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

// WE NEED TO CLICK ON THE SUN

darkMode.addEventListener("click", () => {
  // WE NEED TO USE ANIME.JS
  // HERE WE SET UP THE TIMELINEE
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  // ADD DIFFERENT ANIMATIONS TO THE TIMELINE
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(225,225,225)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(225,225,225)",
      },
      "-=700"
    );
  // EVERYTIME WE CLICK ON THE SUN I WONT THAT TO SWITCH
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
