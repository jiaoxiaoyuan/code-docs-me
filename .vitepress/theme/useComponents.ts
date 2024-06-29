import MNavLinks from "./components/MNavLinks.vue";
import HomeIndex from "./components/Home/index.vue";

export function useComponents(app) {
    app.component("MNavLinks", MNavLinks);
    app.component("HomeIndex", HomeIndex);
}
