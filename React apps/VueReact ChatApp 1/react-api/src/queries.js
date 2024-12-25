// src/queries.js
import { gql } from "@apollo/client";

export const GET_FILMS = gql`
  query GetFilms(
    $director: String
    $releaseYear: Int
    $skip: Int
    $limit: Int
  ) {
    allFilms(
      director: $director
      releaseYear: $releaseYear
      skip: $skip
      limit: $limit
    ) {
      id
      title
      director
      releaseDate
      producers
    }
  }
`;
