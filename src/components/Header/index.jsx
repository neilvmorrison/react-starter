import { createUseStyles } from 'react-jss';

import Link from '../Link';
import Typography from '../Typography';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    borderBottom: '1px solid #dfdfdf',
    padding: `0px ${theme.spacing(2)}px`,
  },
  link: {
    background: theme.palette.secondary.main,
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#000',
    borderRadius: theme.shape.radius,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Typography component='h1'>React Starter</Typography>
      <nav>
        <Link
          external
          href='https://github.com/neilvmorrison/react-starter'
          color='secondary'
        >
          Link to Repo
        </Link>
      </nav>
    </header>
  );
};

export default Header;
