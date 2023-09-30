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

const links = [
  {
    href: 'https://api.whatsapp.com/send?phone=79215863777',
    color: 'secondary',
    title: 'whatsapp',
  },
  {
    href: 'https://t.me/+79215863777',
    title: 'telegram',
  },
  {
    color: 'maps',
    title: 'Яндекс.Карта',
  },
];

const MUILinksBar = ({ onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <ul className='flex gap-2 flex-wrap pt-2'>
        {links.map((link, index) => (
          <li key={index}>
            <Button
              target='_blank'
              rel='noreferrer'
              href={link.href}
              variant='outlined'
              color={link.color}
              onClick={index === links.length - 1 ? onClick : null}
            >
              {link.title}
            </Button>
          </li>
        ))}
      </ul>
    </ThemeProvider>
  );
};

export default MUILinksBar;
