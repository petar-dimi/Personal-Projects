// src/components/FilmCard.jsx
import React from 'react';

const FilmCard = ({ film, formatReleaseDate }) => {
  return (
    <div className="film-card">
      <h3>{film.title}</h3>
      <p><strong>Episode ID:</strong> {film.id}</p>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Release Date:</strong> {formatReleaseDate(film.releaseDate)}</p>
      <p><strong>Producers:</strong> {film.producers.join(', ')}</p>
    </div>
  );
};

export default FilmCard;
