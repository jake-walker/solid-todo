export const settings = {
  data: () => ({
    settings: {
      showSyncDisabledAlert: true,
    },
  }),
  mounted() {
    if (localStorage.settings) {
      this.settings = JSON.parse(localStorage.settings);
    }
  },
  watch: {
    settings: {
      handler(newSettings, oldSettings) {
        if (JSON.stringify(newSettings) != localStorage.settings) {
          console.log("Settings updated");
          localStorage.settings = JSON.stringify(newSettings);
        }
      },
      deep: true,
    },
  },
}
