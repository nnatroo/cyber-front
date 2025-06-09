import { useState, useEffect } from "react";
import axios from "axios";
import classes from "../modules/SearchDropdown.module.scss";

const SearchDropdown = ({ onSelect, value }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setSearchTerm(value);
    }, [value]);

    useEffect(() => {
        if (!searchTerm) {
            setSuggestions([]);
            return;
        }

        axios.get("http://localhost:5000/products/all")
            .then(res => {
                const filtered = res.data.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSuggestions(filtered.slice(0, 5));
            })
            .catch(err => {
                console.error(err);
                setSuggestions([]);
            });
    }, [searchTerm]);

    const handleChange = (e) => {
        const newTerm = e.target.value;
        setSearchTerm(newTerm);
        onSelect(newTerm);
    };

    const handleSelect = (name) => {
        setSearchTerm(name);
        setSuggestions([]);
        onSelect(name);
    };


    return (
        <div className={classes['search-dropdown-wrapper']}>
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
                className={classes['input']}
                value={searchTerm || ""}
            />
            {suggestions.length > 0 && (
                <ul className={classes['dropdown']}>
                    {suggestions.map(item => (
                        <li key={item.id}
                            onClick={() => handleSelect(item.name)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchDropdown;
