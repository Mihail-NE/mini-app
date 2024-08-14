import s from "./UserStat.module.scss";

interface UserStatProps {
    children: React.ReactNode;
}

const UserStat = ({ children }: UserStatProps) => {
    return <div className={s.userStat}>{children}</div>;
};

export default UserStat;
