import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <NavLink exact to={"/"} className="navlink">
          Home
        </NavLink>
      </div>

      <div>
        <NavLink to={"/motivational-poster"} className="navlink">
          Motivational Poster
        </NavLink>
      </div>

      <div>
        <NavLink to={"/weeks-left"} className="navlink">
          Weeks Left
        </NavLink>
      </div>

      <div>
        <NavLink to={"/box-shadow"} className="navlink">
          Box Shadow
        </NavLink>
      </div>

      <div>
        <NavLink to={"/hangman"} className="navlink">
          Hangman
        </NavLink>
      </div>

      <div>
        <NavLink to={"/message-scroller"} className="navlink">
          Message Scroller
        </NavLink>
      </div>

      <div>
        <NavLink to={"/analogue-clock"} className="navlink">
          Analogue Clock
        </NavLink>
      </div>

      <div>
        <NavLink to={"/piano"} className="navlink">
          Piano
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
