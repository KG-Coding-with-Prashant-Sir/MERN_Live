export default function CartPanel({ cart, onQuantityChange, onRemove, onCheckoutClick, checkoutLoading }) {
  return (
    <aside className="cart-panel">
      <h2>Your Cart</h2>
      {!cart.items.length ? (
        <p className="muted">No items yet.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.items.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <strong>{item.name}</strong>
                  <p className="muted">${item.price.toFixed(2)} each</p>
                </div>
                <div className="cart-item__controls">
                  <button onClick={() => onQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>+</button>
                  <button className="danger" onClick={() => onRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="summary">
            <p>
              Items <span>{cart.summary.itemCount}</span>
            </p>
            <p>
              Subtotal <span>${cart.summary.subtotal.toFixed(2)}</span>
            </p>
            <p>
              Tax (10%) <span>${cart.summary.tax.toFixed(2)}</span>
            </p>
            <p className="summary__total">
              Total <span>${cart.summary.total.toFixed(2)}</span>
            </p>
          </div>
          <button className="checkout-btn" onClick={onCheckoutClick} disabled={checkoutLoading}>
            {checkoutLoading ? 'Processing...' : 'Proceed to checkout'}
          </button>
        </>
      )}
    </aside>
  );
}
