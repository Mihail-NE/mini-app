import s from "./Search.module.scss";
import SearchIcon from "../../assets/icon-search";

import Button from "../Button/Button";

interface SearchProps {
    hasError: boolean;
    onSubmit: (tetx: string) => void;
}


const Search = ({ hasError, onSubmit }: SearchProps) => {

    const handleubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const text = (e.target as HTMLFormElement).search.value;
        console.log(text);
        if (text) {
           onSubmit(text);
           (e.target as HTMLFormElement).search.value = "";

        }
    }

    return (
        <form onSubmit={handleubmit} autoComplete="off">
            <div className={s.search}>
                <label htmlFor="search" className={s.label}>
                    <SearchIcon className={s.icon} />
                </label>
                <input
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
