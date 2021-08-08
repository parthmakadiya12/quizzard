import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faTrash,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function registerIcons() {
  library.add(faSun, faMoon, faTrash, faPlusCircle);
}
