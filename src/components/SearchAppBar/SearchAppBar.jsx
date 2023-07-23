import { Button, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaAddressCard } from 'react-icons/fa';
import { logOut } from '../../redux/auth/operations';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { setFilterValue } from '../../redux/filterSlice';
import UserMenu from '../UserMenu/UserMenu';
import css from './SearchAppBar.module.css';

export const SearchAppBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contactsList = useSelector(selectContacts);
  const contactsAmount = contactsList.length;

  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilterValue(value));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <FaAddressCard
              size="4em"
              style={{
                marginRight: '15px',
              }}
            />
            <Box sx={{ marginRight: 'auto', display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="h5" noWrap component="div">
                Phonebook
              </Typography>
              <Typography variant="h7" noWrap>
                {contactsAmount === 0
                  ? 'You Have No Contacts'
                  : contactsAmount === 1
                  ? 'You Have Only One Contact'
                  : `You Have ${contactsAmount} Contacts`}
              </Typography>
            </Box>
            <UserMenu />
            <Button
              sx={{ display: { xs: 'none', md: 'flex' } }}
              className={css.button}
              variant="contained"
              type="button"
              id="desktop"
              endIcon={<ExitToAppIcon />}
              onClick={() => dispatch(logOut())}
            >
              Log Out
            </Button>
            <Button
              sx={{
                display: { xs: 'flex', md: 'none' },
                paddingBlock: '10px',
                paddingRight: '26px',
              }}
              className={css.button}
              variant="contained"
              type="button"
              id="mobile"
              endIcon={<ExitToAppIcon viewBox="3 3 18 18" />}
              onClick={() => dispatch(logOut())}
            ></Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};