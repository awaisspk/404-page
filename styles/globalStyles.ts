import {globalCss} from '@stitches';

export const globalStyles = globalCss({
  '@import': ['global.css'],

  '@font-face ': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'fallback',
    src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
  },

  html: {
    font: '100%/1.25 $fonts$primary',
    boxSizing: 'border-box',
  },

  '*, ::before, ::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
    WebkitTapHighlightColor: 'transparent',
  },

  a: {
    textDecoration: 'none',
  },

  img: {
    maxWidth: '100%',
  },

  'h1, h2, h3, h4,li,p': {
    overflowWrap: 'break-word',
    WebkitHyphens: 'auto',
    hyphens: 'auto',
  },
});
