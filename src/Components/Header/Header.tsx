import Theme from "../Theme/Theme";
import s from "./Header.module.scss";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>Finder</div>
            <Theme />
        </div>
    );
};

export default Header;
