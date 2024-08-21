import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function video() {
  Fancybox.bind('[data-fancybox="video-gallery"]', {
    // Your custom options for a specific gallery
  });
}