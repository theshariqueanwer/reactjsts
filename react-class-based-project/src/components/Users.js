import React, { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

// React Functional Based Component
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     // setShowUsers((curState) => !curState);
//     setShowUsers(!showUsers);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };
// export default Users;



// React Class Based Component
class Users extends Component {
  constructor() {
    super(); // this is also no need to write
    this.state = {
      showUsers: true,
      more: "let test",
      // moreState: 'Test',  // though this three states are not needed but we can gave it like this if needed
      // nestedState: {},
      // arrayState: []
    };
  }

  // state = {  // we can write state here like this
  //   showUsers: true,
  // };

  componentDidUpdate() {

    // in the javascript we do try and catch and finally like this below
    // try{
    //   someCodeWhichMightFailed(); 
    // } catch(error) {
    //   // handle error
    // }
    // finally {
    //   someCodeWhichMightNeedToBeRunEvenIfThereIsAnExceptionAlso();
    // }

    if(this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // not work this way th update the state
    this.setState(
        // {showUsers: false}
        (curState) => {
          return {
            showUsers: !curState.showUsers
          };
        }
        // {showUsers: !showUsers}
      );
  }

  render() {
      const usersList = (
        <ul>
          {/* {DUMMY_USERS.map((user) => ( */}
          {this.props.users.map((user) => (
            <User key={user.id} name={user.name} />
          ))}
        </ul>
      );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
export default Users;