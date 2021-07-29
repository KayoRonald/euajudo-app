import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Foundational style overrides
import colors from './foundations/colors';
import radii from './foundations/radii';
import {
  fonts, fontSizes, fontWeights,
} from './foundations/fonts';

const theme = extendTheme({
  styles,
  colors,
  fonts,
  fontWeights,
  fontSizes,
  radii,
});

export default theme;
