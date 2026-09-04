function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__content">
        <div className="product-card__img-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-card__image"
          />
        </div>
        <div className="product-card__body">
          <span className="product-card__category">{product.category}</span>
          <h3 className="product-card__title">{product.title}</h3>
          <div className="product-card__rating">
            <span>*</span>
            {product.rating?.rate || "N/A"}
            <small>{product.rating?.count || 0}</small>
          </div>
          <strong className="product-card__price">{product.price}$</strong>
          <button className="product-card__add">add to cart</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
