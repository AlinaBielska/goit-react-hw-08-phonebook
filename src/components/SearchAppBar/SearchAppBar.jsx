import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectFilter } from '../../redux/selectors';
import { setFilterValue } from '../../redux/filterSlice';
import Menu from '../Menu/Menu';

export const SearchAppBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilterValue(value));
  };

  return (
    <div>
      <div position="static">
        <div>
          <div>
            <div>
              <p>Phonebook</p>
            </div>
              <input
                placeholder="Find Contact by name"
                onChange={handleChange}
                autoComplete="off"
                type="text"
                name="filter"
                value={filter}
              />
            <Menu />
            <button
              type="button"
              id="desktop"
              onClick={() => dispatch(logOut())}
            >
              Log Out
            </button>
            <button
              type="button"
              id="mobile"
              onClick={() => dispatch(logOut())}
            ></button>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};