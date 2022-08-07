import { FC } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Navbar: FC = () => {
  const reduxStore = useSelector<RootState>((state) => state.googleUser);

  if (reduxStore === null) {
    return <></>;
  }

  return (
    <nav>
      <Link to="/">
        <div className="logo" />
      </Link>
      <div className="navbar-buttons">
        <div className="separator" />
        <Link style={{ textDecoration: "none" }} to="/quotes">
          <a className="nav-link">цитаты</a>
        </Link>
        <div className="separator" />
        <Link style={{ textDecoration: "none" }} to="/timeline">
          <a className="nav-link">таймлайн</a>
        </Link>
        <div className="separator" />
        <Link style={{ textDecoration: "none" }} to="/gamesaves">
          <a className="nav-link">сейвы</a>
        </Link>
        <div className="separator" />
      </div>
      <LoginButton />
    </nav>

    // <Styled.Nav>
    // <Link to="/">
    //     <Styled.Logo/>
    // </Link>
    // <Styled.NavbarButtons>
    //     <Styled.Separator />
    //     <Link to="/quotes">
    //         <Styled.NavLink>цитаты</Styled.NavLink>
    //     </Link>
    //     <Styled.Separator />
    //     <Link to="/timeline">
    //         <Styled.NavLink>таймлайн</Styled.NavLink>
    //     </Link>
    //     <Styled.Separator />
    //     <Link to="/gamesaves">
    //         <Styled.NavLink>сейвы</Styled.NavLink>
    //     </Link>
    //     <Styled.Separator />
    // </Styled.NavbarButtons>
    // <LoginButton/>
    // </Styled.Nav>
  );
};
export default Navbar;
