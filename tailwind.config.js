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
                'pplg-primary': '#06b6d4',
                'pplg-secondary': '#10b981',
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
                    '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5), 0 0 10px rgba(6, 182, 212, 0.3)' },
                    '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(6, 182, 212, 0.5)' },
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
                minimalist: {
                    "primary": "#06b6d4",
                    "primary-content": "#ffffff",
                    "secondary": "#10b981",
                    "secondary-content": "#ffffff",
                    "accent": "#f59e0b",
                    "accent-content": "#ffffff",
                    "neutral": "#0a0a0a",
                    "neutral-content": "#e8e8e8",
                    "base-100": "#0f0f0f",
                    "base-200": "#1a1a1a",
                    "base-300": "#262626",
                    "base-content": "#e8e8e8",
                    "info": "#3b82f6",
                    "success": "#10b981",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
            },
            {
                cyberpunk: {
                    "primary": "#ff00ff",
                    "secondary": "#00ffff",
                    "accent": "#ffff00",
                    "neutral": "#1a103d",
                    "base-100": "#0d0221",
                    "base-200": "#1a103d",
                    "base-300": "#2d1b69",
                    "info": "#00d9ff",
                    "success": "#00ff88",
                    "warning": "#ffaa00",
                    "error": "#ff0055",
                },
            },
            "dracula",
            "synthwave",
            "night",
        ],
    },
}
