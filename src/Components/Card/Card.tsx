import s from "./Card.module.scss";

interface CardProps {
    children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
    return <div className={s.card}>{children}</div>;
};

export default Card;
