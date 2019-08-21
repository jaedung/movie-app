import React from "react";
import PropTypes from "prop-types"; // ES6

const foods = [
  {
    id: 1,
    name: "Ramen",
    image:
      "http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/04/19/20190419000369_0.jpg",
    rating: 4.7
  },
  {
    id: 2,
    name: "Kimchi",
    image:
      "https://cdn.shopify.com/s/files/1/1071/7482/products/1426467115_2.jpg?v=1483124022",
    rating: 3.5
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function Food(props) {
  return (
    <div>
      <h4>I love {props.name}</h4>
      <h5>{props.rating}/5.0</h5>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foods.map(food => {
        return (
          <Food
            key={food.id}
            name={food.name}
            image={food.image}
            rating={food.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
