import { useState, useEffect } from "react";
import s from "./Theme.module.scss";
import MoonIcon from '../../assets/icon-moon';
import SunIcon from "../../assets/icon-sun";

const Theme = () => {
    const [isDark, setIsDark] = useState(false);
    const text = isDark ? "Dark" : "Light";
    const ThemeIcon = isDark ? SunIcon : MoonIcon;

    const changeTheme = () => {
        setIsDark((prev) => !prev);
    };

    useEffect(() => {
        document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <div className={s.theme} onClick={changeTheme}>
            <span>{text}</span>
            <ThemeIcon className={s.icon}/>

        </div>
    );
};

export default Theme;
