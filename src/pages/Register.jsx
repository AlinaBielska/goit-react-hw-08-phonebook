import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    dispatch(
      register({
        name: data.get('userName'),
        email: data.get('email'),
        password: data.get('password'),
      })
    );

    form.reset();
  };

  return (
    <>
        <h1>Welcome to Phonebook App</h1>
              <p>Register</p>
              <form onSubmit={handleSubmit}>
                    <input
                      autoComplete="given-name"
                      name="userName"
                      required
                      fullWidth
                      id="userName"
                      label="Name"
                      title="Username must have at least 7 characters"
                      pattern=".{7,}"
                      autoFocus
                    />
                    <input
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      title="E-mail address must be at least 7 characters"
                      pattern=".{7,}"
                      name="email"
                      autoComplete="email"
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
                      autoComplete="off"
                    />
                <button type="submit" fullWidth variant="contained">
                  Register
                </button>
                    <a href="#/login">
                      Already have an account? Sign in
                    </a>
              </form>
    </>
  );
};
export default SignUp;