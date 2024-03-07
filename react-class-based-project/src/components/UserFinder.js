import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../context/users-context';
import ErrorBoundary from './ErrorBoundary';


// This will going to use from context api through the class based component
// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

// This is functional Component
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };
// export default UserFinder;




// This is Class Component
class UserFinder extends Component {
    static contextType = UsersContext;
    constructor() {
        super();
        this.state = {
            // filteredUsers: DUMMY_USERS,
            filteredUsers: [],
            searchTerm: '',
        }
    }

    componentDidMount() {
        // sending http request... to server
        // and handling all these and update the state accordingly like below
        this.setState({
            // filteredUsers: DUMMY_USERS
            filteredUsers: this.context.users
        })
    }

    componentDidUpdate(prevProps, PrevState) {
        if(PrevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                // filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
          <Fragment>
            <div className={classes.finder}>
              <input
                type="search"
                onChange={this.searchChangeHandler.bind(this)}
              />
            </div>
            {/* <Users users={this.state.filteredUsers} /> */}
            <ErrorBoundary>
              <Users users={this.state.filteredUsers} />
            </ErrorBoundary>
          </Fragment>

          // This is the alternative way to that
          // <Fragment>
          //     <UsersContext.Consumer>
          //     <div className={classes.finder}>
          //         <input
          //         type="search"
          //         onChange={this.searchChangeHandler.bind(this)}
          //         />
          //     </div>
          //     <Users users={this.state.filteredUsers} />
          //     </UsersContext.Consumer>
          // </Fragment>
        );
    }
}
export default UserFinder;