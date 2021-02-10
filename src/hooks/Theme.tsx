import React, {createContext, useContext} from 'react';

import light from '../styles/Theme/light';

interface IThemeContext{
    theme: ITheme;
}

interface ITheme{
    title: string;

    colors:{
        primary: string,
        secundary: string,
        tertiary: string,
            
        purple: string,
        orange: string,
        orangeSsecundary: string, 
        
        white:string
    }
}
 
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) =>{
    const theme = light;

    return(
        <ThemeContext.Provider value={{ theme}}>
            {children}
        </ThemeContext.Provider>
    )
}


function useTheme(): IThemeContext{
    const context = useContext(ThemeContext);

    return context;
}

export {ThemeProvider, useTheme};


