/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Green palette theme
                'pplg-primary': '#069e2d',      // Pigment green
                'pplg-secondary': '#058e3f',    // Forest green
                'pplg-3': '#04773b',            // Dark spring green
                'pplg-4': '#036016',            // Dartmouth green
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(6, 158, 45, 0.5), 0 0 10px rgba(6, 158, 45, 0.3)' },
                    '100%': { boxShadow: '0 0 20px rgba(6, 158, 45, 0.8), 0 0 30px rgba(6, 158, 45, 0.5)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                'eseftwo-light': {
                    "primary": "#069e2d",
                    "primary-content": "#ffffff",
                    "secondary": "#058e3f",
                    "secondary-content": "#ffffff",
                    "accent": "#04773b",
                    "accent-content": "#ffffff",
                    "neutral": "#f5f5f5",
                    "neutral-content": "#171717",
                    "base-100": "#ffffff",
                    "base-200": "#f8fafc",
                    "base-300": "#f1f5f9",
                    "base-content": "#171717",
                    "info": "#04773b",
                    "success": "#069e2d",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
            },
            {
                minimalist: {
                    "primary": "#069e2d",
                    "primary-content": "#ffffff",
                    "secondary": "#058e3f",
                    "secondary-content": "#ffffff",
                    "accent": "#04773b",
                    "accent-content": "#ffffff",
                    "neutral": "#0a0a0a",
                    "neutral-content": "#f5f5f5",
                    "base-100": "#0f0f0f",
                    "base-200": "#171717",
                    "base-300": "#262626",
                    "base-content": "#f5f5f5",
                    "info": "#04773b",
                    "success": "#069e2d",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
            },
            {
                cyberpunk: {
                    "primary": "#069e2d",
                    "primary-content": "#ffffff",
                    "secondary": "#058e3f",
                    "secondary-content": "#ffffff",
                    "accent": "#036016",
                    "accent-content": "#ffffff",
                    "neutral": "#1a103d",
                    "neutral-content": "#e0e7ff",
                    "base-100": "#0d0221",
                    "base-200": "#1a103d",
                    "base-300": "#2d1b69",
                    "base-content": "#e0e7ff",
                    "info": "#04773b",
                    "success": "#069e2d",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
            },
            "dracula",
            "synthwave",
            "night",
        ],
    },
}
