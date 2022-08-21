import { FC, useState } from "react";
import "./NavbarMobile.css";
import { Link } from "react-router-dom";

const NavbarMobile: FC = () => {
  return (
    <div className="navbar-mobile hidden">
      <div className="navbar-mobile-item">
        <svg
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.9966 13.3138C24.8347 19.3045 19.6537 24.6799 13.6633 25.0037C12.4975 25.0685 11.3966 24.9714 10.328 24.7123C10.1337 24.6799 9.97181 24.7123 9.80991 24.8094L5.53561 27.5619C5.08228 27.8534 4.46704 27.4972 4.49942 26.979L4.6937 21.9922C4.6937 21.7979 4.62894 21.6036 4.49942 21.4741C2.26513 19.2397 0.937503 16.131 1.00227 12.7309C1.13179 6.57831 6.44228 1.20288 12.5947 1.00859C19.4918 0.749533 25.1585 6.38402 24.9966 13.3138Z"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.3335 9.2015V11.9743C6.3335 12.5662 6.78804 13.0647 7.3941 13.0647C8.30319 13.0647 8.78804 14.1551 8.18198 14.8405C7.93956 15.0897 7.66683 15.339 7.30319 15.5571C6.81834 15.8375 6.66683 16.5229 6.93956 17.0213L7.15168 17.364C7.45471 17.8937 8.15168 18.0494 8.63653 17.7067C9.81835 16.8967 11.6668 15.1832 11.6668 12.6908V9.2015C11.6668 8.60956 11.2123 8.11108 10.6062 8.11108H7.3638C6.78804 8.14224 6.3335 8.60956 6.3335 9.2015Z"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.3335 9.2015V11.9743C14.3335 12.5662 14.7855 13.0647 15.3881 13.0647C16.2921 13.0647 16.7742 14.1551 16.1715 14.8405C15.9305 15.0897 15.6593 15.339 15.2977 15.5571C14.8156 15.8375 14.6649 16.5229 14.9361 17.0213L15.1471 17.364C15.4484 17.8937 16.1414 18.0494 16.6235 17.7067C17.7987 16.8656 19.6668 15.152 19.6668 12.6908V9.2015C19.6668 8.60956 19.2149 8.11108 18.6122 8.11108H15.3881C14.8156 8.14224 14.3335 8.60956 14.3335 9.2015Z"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Link style={{ textDecoration: "none" }} to="/quotes">
          <a className="nav-link">цитаты</a>
        </Link>
      </div>
      <div className="separator"></div>
      <div className="navbar-mobile-item">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.481 13.101C23.0133 13.101 25.0894 11.0612 25.0894 8.5228C25.0894 5.98438 23.0361 3.94458 20.481 3.94458"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.69775 13.1008C3.16542 13.1008 1.08936 15.1406 1.08936 17.679C1.08936 20.2175 3.1426 22.2573 5.69775 22.2573"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.79331 13.1008H5.69824"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.4809 13.1008H19.4771"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.4816 3.94458H7.08984"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.69824 22.2349H19.2953"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.21488 6.80031C5.80244 6.80031 7.08942 5.52176 7.08942 3.94459C7.08942 2.36742 5.80244 1.08887 4.21488 1.08887C2.62731 1.08887 1.34033 2.36742 1.34033 3.94459C1.34033 5.52176 2.62731 6.80031 4.21488 6.80031Z"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.1352 19.379C16.6379 19.379 19.4775 16.5581 19.4775 13.0783C19.4775 9.59852 16.6379 6.77759 13.1352 6.77759C9.63249 6.77759 6.79297 9.59852 6.79297 13.0783C6.79297 16.5581 9.63249 19.379 13.1352 19.379Z"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.1695 25.0903C23.757 25.0903 25.044 23.8118 25.044 22.2346C25.044 20.6575 23.757 19.3789 22.1695 19.3789C20.5819 19.3789 19.2949 20.6575 19.2949 22.2346C19.2949 23.8118 20.5819 25.0903 22.1695 25.0903Z"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6479 13.849H13.5453V10.1094"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Link style={{ textDecoration: "none" }} to="/timeline">
          <a className="nav-link">таймлайн</a>
        </Link>
      </div>
      <div className="separator"></div>
      <div className="navbar-mobile-item">
        <svg
          width="26"
          height="23"
          viewBox="0 0 26 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3248 11.565L4.96289 6.23401L13.3248 1.09888L21.7075 6.23401L13.3248 11.565Z"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.7074 6.23413V16.3738L13.3247 21.7918V11.5651"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.96289 6.23413V16.3738L13.3248 21.7918"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.7075 12.7618C24.1411 15.177 25.618 17.7228 24.9316 19.0066C23.7459 21.1607 17.4849 19.7246 10.9535 15.7863C4.42204 11.8479 0.0954888 6.88682 1.30193 4.71091C2.00916 3.42713 4.52605 3.40537 7.83336 4.47156"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <Link style={{ textDecoration: "none" }} to="/gamesaves">
          <a className="nav-link">сейвы</a>
        </Link>
      </div>
      <div className="separator"></div>
      <div className="navbar-mobile-item">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8401 13.7948V17.0477C13.8401 18.067 13.0684 18.8694 12.1252 18.8694H2.71487C1.77169 18.8694 1 18.0453 1 17.0477V2.82163C1 1.80239 1.77169 1 2.71487 1H12.1252C13.0684 1 13.8401 1.82407 13.8401 2.82163V5.85769"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.40918 9.93481H20.9995"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5059 5.61914L20.9999 9.93468L17.5059 14.2285"
            stroke="#8B8B8D"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <Link style={{ textDecoration: "none" }} to="/gamesaves">
          <a className="nav-link">logout</a>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMobile;
