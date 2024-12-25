import React, { use } from "react";
import "./CharacterList.css";
import { useCharacters } from "../Hooks/useCharacter";
import { Link } from "react-router";

export default function CharacterList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
