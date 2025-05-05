/**
 * @format
 * @type {import('tailwindcss').Config}
 */

import plugin from 'tailwindcss/plugin';

export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                scale: {
                    "0%": {
                        scale: 1,
                    },
                    "100%": {
                        scale: 1.25,
                    },
                },
                "spin-360": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                scale: "scale 1s ease-in-out",
                "spin-360": "spin-360 1s linear infinite",
            },
            colors: {
                primary: "#0284c7",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".no-tap-highlight": {
                    "-webkit-tap-highlight-color": "transparent",
                },
            });
        }),
    ],
};
