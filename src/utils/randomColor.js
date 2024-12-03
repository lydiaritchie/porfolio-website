
export function getRandomColor() {
  const colors = [
    "#A4BFEB",  // Light cornflower blue
    "#AEADF0",  // Pale periwinkle blue
    "#3e92cc",  // Rich cerulean blue
    "#89cff0",  // Soft baby blue
    "#0066b2",  // Deep sapphire blue
    "#6699CC",  // Muted steel blue
    "#7ea3cc",  // Light grayish-blue
    "#6cb4ee",  // Bright azure blue
    "#255c99",  // Dark slate blue
    "#b0c4de",  // Soft powder blue
    "#a4bfeb",  // Moderate sky blue
    "#6082b6",  // Dusty denim blue
    "#4b9cd3",  // Vivid cobalt blue
    "#87cefa",  // Light sky blue
    "#add8e6",  // Pale pastel blue
    "#73c2fb",  // Medium light blue
    "#b4d4ee",  // Frosty pale blue
    "#e0ffff",  // Very pale aqua blue
  ];  
  
  
  const randomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}
