// Aqui dejo las configuraciones de paletas y de fonts para variarlas con los botones
// Si vas a usar algun otro color para lo de las dos secciones tmb tienes que poner 
// su equivalente aqui para las diferentes ocnfiguraciones. Yo le pedi a gemini
// que me creara las otras 4 paletas y config de font basado en la que yo defini en el css
const colorPalettes = [
    {
        name: "Default",
        "--primary-color": "#333",
        "--secondary-color": "#555",
        "--background-color": "#f4f4f4",
        "--menu-bg-color": "#bbb",
        "--border-color": "#999",
        "--tooltip-bg-color": "#555",
        "--tooltip-text-color": "#fff"
    },
    {
        name: "Blue",
        "--primary-color": "#003366",
        "--secondary-color": "#3498db",
        "--background-color": "#e8f6ff",
        "--menu-bg-color": "#ffffff",
        "--border-color": "#a6d9f7",
        "--tooltip-bg-color": "#003366",
        "--tooltip-text-color": "#ffffff"
    },
    {
        name: "Green",
        "--primary-color": "#1a531a",
        "--secondary-color": "#3c6e3c",
        "--background-color": "#f0fff0",
        "--menu-bg-color": "#d9f0d9",
        "--border-color": "#88cc88",
        "--tooltip-bg-color": "#1a531a",
        "--tooltip-text-color": "#ffffff"
    },
    {
        name: "Warm",
        "--primary-color": "#8b2512",
        "--secondary-color": "#e67e22",
        "--background-color": "#fff5e6",
        "--menu-bg-color": "#fff8f0",
        "--border-color": "#f5cba7",
        "--tooltip-bg-color": "#8b2512",
        "--tooltip-text-color": "#ffffff"
    },
    {
        name: "Modern",
        "--primary-color": "#34495e",
        "--secondary-color": "#7f8c8d",
        "--background-color": "#ecf0f1",
        "--menu-bg-color": "#bdc3c7",
        "--border-color": "#95a5a6",
        "--tooltip-bg-color": "#34495e",
        "--tooltip-text-color": "#ffffff"
    }
];

const fontConfigs = [
    {
        name: "Roboto Default",
        "--main-font": "'Roboto', sans-serif",
        "--h1-font-size": "2.5rem",
        "--p-font-size": "1rem",
        "--nav-font-size": "1.2rem",
        "--body-font-size": "1rem"
    },
    {
        name: "Serif Classic",
        "--main-font": "'Merriweather', serif",
        "--h1-font-size": "3rem",
        "--p-font-size": "1.1rem",
        "--nav-font-size": "1.3rem",
        "--body-font-size": "1.1rem"
    },
    {
        name: "Playful Sans-Serif",
        "--main-font": "'Nunito', sans-serif",
        "--h1-font-size": "2.8rem",
        "--p-font-size": "1.2rem",
        "--nav-font-size": "1.4rem",
        "--body-font-size": "1.2rem"
    }
];

// Exportarlas para usarlas en el script bueno
export { colorPalettes, fontConfigs };