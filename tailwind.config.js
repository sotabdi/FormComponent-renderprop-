/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: '#086FA4',
                fontColor: '#11175D',
                fontColor30: 'rgba(17, 23, 93, 0.3)',
                fontColor50: 'rgba(17, 23, 93, 0.5)',
                fontColor70: 'rgba(17, 23, 93, 0.7)',
            },
            fontFamily: {
                nunito: ["Nunito", 'sans-serif']
            }
        },
    },
    plugins: [],
}