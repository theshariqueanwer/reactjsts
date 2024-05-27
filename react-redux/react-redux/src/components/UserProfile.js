import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  const email = useSelector(state => state.auth.email);
  return (
    <main className={classes.profile}>
      <h1>My User Profile</h1>
      <h2>Hello and Welcome <span style={{textTransform: 'uppercase'}} >{email}</span></h2>
    </main>
  );
};

export default UserProfile;
