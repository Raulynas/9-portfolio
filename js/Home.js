// IMPORTS
/*header */
/*hero */
/*about me */
/*hobies */
import { hobbies } from "./components/hobbies/hobbies.js";
import { hobbiesData } from "./data/hobbiesData.js";
/*achievements */
/*services */
/*resume */
/*expertise */
/*portofolio */
import { Gallery } from "./components/gallery/Gallery.js";
import { portfolioData } from "./data/portfolioData.js";
/*testimonials */
/*blog */
/*freelance */
/*contact me */
/*footer */

//Execution

/*header */
/*hero */
/*about me */
/*hobies */
hobbies(hobbiesData);

/*achievements */
/*services */
/*resume */
/*expertise */
/*portofolio */
const portfolioGallery = new Gallery(portfolioData);
portfolioGallery.init();
/*testimonials */
/*blog */
/*freelance */
/*contact me */
/*footer */
