import { useSelector } from "react-redux";
import { useMemo } from "react";
import { NAV_CONFIG, NAV_TYPE_NAMES } from "./config";
import { Link } from "react-router-dom";
import { useLogOut } from "../../hooks";
import styles from "./styles.module.scss";

const NavBar = () => {
  const { isAuth } = useSelector((state) => state.auth);

  const handleLogOut = useLogOut();
  const navItems = useMemo(() => {
    const navType = isAuth ? NAV_TYPE_NAMES.PRIVATE : NAV_TYPE_NAMES.PUBLIC;

    return NAV_CONFIG[navType];
  }, [isAuth]);
  return (
    <div>
      {navItems.map(({ label, path }) => (
        <Link key={path} to={path}>
          <button className={styles.navButton} variant="outlined">
            {label}
          </button>
        </Link>
      ))}
      {isAuth && (
        <button
          className={styles.navButton}
          variant="outlined"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      )}
    </div>
  );
};

export default NavBar;
