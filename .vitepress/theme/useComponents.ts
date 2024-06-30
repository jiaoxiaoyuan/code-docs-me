import MNavLinks from "./components/MNavLinks.vue";
import HomeIndex from "./components/Home/index.vue";
import BasePage from "./components/Base/index.vue";

export function useComponents(app: EnhanceAppContext) {
    app.component("MNavLinks", MNavLinks);
    app.component("HomeIndex", HomeIndex);
    app.component("BasePage", BasePage);
}
