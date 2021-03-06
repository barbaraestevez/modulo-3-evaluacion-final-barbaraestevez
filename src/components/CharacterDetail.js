import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  return (
    <main class="card__detail--main">
      <div className="card__detail">
        <Link className="link__to" to="/">Volver</Link>
        <header>
          <h2 className="card__detail--title">{props.character.name}</h2>
        </header>
        <section className="card__detail--content">
          <img className="card__detail--img" src={props.character.image} alt={props.character.name} />
          <ul className="card__detail--description">
            <li>Nombre: {props.character.name}</li>
            <li>Especie: {props.character.species}</li>
            <li>Status: {props.character.status}</li>
            <li>Origin: {props.character.origin}</li>
            <li>Episodes: {props.character.episode.length}</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default CharacterDetail;
