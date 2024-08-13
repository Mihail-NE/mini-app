import s from "./Search.module.scss";
import SearchIcon from "../../assets/icon-search";
import { useRef } from "react";
import Button from "../Button/Button";

interface SearchProps {
    hasError: boolean;
    onSubmit: (tetx: string) => void;
}

const Search = ({ hasError, onSubmit }: SearchProps) => {
    const searchRef = useRef<HTMLInputElement | null>(null);

    const handleubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = searchRef.current ? searchRef.current.value : "";

        if (text) {
            onSubmit(text);
            if (searchRef.current) searchRef.current.value = "";
        }
    };

    return (
        <form onSubmit={handleubmit} autoComplete="off">
            <div className={s.search}>
                <label htmlFor="search" className={s.label}>
                    <SearchIcon className={s.icon} />
                </label>
                <input
                    ref={searchRef}
                    type="text"
                    className={s.textField}
                    id="search"
                    name="username"
                    placeholder="Search GitHub Users
                    "
                />
                {hasError && <div className={s.error}>No result</div>}
                <Button>Search</Button>
            </div>
        </form>
    );
};

export default Search;
