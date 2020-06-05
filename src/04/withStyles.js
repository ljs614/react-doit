import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aproditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme);
ThemedStyleSheet.registerInterface(aproditeInterface);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;
