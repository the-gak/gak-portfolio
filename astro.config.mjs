import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

//Conditional base path for GitHub Pages
const getBasePath = () => {
	if (process.env.NODE_ENV === "production") {
		return "/gak-portfolio"; // Replace with your repository name
	} else if (process.env.NODE_ENV === "staging") {
		return "/";
	}
	return "/";
}

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: "https://www.ahilesh.com",
  	base: getBasePath(),
  	trailingSlash: "ignore",
});
