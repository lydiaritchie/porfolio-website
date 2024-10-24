
export function getRandomColor() {
const colors = [
    "#D5F2E3",
    "#FCEADE",
    "#A4BFEB",
    "#AF9BB6",
    "#CDFFF9",
    "#FADF63",
    "#A3BBAD",
    "#FCAA67",
    "#AEADF0",
    "#EBB9DF",
  ];
  const randomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}
