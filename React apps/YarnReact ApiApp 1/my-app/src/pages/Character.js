import React from "react";
import { useCharacter } from "../Hooks/UseCharacterSingle";
import "./Character.css";
import { useParams } from "react-router";

export default function Character() {
  const { id } = useParams;

  const { data, loading, error } = useCharacter(id);

  if (error) return <div>Error...</div>;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
