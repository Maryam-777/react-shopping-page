import ProductCard from "./ProductCard";
function ProductList({ products }) {
  console.log("first");
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state__icon"></div>
        <h3>No Products Found</h3>
        <p>try changing your search or setting</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
