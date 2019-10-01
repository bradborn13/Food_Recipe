import React from 'react';
import './Recipe.css';
const Recipe =({title,calories,image,ingredients}) =>{
    return(

        <div className="card">
    <div className="face face1">
    <div className="content"> 
    <img src={image} />  
    <p> {title} </p>
    </div>
</div>

<div className="face face2">
    <p>Calories:{calories}</p> 
    <p>Receipt</p>
    <ol>
    {ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
    ))}
    </ol>   
</div>
</div>

    );
};
export default Recipe;