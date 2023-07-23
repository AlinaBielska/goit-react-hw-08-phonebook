import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';

const Home = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    dispatch(
      logIn({
        email: data.get('email'),
        password: data.get('password'),
      })
    );

    form.reset();
  };

  return (
    <div>
      <h1>Welcome to Phonebook App</h1>
        <div>
          <div>
            <h2>Sign In</h2>
            <form validate="true" onSubmit={handleSubmit}>
              <input
                required
                fullWidth
                id="email"
                label="Email Address"
                title="Username must have at least 7 characters"
                pattern=".{7,}"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <input
                required
                fullWidth
                name="password"
                label="Password"
                title="Password must be at least 7 characters"
                pattern=".{7,}"
                type="password"
                id="password"
                autoComplete="password"
              />
              <button type="submit" fullWidth>
                Sign In
              </button>
                  <a href="#/register">
                    Don't have an account? Register
                  </a>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Home;