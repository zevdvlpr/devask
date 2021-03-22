import 'styled-componets';

import { ColorsType } from '../config/colors';

declare module 'styled-components' {
  export interface DefaultTheme extends ColorsType {}
}
