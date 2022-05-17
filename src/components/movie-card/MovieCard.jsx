import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button, { ButtonFavorite } from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useFavoriteItem } from '../../hooks/useFavoriteItems';
import heartFilled from "../../assets/heart-solid.svg";
import heartEmpty from "../../assets/heart-regular.svg";

const MovieCard = props => {

    const item = props.item;

    const [isFavorite, addToFavorite, removeFromFavorite] = useFavoriteItem(item.id, props.category)

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    const onRemoveFromFavorites = () => {
        removeFromFavorite();
        if (props.removeItem) props.removeItem(item.id);
    }

    return (
        <div>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                <Link to={link}>
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                </Link>
                {
                    isFavorite ? (
                        <ButtonFavorite
                            className="remove"
                            text="Remove From Favorite"
                            svgIcon={heartFilled}
                            onClick={onRemoveFromFavorites}
                        />
                    ) :
                        <ButtonFavorite
                            className="add"
                            text="Add to favorite"
                            svgIcon={heartEmpty}
                            onClick={addToFavorite}
                        />
                }
            </div>
            <h3>{item.title || item.name}</h3>
        </div>
    );
}

export default MovieCard;
