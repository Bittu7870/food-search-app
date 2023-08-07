import React from "react";

const FoodCard = ({ allFood, loading }) => {
  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          allFood.map((item, index) => {
            const { image, label, dishType, cuisineType, calories } =
              item.recipe;
            return (
              <div className="col-md-4 mt-5 mb-4" key={index}>
                <div className="card h-100 shadow">
                  <img src={image} className="card-img-top" alt="Food" />
                  <div
                    className="card-body"
                    style={{ backgroundColor: "#660000", color: "#fff" }}
                  >
                    <h2 className="card-title">{label}</h2>
                    <p className="card-text">
                      <strong>Dish Type:</strong> {dishType}
                    </p>
                    <p className="card-text">
                      <strong>Cuisine Type:</strong> {cuisineType}
                    </p>
                    <p className="card-text">
                      <strong>Calories:</strong> {calories}
                    </p>
                    <div className="d-flex justify-content-between">
                      <a href="#" className="btn btn-primary">
                        Add to cart
                      </a>
                      <a href="#" className="btn btn-primary">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FoodCard;
