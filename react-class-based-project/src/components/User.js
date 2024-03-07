import { Component } from 'react';
import classes from './User.module.css';

// React Functional Based Component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };
// export default User;



// React Class Based Component
class User extends Component {
  componentWillUnmount() {
    console.log("user will unmount");
  }
  render() {
    return (
      <li className={classes.user}>{this.props.name}</li>
    );
  }
}
export default User;
