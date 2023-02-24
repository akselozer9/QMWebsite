// color design tokens export




export const tokensDark = {
   
  pink : {
    100: "#fff0f3",
    200: "#ffe2e6",
    300: "#ffd3da",
    400: "#ffc5cd",
    500: "#ffb6c1",
    600: "#cc929a",
    700: "#996d74",
    800: "#66494d",
    900: "#332427"
  },


  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#ccdaee",
    200: "#99b5dd",
    300: "#6691cd",
    400: "#336cbc",
    500: "#0047ab",
    600: "#003989",
    700: "#002b67",
    800: "#001c44",
    900: "#000e22",
   // 1000: "#000000", // manually adjusted
    },
    primary: {
      // blue
    100: "#d1d1e2",
    200: "#a3a3c6",
    300: "#7575a9",
    400: "#47478d",
    500: "#191970",
    600: "#14145a",
    700: "#0f0f43",
    800: "#0a0a2d",
    900: "#050516",
    1000: "#000000"
      
    },
    secondary: {
      // yellow
      50: "#f0f0f0", // manually adjusted
      100: "#fff6e0",
      200: "#ffedc2",
      300: "#ffe3a3",
      400: "#ffda85",
      500: "#ffd166",
      600: "#cca752",
      700: "#997d3d",
      800: "#665429",
      900: "#332a14",
    },
  };
  
  // function that reverses the color palette
  function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  export const tokensLight = reverseTokens(tokensDark);
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[1000],
                light: tokensDark.primary[1000],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[300],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.primary[1000],
                alt: tokensDark.primary[1000],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
              },
            }),
      },
      typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };