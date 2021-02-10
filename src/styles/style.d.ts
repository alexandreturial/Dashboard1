import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string,
    
        colors:{
            primary: string,
            secundary: string,
            tertiary: string,
            
            purple: string,
            orange: string,
            orangeSsecundary: string,
            
            white:string
        },    
    }
}