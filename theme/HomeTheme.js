import { DefaultTheme as NavDefaultTheme, DarkTheme as NavDarkTheme } from '@react-navigation/native';
import { DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';

const CustomDefaultTheme = {
    ...NavDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: '#ffffff',
        text: '#333333'
    }
}

const CustomDarkTheme = {
    ...NavDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: '#333333',
        text: '#ffffff'
    }
}

export default homeTheme = isDarkTheme => {
    return isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
}