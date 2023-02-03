import React, { useState } from "react";

function RecipeCreate({createRecipe}) { 
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState({ ...initialFormState });
  
  const handleChange = ({ target }) => {  
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);  
    setFormData({ ...initialFormState });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={formData.name}
              />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={formData.cuisine}
              />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={formData.photo}
              />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={formData.ingredients}
              />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                required={true}
                onChange={handleChange}
                value={formData.preparation}
              />
              </label>
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

  // ADDED: Add the required input and textarea form elements.


export default RecipeCreate;