import UserStat from "../UserStat/UserStat";
import s from "./Card.module.scss";

interface CardProps {
    repos: number;
    followers: number;
    following: number;
}

const Card = (props: CardProps) => {
    return (
        <div className={s.userCard}>
            <UserStat
                repos={props.repos}
                followers={props.followers}
                following={props.following}
            />
        </div>
    );
};

export default Card;
