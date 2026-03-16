export default function ProductCard({ product, onAddToCart, loading }) {
  return (
    <article className="card">
      <img className="card__image" src={product.image} alt={product.name} />
      <div className="card__content">
        <p className="card__category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="card__description">{product.description}</p>
        <div className="card__footer">
          <strong>${product.price.toFixed(2)}</strong>
          <button onClick={() => onAddToCart(product.id)} disabled={loading || product.stock < 1}>
            {product.stock < 1 ? 'Out of stock' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  );
}
