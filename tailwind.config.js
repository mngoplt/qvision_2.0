import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                font1Regular: 'Syne Regular',
                font1SemiBold: 'Syne SemiBold',
                font1Bold: 'Syne Bold',
                font2Light: 'Urbanist Light',
                font2Regular: 'Urbanist Regular',
                font2SemiBold: 'Urbanist SemiBold',
            },
            colors: {
                clblue: '#CCE2E8',
                clgreen: '#A1D4C0',
                clyellow: '##FFEABD',
                clpurple: '#D4C0E9',
                clpink: '#FFB3A4',
                cdblue: '#6BA0AE',
                cblue: '#0067FF',
                cwhite: '#FFFEFE',
                clgray: '#F7F6F5',
                cdgray: '#EAEAEA',
                cblack: '#1D1D1C'
            }
        },
    },

    plugins: [forms],
};
