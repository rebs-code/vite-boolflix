import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as lightStar } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faStar, lightStar);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
