import type {} from "@mui/lab/themeAugmentation";
import { createTheme, alpha } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tablet: true;
    laptop: true;
    laptopL: true;
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#5168B5",
      dark: "#4A63B7",
      light: "#6077C3",
    },
    secondary: {
      main: "#DEEFFE",
      dark: "#CBE3F9",
      light: "#EBF6FF",
      contrastText: "#5168B5",
    },
    error: {
      main: "#D32F2F",
      dark: "#C62828",
      light: "#EF5350",
    },
  },
  breakpoints: {
    values: {
      tablet: 768,
      laptop: 1024,
      laptopL: 1440,
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: "relative",
          background: "#ffffff",
          boxShadow: "none",
          borderRadius: "10px",
          cursor: "pointer",
          [theme.breakpoints.down("laptop")]: {
            padding: "12px",
          },
          "&.Mui-expanded": {
            margin: 0,
          },
          "&:before": {
            display: "none",
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0!important",
          maxHeight: 200,
          overflow: "scroll",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
          paddingBottom: 4,
          minHeight: "auto!important",
          ">div:first-of-type": {
            display: "block",
            margin: 0,
          },
          ".MuiAccordionSummary-expandIconWrapper": {
            position: "absolute",
            right: 0,
            top: 0,
            background: "#3E57AD",
            borderRadius: "8px",
            svg: {
              color: "#fff",
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#3E57AD",
          padding: "13px 0 !important",
          height: 2,
        },
        rail: {
          background: "#CAD6FF",
          opacity: 1,
          height: 2,
        },
        thumb: {
          height: 20,
          width: 20,
          marginTop: -10,
          marginLeft: -10,
          backgroundColor: "#3E57AD",
          zIndex: 1,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          maxWidth: 846,
          width: "100%",
          background: "#fff",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        },
        flexContainer: {
          width: "100%",
        },
        indicator: {
          left: 0,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
          maxWidth: 846,
          width: "100%",
          background: "#fff",
          ">div": {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            maxWidth: 846,
            width: "100%",
            background: "#fff",
            padding: "40px!important",
            ">div": {
              backgroundColor: "#fff",
            },
            [theme.breakpoints.down("tablet")]: {
              padding: "36px 12px!important",
            },
            [theme.breakpoints.down("laptop")]: {
              flexDirection: "column",
            },
          },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: "33.33%",
          flexDirection: "row",
          minHeight: 50,
          padding: "0!important",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "24px",
          letterSpacing: "0.4000000059604645px",
          "&:hover": {
            background: "transparent",
            borderRight: "none",
          },
          "&[data-active]": {
            borderBottom: "2px solid #3E57AD",
            [theme.breakpoints.down("tablet")]: {
              border: "none",
              borderLeft: "2px solid #3E57AD",
            },
          },
          "&[data-active]:hover": {
            border: "none",
            borderBottom: "2px solid #3E57AD",
            [theme.breakpoints.down("tablet")]: {
              border: "none",
              borderLeft: "2px solid #3E57AD",
            },
          },
          [theme.breakpoints.down("tablet")]: {
            marginTop: 0,
            borderLeft: "2px solid #DEE2E6",
            maxWidth: "100%!important",
            width: "100%",
            display: "flex",
            justifyContent: "start",
            borderRadius: "0!important",
            paddingLeft: "16px!important",
          },
        }),
        labelIcon: {
          "& svg": {
            width: "24px",
            height: "24px",
            marginRight: "6px",
            marginBottom: "0!important",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: "9px 9px 9px 0",
          ">span": {
            padding: "6px!important",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: 0,
          margin: "9px 9px 9px 0",

          ...(ownerState.color === "secondary" && {
            color: "#91C8FB",
            "&.Mui-checked": {
              color: "#3e57ad",
            },
            "&.Mui-disabled": {
              color: "#A2ADD4",
            },
          }),

          ...(ownerState.color === "primary" && {
            color: theme.palette.primary.main,
            "&.Mui-checked": {
              color: theme.palette.primary.main,
            },
            "&.Mui-disabled": {
              color: "#A2ADD4",
            },
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          width: "100%",
          ".Mui-disabled div, .Mui-disabled span, . Mui-disabled button": {
            color: "rgba(0, 0, 0, 0.38)",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          "&.Mui-disabled": {
            "div, span": {
              color: "rgba(0, 0, 0, 0.38)",
            },
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#5168B5",
          opacity: 0.5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          textTransform: "none",
          fontWeight: 500,
          "&:disabled": {
            color: alpha("#000", 0.38),
          },
          ...(ownerState.size === "large" && {
            padding: "11px 22px",
            borderRadius: 10,
            fontSize: 15,
            lineHeight: "26px",
          }),
          ...(ownerState.size === "medium" && {
            padding: "6px 16px",
            borderRadius: 8,
            fontSize: 14,
            lineHeight: "24px",
          }),
          ...(ownerState.size === "small" && {
            padding: "4px 10px",
            borderRadius: 6,
            fontSize: 13,
            lineHeight: "22px",
          }),
          ...(ownerState.variant === "contained" && {
            boxShadow:
              "0px 3px 1px -2px #A8B7EB33, 0px 2px 2px 0px #A8B7EB24, 0px 1px 5px 0px #A8B7EB1F",
            "&:hover": {
              boxShadow:
                "0px 2px 4px -1px #A8B7EB33, 0px 4px 5px 0px #A8B7EB24, 0px 1px 10px 0px #A8B7EB1F",
            },
            "&:focus": {
              boxShadow:
                "0px 3px 5px -1px #A8B7EB33, 0px 6px 10px 0px #A8B7EB24, 0px 1px 18px 0px #A8B7EB1F",
            },
          }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "secondary" && {
              color: theme.palette.primary.main,
              borderColor: theme.palette.secondary.light,
            }),
          ...(ownerState.variant === "text" && {
            color: theme.palette.primary.main,
          }),
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "0px!important",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
            {
              "-webkit-appearance": "none",
              margin: 0,
            },

          /* Firefox */
          "input[type=number]": {
            "-moz-appearance": "textfield",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          // TODO: need to bind to specific positions of the tooltip
          marginLeft: "7px!important",
          marginTop: "7px!important",
        },
      },
    },
  },
});

customTheme.typography.body2 = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "20px",

  [customTheme.breakpoints.up("tablet")]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
  },
};

customTheme.typography.h2 = {
  fontSize: 22,
  fontWeight: 500,
  lineHeight: "27.72px",

  [customTheme.breakpoints.up("tablet")]: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: "30px",
  },
};

export default customTheme;
