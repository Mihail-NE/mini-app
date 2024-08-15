import s from "./UserInfo.module.scss";
import { InfoItemProps } from "../InfoItem/InfoItem";


interface UserInfoProps {
    blog: string;
    company: string;
    location: string;
    twitter: string;
}

const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
    const items: InfoItemProps[] = [
        {
            icon: "blog",
        }
    ]
    return <div className={s.userInfo}>

    </div>;
};

export default UserInfo;
