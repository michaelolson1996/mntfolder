
function setColorsByTheme(
  defaultDarkTheme,
  defaultLightTheme,
  themeStorageKey
) {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(themeStorageKey);
  const root = document.body;
  let colorMode = "";

  const hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = JSON.parse(persistedPreference);
  } else {
    colorMode = prefersDarkFromMQ ? defaultDarkTheme : defaultLightTheme;
    localStorage.setItem(themeStorageKey, JSON.stringify(colorMode));
  }

  root.classList.add(colorMode);
}

const ThemeScriptTag = () => {
  const themeScript = `(${setColorsByTheme})(
        'theme-dark',
        'theme-light',
        'theme',
      )`;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
};

export default ThemeScriptTag;