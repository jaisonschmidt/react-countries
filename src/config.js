// initial theme
import ThemeDark from "./assets/styles/ThemeDark";
import ThemeLight from "./assets/styles/ThemeLight";

const THEMES = [
  { title: "Dark", scheme: ThemeDark },
  { title: "Light", scheme: ThemeLight }
];

export const Config = {
  URL_API: "https://restcountries.eu/rest/v2",
  PAGE_TITLE: "Country API - React",
  THEMES,
  INITIAL_THEME: THEMES[0]
};
