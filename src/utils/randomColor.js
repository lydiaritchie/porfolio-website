
export function getRandomColor() {
const colors = [
    "#A4BFEB",
    "#CDFFF9",
    "#A3BBAD",
    "#AEADF0",
    "#3e92cc",
    "#89cff0",
    "#0066b2",
    "#4a7b9d",
    "#6699CC",
    "#7ea3cc",
    "#8baac2",
    "#b9d9eb",
    "#6cb4ee",
    "#255c99",
    "#b0c4de",
    "#a4bfeb",
    "#6082b6",
    "#4b9cd3",
    "#87cefa",
    "#add8e6",
    "#73c2fb",
    "#b4d4ee",
    "#e0ffff",
    "#cdfff9",
  ];
  const randomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}
