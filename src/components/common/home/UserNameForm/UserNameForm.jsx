import "./UserNameForm.css"
import { useRef, useState } from "react"

const UserNameForm = ({onNameSend}) => {
    const [userNameValue, setUserNameValue] = useState('');
    const [nameError, setNameError] = useState('')
    const hasInputAlreadyTouched = useRef(false)

    const handleChange = (e) => {
        const nameValue= e.target.value;

        if(!hasInputAlreadyTouched.current) hasInputAlreadyTouched.current = true;

        if (!nameValue) {
            setNameError('Please provide your name to continue')
        } else if (!/[a-z ]/i.test(nameValue)) {
            setNameError('Only letters are allowed')
        } else if (!/^[a-z]{2,} ?$/i.test(nameValue)) {
            setNameError('Your name must be at least 2 characters long')
        } else setNameError('')

        setUserNameValue(nameValue);
    };

    const handleSubmit = (e) => {  
        e.preventDefault();

        if (!nameError && hasInputAlreadyTouched.current) {
            onNameSend(userNameValue);}
    }

  return (
    <form onSubmit={handleSubmit}>
        {Boolean (nameError) && <p className="name-error">{nameError}</p>}
        <input className="input-name"
        type="text"
        placeholder="Your name"
        value={userNameValue}
        onChange={handleChange}
        />
        <button className="home-begin_btn" type="submit">Begin</button>
    </form>
  )
}

export default UserNameForm