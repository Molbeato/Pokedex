import "./Home.css"
import UserNameForm from "../../components/common/home/UserNameForm/UserNameForm"
import { useContext } from "react"
import { UserNameContext } from "../../context/UserNameContext"
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/img/pokedex.png'

const Home = () => {
  const navigate= useNavigate();
  const location= useLocation();
  const from= location.state?.from ?? "/pokedex";

  const { saveUserName }= useContext(UserNameContext);

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate(from);
  }

  return (
    <section className="home_container">
      <div className="img_container">
      <img className="logo-container" src={logo} alt="Pokedex" />
      </div>
      <div className="home-input_container">
        <h1 className="home-tittle">Welcome Trainer!</h1>
        <p className="home-input">Please provide your name to continue</p>
      </div>
      <div className="home_form-conatiner">
      <UserNameForm 
      onNameSend={handleSendName}/>
      </div>
    </section>
  )
}

export default Home