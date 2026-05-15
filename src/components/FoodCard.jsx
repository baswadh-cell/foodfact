function FoodCard({ product }) {
  const {
    product_name,
    brands,
    image_small_url,
    nutriments = {}
  } = product

  const calories = nutriments['energy-kcal_100g']
  const protein = nutriments.proteins_100g
  const carbs = nutriments.carbohydrates_100g
  const fat = nutriments.fat_100g

  return (
    <div className="food-card">
      <div className="food-card-image">
        {image_small_url ? (
          <img src={image_small_url} alt={product_name} />
        ) : (
          <div className="image-fallback">No Image</div>
        )}
      </div>
      <div className="food-card-content">
        <h3 className="food-name">{product_name}</h3>
        {brands && <p className="food-brand">{brands}</p>}
        <div className="nutrition-info">
          {calories && (
            <div className="nutriment">
              <span className="nutriment-label">Calories:</span>
              <span className="nutriment-value">{calories} kcal/100g</span>
            </div>
          )}
          {protein && (
            <div className="nutriment">
              <span className="nutriment-label">Protein:</span>
              <span className="nutriment-value">{protein}g/100g</span>
            </div>
          )}
          {carbs && (
            <div className="nutriment">
              <span className="nutriment-label">Carbs:</span>
              <span className="nutriment-value">{carbs}g/100g</span>
            </div>
          )}
          {fat && (
            <div className="nutriment">
              <span className="nutriment-label">Fat:</span>
              <span className="nutriment-value">{fat}g/100g</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FoodCard
