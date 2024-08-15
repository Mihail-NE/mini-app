import { LocalUser } from "../../types/user";
import UserInfo from "../UserInfo/UserInfo";
import UserStat from "../UserStat/UserStat";
import UserTitle from "../UserTitle/UserTitle";
import s from "./Card.module.scss";

interface CardProps extends LocalUser {
    repos: number;
    followers: number;
    following: number;
}

const Card = (props: CardProps) => {
    return (
        <div className={s.userCard}>
            <img src={props.avatar} className={s.avatar} />
            <UserTitle
                login={props.login}
                name={props.name}
                created={props.created}
            />
            <p className={`${s.bio}${props.bio ? "" : ` ${s.empty}`}`}>
                {props.bio === null ? "This profile has no bio" : props.bio}
            </p>
            <UserStat
                repos={props.repos}
                followers={props.followers}
                following={props.following}
            />
            <UserInfo
                blog={props.blog}
                company={props.company}
                location={props.location}
                twitter={props.twitter}
            />
        </div>
    );
};

export default Card;
