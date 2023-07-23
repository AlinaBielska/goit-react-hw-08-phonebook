import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';
import { selectIsModalShown, selectOpenedContact } from './redux/selectors';
import { useAuth } from '../utils/useAuth';
import { Loader } from './Loader/Loader';
import Private from './Private';
import Public from './Public';
import { SearchAppBar } from './SearchAppBar/SearchAppBar';

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Contacts = lazy(() => import('./pages/Contacts'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isModalShown = useSelector(selectIsModalShown);
  const openedContact = useSelector(selectOpenedContact);
  const { isRefreshing } = useAuth();

  return isRefreshing ? (<Loader />) :
    (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<SearchAppBar />}>
          <Route
            path={`/contacts`}
            element={<Private component={<Contacts />} redirect={'/login'} />}
          />
        </Route>
        <Route path={`/`} element={<Public component={<Home />} />} />
        <Route path={`/login`} element={<Public component={<Home />} />} />
        <Route path={`/register`} element={<Public component={<Register />} />} />
        <Route path="*" element={<Public component={<NotFound />} />} />
      </Routes>
    </Suspense>
  );
};