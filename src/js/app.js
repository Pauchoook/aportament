import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";
import slider from "./files/slider.js";

functions.isWebp();
functions.mediaAdaptive();
spoller();
burger();
slider();