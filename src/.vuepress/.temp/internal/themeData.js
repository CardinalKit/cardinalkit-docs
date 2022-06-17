export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Github\",\"link\":\"https://github.com/cardinalkit\"}],\"sidebar\":[{\"text\":\"CardinalKit iOS App\",\"link\":\"/1-cardinalkit-app/1-start.md\",\"children\":[\"/1-cardinalkit-app/1-start.md\",\"/1-cardinalkit-app/2-setup.md\",\"/1-cardinalkit-app/3-app-customization.md\",\"/1-cardinalkit-app/4-alternative-auth.md\",\"/2-web-dashboard/1-deploy.md\",\"/2-web-dashboard/2-surveys.md\",\"/3-contributing/README.md\"]},{\"text\":\"CardinalKit Web Dashboard\",\"link\":\"/2-web-dashboard/1-deploy.md\",\"children\":[\"/2-web-dashboard/1-deploy.md\",\"/2-web-dashboard/2-surveys.md\",\"/3-contributing/README.md\"]},{\"text\":\"Contributing\",\"link\":\"/3-contributing\",\"children\":[\"/3-contributing/README.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
