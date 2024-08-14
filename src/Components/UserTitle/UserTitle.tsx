import s from "./UserTitle.module.scss";

interface UserTitleProps {
    login: string;
    name: string;
    created: string;
}

const localDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",

})

const UserTitle = ({ login, name, created }: UserTitleProps) => {

    const date = new Date(created);
    const formattedDate = localDate.format(date);



    return <div className={s.userTitle}>
        <h2>{name}</h2>
        <h3>{login}</h3>
        <span>{formattedDate}</span>

    </div>;
};

export default UserTitle;
