import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesList }) => (
  <div className="movies">
    {moviesList.map(movieItem => (
      <div className="card" key={movieItem.imdbId}>
        <MovieCard {...movieItem} />
      </div>
    ))}

  </div>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  moviesList: [],
};
