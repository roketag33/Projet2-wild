import React from "react";
import "./AllCocktailsCard.css";
import PropTypes from "prop-types";

const AllCocktailsCard = ({ cocktail }) => {
  return (
    <div className="allcocktails__card">
      <div className="allcocktails__frontcard">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="allcocktails__img"
        />
        <h1 className="allcocktails__title">{cocktail.strDrink}</h1>
      </div>
      <div className="allcocktails__backcard">
        <h5>Ingredients: </h5>
        <ul className="allcocktails__ingredients" />
        <h5> Recipe :</h5>
        <p>{cocktail.strInstructions}</p>
      </div>
    </div>
  );
};

AllCocktailsCard.propTypes = {
  cocktail: PropTypes.string.isRequired,
};

export default AllCocktailsCard;
