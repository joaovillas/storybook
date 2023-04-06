module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      lineHeight: {
        tight: "100%",
        medium: "110%",
        distant: "150%",
        superdistant: "200%",
      },
      fontFamily: {
        highlight: ["Archivo"],
      },
      fontWeight: {
        bold: "700",
        medium: "600",
        regular: "400",
      },
      fontSize: {
        xxxs: "0.75rem",
        xxs: "0.875rem",
        xs: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        xxl: "3rem",
        xxxl: "4rem",
        display: "5rem",
        giant: "6rem",
      },
      borderRadius: {
        none: "0px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        pill: "500px",
        circular: "50%",
      },
      borderWidth: {
        none: "0px",
        hairline: "1px",
        thin: "2px",
        thick: "4px",
        heavy: "8px",
      },
      boxShadow: {
        "level-1": "0px 4px 8px",
        "level-2": "0px 8px 24px",
        "level-3": "0px 16px 32px",
        "level-4": "0px 16px 48px",
      },
      opacity: {
        semiopaque: "0.80",
        intense: "0.64",
        medium: "0.32",
        light: "0.16",
        semitransparent: "0.08",
      },
      colors: {
        "brand-primary": {
          "01": "#691C07",
          "02": "#8F260A",
          "03": "#F04E23",
          "04": "#FBD1C6",
          "05": "#FEF0EC",
        },
        neutral: {
          "01": "#000000",
          "02": "#70747B",
          "03": "#A6AAAF",
          "04": "#E4E5E7",
          "05": "#ffffff",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
