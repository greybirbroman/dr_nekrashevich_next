import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#06b6d4',
    },
    secondary: {
      main: '#11cb5f',
    },
    maps: {
      main: '#FFF',
    },
  },
});

const MUILinksBar = ({ onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <ul className='flex gap-2 flex-wrap'>
        <li>
          <Button
            target='_blank'
            rel='noreferrer'
            href='https://api.whatsapp.com/send?phone=79215863777'
            variant='outlined'
            color='secondary'
          >
            whatsapp
          </Button>
        </li>
        <li>
          <Button
            target='_blank'
            rel='noreferrer'
            href='https://t.me/+79215863777'
            variant='outlined'
          >
            telegram
          </Button>
        </li>
        <li>
          <Button variant='outlined' color='maps' onClick={onClick}>
            Яндекс.Карта
          </Button>
        </li>
      </ul>
    </ThemeProvider>
  );
};

export default MUILinksBar;
