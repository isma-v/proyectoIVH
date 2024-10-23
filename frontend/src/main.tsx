import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2589BD',
        },
        secondary: {
            main: '#38686A',
        },
    },
    typography: {
        overline: {
            fontSize: '1rem',
            fontWeight: 400,
        },
    },
    shape: {
        borderRadius: 4,
    },
    spacing: 8,
    components: {
        MuiAppBar: {
            defaultProps: {
                color: 'default',
            },
        },
        MuiList: {
            defaultProps: {
                dense: true,
            },
        },
        MuiMenuItem: {
            defaultProps: {
                dense: true,
            },
        },
        MuiTable: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiButton: {
            defaultProps: {
                size: 'small',
            },
            styleOverrides: {
                root: {
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                },
            },
        },
        MuiButtonGroup: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiCheckbox: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiFab: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiFormControl: {
            defaultProps: {
                margin: 'dense',
                size: 'small',
            },
        },
        MuiFormHelperText: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiInputBase: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiInputLabel: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiRadio: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiSwitch: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiTextField: {
            defaultProps: {
                margin: 'dense',
                size: 'small',
            },
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true,
            },
        },
    },
});



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StrictMode>
);
