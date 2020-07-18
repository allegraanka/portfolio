import { createMuiTheme } from '@material-ui/core/styles';
import MonolineCondensedMedium from './designAssets/fonts/Monoline-Condensed-Medium-v2.1.otf';

const monoline = {
    fontFamily: 'Monoline-Condensed-Medium-v2.1',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    src: `
        local('Monoline-Condensed-Medium-v2.1'),
        url(${MonolineCondensedMedium}) format('opentype')
    `,
    unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
}

const richBlack = "#161925";

const verdigris = "#48A9A6";
const timberwolf = "#E4DFDA";

const purpleplum = "#651EDF";
const celeste = "#A9FFF7";

export default createMuiTheme({
    palette: {
        common: {
            black: `${richBlack}`,
            white: `${timberwolf}`
        },
        primary: {
            main: `${richBlack}`
        },
        secondary: {
            main: `${purpleplum}`
        },
        text: {
            primary: `${richBlack}`,
            secondary: `${purpleplum}`
        }
    },
    typography: {
        fontFamily: 'Monoline-Condensed-Medium-v2.1',
        h1: {
            fontFamily: "Monoline-Condensed-Medium-v2.1",
            fontWeight: 300,
            fontSize: '3rem',
            lineHeight: 1.175,
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontFamily: "Monoline-Condensed-Medium-v2.1",
            fontWeight: 300,
            fontSize: "1.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em"
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [monoline]
            }
        }
    }
});