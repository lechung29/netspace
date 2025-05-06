/** @format */

const getLogoImageSrc = (theme: "light" | "dark"): string => {
    return `/src/assets/${theme === "dark" ? "white" : "gradient"}logo.png`;
};

export { getLogoImageSrc };
