import React from "react";
import s from "./InfoItem.module.scss";

export interface InfoItemProps {
    icon: React.ReactNode;
    text?: string | null;
    isLink?: boolean;
}

const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
    const currentText = text || "Not Available";
    let currentHref = '';

    if (isLink) {
        currentHref = text && text.startsWith("http") ? text : `https${text}`;
    }

    return (
        <div className={`${s.infoItem}${text ? "" : `${s.empty}`}`}>
            {icon}
            <div>
                {isLink && text ? (
                    <a
                    href="currentHref"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.link}
                    >
                        currentText
                    </a>
                ) : currentText}
            </div>
        </div>
    );
};

export default InfoItem;
