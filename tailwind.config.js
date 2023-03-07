/** @type {import('tailwindcss').Config} */
function withOpacity(colorName) {
  return ({ opacityValue }) => {
    if (opacityValue != undefined) {
      return `rgba(var(${colorName}), ${opacityValue})`
    }
    return `rgba(var(${colorName}), 0.2)`
  }
}

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    extend: {
      // colors: {
      //   blue: {
      //     '1000': "#010c38",
      //   },
      // },
      fontFamily: {
        OpenSans: ["OpenSans", "sans-serif"],
        SourceSansPro: ["SourceSansPro", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.25rem",
      },

      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          "base-inverted": "var(--color-text-base-inverted)",
          "muted-inverted": "var(--color-text-muted-inverted)",
          message: "var(--color-text-message)",
          hover: "var(--color-text-hover)",
          duotone: "var(--color-fill-primary)"
        },
      },
      backgroundColor: {
        skin: {
          primary: "var(--color-fill-primary)",
          "primary-muted": "var(--color-fill-primary-muted)",
          secondary: "var(--color-fill-secondary)",
          "secondary-muted": "var(--color-fill-secondary-muted)",
          tertiary: "var(--color-fill-tertiary)",
          light: "var(--color-fill-light)",
          "button-primary": "var(--color-button-primary)",
          "button-primary-muted": "var(--color-button-primary-muted)",
          "button-primary-hover": "var(--color-button-primary-hover)",
          "button-primary-muted-hover": "var(--color-button-primary-muted-hover)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-border-base)",
          muted: "var(--color-border-muted)",
        },
      },
      outlineColor: {
        skin: {
          base: "var(--color-border-base)",
          muted: "var(--color-border-muted)",
        },
      },
      fill: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          green: "var(--color-text-message)",
          primary: "var(--color-fill-primary)",
          hover: "var(--color-text-hover)",
          inverted: "var(--color-text-muted-inverted)",
          "inverted-hover": "var(--color-text-base-inverted)",
        },
      },
      stroke: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          green: "var(--color-text-message)",
          primary: "var(--color-fill-primary)",
          hover: "var(--color-text-hover)",
          inverted: "var(--color-text-muted-inverted)",
          "inverted-hover": "var(--color-text-base-inverted)",
        },
      },
      boxShadowColor: {
        skin: {
          base: withOpacity("--color-boxshadow-base"),
          muted: withOpacity("--color-boxshadow-muted"),
        }
      },
    },
  },
  plugins: [],
}
