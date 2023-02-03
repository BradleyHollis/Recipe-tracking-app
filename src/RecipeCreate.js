import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoUrlChange = (event) => setPhotoUrl(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  const newRecipe = {
    name: name,
    cuisine: cuisine,
    photo: photoUrl,
    ingredients: ingredients,
    preparation: preparation,
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(newRecipe);

    setName('');
    setCuisine('');
    setPhotoUrl('');
    setIngredients('');
    setPreparation('');
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"/>
              <input 
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleNameChange}
                value={name}
              />
            </td>
            <td>
              <label htmlFor="cuisine"/>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleCuisineChange}
                value={cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo"/>
              <input
               id="photo"
               type="text"
               name="photo"
               placeholder="URL"
               onChange={handlePhotoUrlChange}
               value={photoUrl}
              />
            </td>
            <td>
              <label htmlFor="ingredients"/>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleIngredientsChange}
                value={ingredients}
              />
            </td>
            <td>
              <label htmlFor="preparations"/>
              <textarea 
                id="preparations"
                name="preparations"
                placeholder="Preparations"
                onChange={handlePreparationChange}
                value={preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
