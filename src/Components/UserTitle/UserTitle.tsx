import s from "./UserTitle.module.scss";

interface UserTitleProps {
    login: string;
    name: string;
    created: string;
}

const UserTitle = ({ login, name, created }: UserTitleProps) => {
    return <div className={s.container}>

    </div>;
};

export default UserTitle;
