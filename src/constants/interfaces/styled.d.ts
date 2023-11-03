import 'styled-components';

import type { Theme, ThemeEnum } from './interfaces';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        type: ThemeEnum;
    }
}
