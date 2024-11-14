import { ColorSchemes } from "./ColorSchemes";

// Function to select a random color scheme from the provided color schemes object

export function getRandomColorScheme() {
  const keys = Object.keys(ColorSchemes);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  const theme = ColorSchemes[randomKey];
  console.log(theme);
  return theme;
}
