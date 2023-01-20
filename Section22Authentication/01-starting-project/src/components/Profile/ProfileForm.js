import { useRef } from 'react';
import classes from './ProfileForm.module.css';
import { API_KEY } from '../../key/ApiKey';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordInputRef = useRef()
  const authCtx = useContext(AuthContext)
  
  function submitHandler(ev) {
    ev.preventDefault()

    const enteredNewPass = newPasswordInputRef.current.value

    //TODO add validation
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken:authCtx.token,
        password: enteredNewPass,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( res => {
      //asumption: Always succeeds!
      
    })
    
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
