import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../modules/SearchInput.module.scss";
import { useNavigate } from 'react-router';
import search from "../assets/search-icon.svg";

const SearchInput = ({ onSelect, value }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        setSearchTerm(value);
    }, [value]);

    useEffect(() => {

        if (!searchTerm) {
            setSuggestions([]);
            setHasSearched(false);
            return;
        }

        axios.get("http://localhost:5000/products/all")
            .then(res => {
                const filtered = res.data.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSuggestions(filtered.slice(0, 3));

                if (hasSearched && filtered.length === 0) {
                    navigate(`/searchresults?query=${encodeURIComponent(searchTerm.trim())}`);
                }
            })
            .catch(err => {
                console.error(err);
                setSuggestions([]);
            });
    }, [searchTerm, hasSearched, navigate]);

    const handleChange = (e) => {
        const newTerm = e.target.value;
        setSearchTerm(newTerm);
        setHasSearched(true);
        onSelect(newTerm);
    };

    const handleSelect = (name) => {
        setSearchTerm(name);
        setSuggestions([]);
        onSelect(name);
        navigate(`/searchresults?query=${encodeURIComponent(name.trim())}`);
    };

    const handleShowMore = () => {
        if (searchTerm.trim()) {
            setSuggestions([]);
            navigate(`/searchresults?query=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    return (

            <div className={classes['search-dropdown-wrapper']}>
                <img src={search} alt="search-icon"/>
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
                            <li key={item.id} onClick={() => handleSelect(item.name)}>
                                {item.name}
                            </li>
                        ))}
                        <li className={classes['show-more']} onClick={handleShowMore}>
                            <p>Show More </p>
                        </li>
                    </ul>
                )}
            </div>
    );
};

export default SearchInput;
