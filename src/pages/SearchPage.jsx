import React from 'react';
import { Link } from 'react-router-dom';
import response from '../response';
import { useStateValue } from '../StateProvider';
import Search from "../components/Search"
import useGoogleSearch from '../useGoogleSearch';
import "./SearchPage.css"
import SearchIcon from '@mui/icons-material/Search';
import { Description, Image, LocalOffer, MoreVert, Room } from '@mui/icons-material';

const Searchpage = () => {
    const [{ term }, dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)

    // const data = response

    return (
        <div className='searchPage'>
            <div className="row">

                <div className="searchPage__header">
                    <Link to="/">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" className="searchPage__logo" />
                    </Link>
                    <div className="searchPage__headerBody">
                        <Search hideButtons={true} />
                        <div className="searchPage__options">
                            <div className="searchPage__optionsLeft">
                                <div className="searchPage__option">
                                    <SearchIcon />
                                    <Link to="/all">
                                        All
                                    </Link>
                                </div>
                                <div className="searchPage__option">
                                    <Description />
                                    <Link to="/news">
                                        News
                                    </Link>
                                </div>
                                <div className="searchPage__option">
                                    <Image />
                                    <Link to="/images">
                                        Images
                                    </Link>
                                </div>
                                <div className="searchPage__option">
                                    <LocalOffer />
                                    <Link to="/shopping">
                                        Shopping
                                    </Link>
                                </div>
                                <div className="searchPage__option">
                                    <Room />
                                    <Link to="/maps">
                                        Maps
                                    </Link>
                                </div>
                                <div className="searchPage__option">
                                    <MoreVert />
                                    <Link to="/more">
                                        More
                                    </Link>
                                </div>
                            </div>
                            <div className="searchPage__optionsRight">
                                <div className="searchPage__option">
                                    <Link to="/settings">
                                        Settings
                                    </Link>
                                </div>
                                <div className="searchPage__option">
                                    <Link to="/tools">
                                        Tools
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.
                            formattedTotalResults} results ({data?.searchInformation.
                                formattedSearchTime} seconds)
                        for {term}
                    </p>

                    {
                        data?.items.map(item => (
                            <div className="searchPage__result">
                                <a href={item.link} className="item__link">
                                    {item.pagemap?.cse_image?.
                                        length > 0 && item.pagemap?.cse_image[0].src &&
                                        <img src={item.pagemap?.cse_image[0].src} alt="" className="searchPage__resultImage" />
                                    }
                                    {item.displayLink}
                                </a>
                                <a href={item.link} className="searchPage__resultTitle">
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="searchPage__resultSnippet">
                                    {item.snippet}
                                </p>
                            </div>
                        ))
                    }
                </div>
            )}

        </div>
    );
}

export default Searchpage;
