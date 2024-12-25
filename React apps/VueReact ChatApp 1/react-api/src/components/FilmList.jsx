// src/components/FilmList.jsx
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FILMS } from '../queries';
import FilmCard from './FilmCard';
import Filter from './Filter';

const FilmList = () => {
  const [director, setDirector] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [sortField, setSortField] = useState('title'); // Default sorting by Title
  const [sortOrder, setSortOrder] = useState('asc');   // Default ascending order
  const [skip, setSkip] = useState(0);  // Pagination offset
  const limit = 10;  // Number of items per page

  const { data, loading, error, fetchMore } = useQuery(GET_FILMS, {
    variables: { director, releaseYear: releaseYear ? parseInt(releaseYear) : null, skip, limit },
  });

  const loadMore = () => {
    fetchMore({
      variables: { skip: data.allFilms.length },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          allFilms: [...prev.allFilms, ...fetchMoreResult.allFilms],
        };
      },
    });
  };

  // Sorting films by the chosen field and order
  const sortedFilms = data?.allFilms.sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (sortField === 'releaseDate') {
      const dateA = new Date(aValue);
      const dateB = new Date(bValue);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    }

    return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const formatReleaseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div>
      <Filter
        setDirector={setDirector}
        setReleaseYear={setReleaseYear}
        setSortField={setSortField}
        setSortOrder={setSortOrder}
      />
      <div className="film-list">
        {sortedFilms.map((film) => (
          <FilmCard key={film.id} film={film} formatReleaseDate={formatReleaseDate} />
        ))}
      </div>
      <button onClick={loadMore} style={{ marginTop: '20px' }}>Load More</button>
    </div>
  );
};

export default FilmList;
