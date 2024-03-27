import { useState } from "react";

export default function SignUp() {

  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        // const enteredEmail = fd.get('email');
        // const enteredPassword = fd.get('password');
        // console.log(enteredEmail + ' ' + enteredPassword);
        const acquisitionChannel = fd.getAll('acquisition');
        const data = Object.fromEntries(fd.entries());
        data.acquisition = acquisitionChannel
        // console.log(data);

        // if(data.password !== data.confirm-password') { // because confirm-password is two words so we need to use below one
        //   setPasswordAreNotEqual(true);
        //   return;
        // }

        if(data.password !== data['confirm-password']) {
          setPasswordAreNotEqual(true);
          return;
        }
        console.log(data);
        setPasswordAreNotEqual(false);

        event.target.reset();

    }

    function handleCheckLength(event) {
      if(event.target.value.length === event.target.minLength && event.target.value.length === event.target.maxLength) {
        event.stopPropagation();
        event.preventDefault();
        return false;
     }
     return true;
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={4}
            maxLength={12}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            minLength={4}
            maxLength={12}
          />
          <div className="control-error">
            {/* {passwordAreNotEqual && <p>passwords are must match.</p>} */}
            {passwordAreNotEqual && <p>password and confirm-password are not matched.</p>}
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>

        {/* <div className="control">
          <label htmlFor="mobile">Mobile</label>
          <input type="number" id="mobile" name="mobile" required minLength={10} maxLength={13} />
        </div> */}

        <div className="control">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            required
            minLength={10}
            maxLength={10}
            onKeyDown={(event) => handleCheckLength(event)}
          />
        </div>
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>

        <div className="control">
          <label htmlFor="country">Country</label>
          <input type="text" id="" name="country" required />
        </div>
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role" required>
            <option value="select">Select</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>

        <fieldset className="control-column">
          <legend>Gender?</legend>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>

          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </fieldset>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            required
          />
          I agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
