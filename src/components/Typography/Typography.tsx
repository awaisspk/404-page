import {styled, css} from '@stitches';

const text = css({
  color: '$gray12',

  variants: {
    size: {
      1: {fontSize: '$1'},
      2: {fontSize: '$2'},
      3: {fontSize: '$3'},
      4: {fontSize: '$4'},
      5: {fontSize: '$5'},
      6: {fontSize: '$6'},
      7: {fontSize: '$7'},
      8: {fontSize: '$8'},
      9: {fontSize: '$9'},
    },
    // other variants like color, weight, style, line-height etc.
  },
});

export const Text = styled('span', text);
export const Paragraph = styled('p', text);
export const H1 = styled('h1', text);
export const H2 = styled('h2', text);

export const Title = styled('h1', {
  fontSize: '$5',
});
