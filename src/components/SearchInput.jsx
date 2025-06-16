import React, {useEffect, useState} from "react";
import axios from "axios";
import classes from "../modules/SearchInput.module.scss";
import {Link, useNavigate} from 'react-router';
import search from "../assets/search-icon.svg";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/products/all")
            .then(res => {
                const filtered = res.data.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSearchResults(filtered);
            })
            .catch(err => {
                console.error(err);
            });
    }, [searchTerm]);

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
        if (window.location.href.split('/')[3] === 'searchresults') {
            navigate('/searchresults/' + encodeURIComponent(e.target.value.trim()));
        }
    };

    return (
        <div className={classes['search-dropdown-wrapper']}>
            <img src={search} alt="search-icon"/>
            <input
                type="text"
                placeholder="Search"
                onChange={handleSearchInputChange}
                className={classes['input']}
                value={searchTerm || ""}
            />
            {(searchResults.length > 0 && searchTerm.length > 0 && window.location.href.split('/')[3] !== 'searchresults') && (
                <ul className={classes['dropdown']}>
                    {searchResults.map(item => (
                        <Link key={item.id} to={`/products/${item.id}`}>
                            <li key={item.id}>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                    <Link to={`/searchresults/${encodeURIComponent(searchTerm.trim())}`}>
                        <li className={classes['show-more']}>
                            <p>Show More </p>
                        </li>
                    </Link>
                </ul>
            )}
        </div>
    );
};

export default SearchInput;
