import UserFinder from './components/UserFinder';
import Users from './components/Users';
import UsersContext from './context/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {

  const usersContext = {
    users: DUMMY_USERS
  }

  // return (
  //   <div>
  //     {/* <Users /> */}
  //     <UserFinder />
  //   </div>
  // );

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );

}

export default App;
