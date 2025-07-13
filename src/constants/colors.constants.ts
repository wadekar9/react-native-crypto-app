const palette = {
  black: '#000000',
  white: '#ffffff',

  transparent: 'rgba(0,0,0,0)',
  transparent25: 'rgba(0,0,0,0.25)',
  transparent50: 'rgba(0,0,0,0.50)',
  transparent75: 'rgba(0,0,0,0.75)',

  success: '#0F9D58',
  danger: '#E31937',
  warning: '#FF6915',
  primary: '#0058a4',
  secondary: '#89D3DF',

  grey: '#A09F9C',
  darkGrey: '#404040',
  mediumGrey: '#808080',

  primaryBackground: '#A7B5C4',
  secondaryBackground: '#E4EAF0',
  tertiaryBackground: '#DAE0E6',

  primaryBlack: '#1D212A',
  secondaryBlack: '#101116',
  textBlack: '#0F0F0F'

} as const;

export const Colors = {
  light: {
    ...palette,
    text: palette.textBlack,
    text1: palette.darkGrey,
    text2: palette.grey,
    text3: palette.grey,
    text4: palette.grey,
    text5: palette.primaryBlack,
    border: palette.grey,
    border1: palette.secondaryBackground,
    border2: palette.primaryBackground,
    surface: palette.white,
    surface1: palette.secondaryBackground,
    background: palette.secondaryBackground,
    background1: palette.white,
    icon: palette.textBlack,
    icon1: palette.textBlack,
    shadow: palette.transparent25
  },
  dark: {
    ...palette,
    text: palette.white,
    text1: palette.secondaryBackground,
    text2: palette.primaryBackground,
    text3: palette.white,
    text4: palette.secondaryBackground,
    text5: palette.secondaryBackground,
    border: palette.grey,
    border1: palette.primaryBlack,
    surface: palette.secondaryBlack,
    surface1: palette.secondaryBlack,
    background: palette.primaryBlack,
    background1: palette.primaryBlack,
    border2: palette.primaryBlack,
    icon: palette.primaryBackground,
    icon1: palette.secondaryBackground,
    shadow: palette.white
  }
} as const;
