import type { CSSProp } from 'styled-components';

import defaultTheme from '@/styles/defaultTheme';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {

  }
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp<T>;
  }
}
