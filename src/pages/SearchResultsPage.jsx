import { useSearchParams } from "react-router";
import {SearchResults} from "../components/SearchResults.jsx";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

const SearchResultPage = () => {
    const [params] = useSearchParams();
    const searchTerm = params.get("query") || "";
    return (
        <>
            <Header />
            <SearchResults searchTerm={searchTerm} />
            <Footer />
        </>
    );
};

export default SearchResultPage;
