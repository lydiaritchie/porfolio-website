
export function getRandomColor() {
  const colors = [
    "#A4BFEB",  // light blue
    "#AEADF0",  // light purple/blue
    "#3e92cc",  // blue
    "#89cff0",  // light blue
    "#0066b2",  // blue
    "#6699CC",  // blue
    "#7ea3cc",  // light blue
    "#6cb4ee",  // light blue
    "#255c99",  // blue
    "#b0c4de",  // light blue
    "#a4bfeb",  // light blue
    "#6082b6",  // blue
    "#4b9cd3",  // blue
    "#87cefa",  // light blue
    "#add8e6",  // light blue
    "#73c2fb",  // light blue
    "#b4d4ee",  // light blue
    "#e0ffff",  // light cyan
  ];
  
  
  const randomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}
