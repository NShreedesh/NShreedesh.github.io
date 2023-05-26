export default interface IDarkMode {
  isDarkModeActive: boolean;
  toggleDarkModeActive?(isDarkModeActive: boolean): void;
}
