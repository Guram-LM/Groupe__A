import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark', // თუ გინდა მუქი ფონი მთლიანად
    background: {
      default: '#121212',  // Body-ს მუქი ფონი
    },
    text: {
      primary: '#DAA520',  // ოქროსფერი ტექსტი მთელ body-ზე
    },
  },
})



