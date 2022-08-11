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
          Widget 1
        </NavLink>
      </div>

      <div>
        <NavLink to={"/days-left"} className="navlink">
          Widget 2
        </NavLink>
      </div>

      <div>
        <NavLink to={"/widget-3"} className="navlink">
          Widget 3
        </NavLink>
      </div>

      <div>
        <NavLink to={"/widget-4"} className="navlink">
          Widget 4
        </NavLink>
      </div>

      <div>
        <NavLink to={"widget-5/"} className="navlink">
          Widget 5
        </NavLink>
      </div>

      <div>
        <NavLink to={"/widget-6"} className="navlink">
          Widget 6
        </NavLink>
      </div>

      <div>
        <NavLink to={"/widget-7"} className="navlink">
          Widget 7
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;