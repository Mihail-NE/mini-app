import s from "./UserInfo.module.scss";
import InfoItem, { InfoItemProps } from "../InfoItem/InfoItem";
import IconLocation from "../../assets/Iconlocation";
import IconWebsite from "./../../assets/IconWebsite";
import IconTwitter from "../../assets/IconTwitter";
import IconCompany from "./../../assets/IconCompany";

interface UserInfoProps {
    blog: string;
    company: string;
    location: string;
    twitter: string;
}

const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
    const items: InfoItemProps[] = [
        {
            icon: <IconLocation />,
            text: location,
        },
        {
            icon: <IconWebsite />,
            text: blog,
        },
        {
            icon: <IconWebsite />,
            text: blog,
            isLink: true,
        },
        {
            icon: <IconTwitter />,
            text: twitter,
        },
        {
            icon: <IconCompany />,
            text: company,
        },
    ];
    return (
        <div className={s.userInfo}>
            {items.map((item, index) => (
                <InfoItem {...item} key={index} />
            ))}
        </div>
    );
};

export default UserInfo;
