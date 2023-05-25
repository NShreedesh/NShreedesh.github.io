export default interface INavbar {
  isNavbarActive: boolean;
  toggleNavbarState?(isNavbarActive: boolean): void;
}
