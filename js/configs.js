// Configuraciones de Paletas y de fonts

const colorPalettes = [
    {
        name: "Default",
        "--primary-color": "#333333",
        "--secondary-color": "#555555",
        "--background-color": "#f4f4f4",
        "--menu-bg-color": "#bbbbbb",
        "--border-color": "#999999",
        "--tooltip-bg-color": "#555555",
        "--tooltip-text-color": "#ffffff",
        "--card-bg": "#ffffff",
        "--title-color": "#2c3e50"
    },
    {
        name: "Blue",
        "--primary-color": "#00204a",
        "--secondary-color": "#2980b9",
        "--background-color": "#e8f6ff",
        "--menu-bg-color": "#d0eafc",
        "--border-color": "#a6d9f7",
        "--tooltip-bg-color": "#00204a",
        "--tooltip-text-color": "#ffffff",
        "--card-bg": "#ffffff",
        "--title-color": "#00204a"
    },
    {
        name: "Green",
        "--primary-color": "#145c22",
        "--secondary-color": "#27ae60",
        "--background-color": "#e6fff0",
        "--menu-bg-color": "#d9f0d9",
        "--border-color": "#76c290",
        "--tooltip-bg-color": "#145c22",
        "--tooltip-text-color": "#ffffff",
        "--card-bg": "#ffffff",
        "--title-color": "#145c22"
    },
    {
        name: "Warm",
        "--primary-color": "#a63d18",
        "--secondary-color": "#e74c3c",
        "--background-color": "#fff8e6",
        "--menu-bg-color": "#ffe8c6",
        "--border-color": "#f2b28c",
        "--tooltip-bg-color": "#a63d18",
        "--tooltip-text-color": "#ffffff",
        "--card-bg": "#ffffff",
        "--title-color": "#a63d18"
    },
    {
        name: "Modern",
        "--primary-color": "#2c3e50",
        "--secondary-color": "#95a5a6",
        "--background-color": "#f0f6f7",
        "--menu-bg-color": "#d4dadb",
        "--border-color": "#bdc3c7",
        "--tooltip-bg-color": "#2c3e50",
        "--tooltip-text-color": "#ffffff",
        "--card-bg": "#ffffff",
        "--title-color": "#2c3e50"
    },
    {
        name: "Dark",
        "--primary-color": "#f8f9fa",
        "--secondary-color": "#ced4da",
        "--background-color": "#212529",
        "--menu-bg-color": "#343a40",
        "--border-color": "#6c757d",
        "--tooltip-bg-color": "#f8f9fa",
        "--tooltip-text-color": "#212529",
        "--card-bg": "#2c3e50",
        "--title-color": "#f8f9fa"
    }
];

const fontConfigs = [
    {
        name: "Roboto Default",
        "--main-font": "'Roboto', sans-serif",
        "--h1-font-size": "2.5rem",
        "--p-font-size": "1rem",
        "--nav-font-size": "1.2rem",
        "--body-font-size": "1rem",
        "--font-title": "'Merriweather', serif",
        "--font-alt": "'Nunito', sans-serif",
        "--font-mono": "'Courier New', Courier, monospace"
    },
    {
        name: "Serif Classic",
        "--main-font": "'Merriweather', serif",
        "--h1-font-size": "3rem",
        "--p-font-size": "1.1rem",
        "--nav-font-size": "1.3rem",
        "--body-font-size": "1.1rem",
        "--font-title": "'Merriweather', serif",
        "--font-alt": "'Roboto', sans-serif",
        "--font-mono": "'Courier New', Courier, monospace"

    },
    {
        name: "Playful Sans-Serif",
        "--main-font": "'Nunito', sans-serif",
        "--h1-font-size": "2.8rem",
        "--p-font-size": "1.2rem",
        "--nav-font-size": "1.4rem",
        "--body-font-size": "1.2rem",
        "--font-title": "'Nunito', sans-serif",
        "--font-alt": "'Roboto', sans-serif",
        "--font-mono": "'Courier New', Courier, monospace"

    }
];

// Exportarlas para usarlas en el script bueno
export { colorPalettes, fontConfigs };