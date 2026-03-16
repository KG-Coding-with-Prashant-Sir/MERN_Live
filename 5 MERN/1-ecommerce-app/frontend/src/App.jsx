import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import CartPanel from './components/CartPanel';
import CheckoutModal from './components/CheckoutModal';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const emptyCart = {
  items: [],
  summary: {
    itemCount: 0,
    subtotal: 0,
    tax: 0,
    total: 0
  }
};

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(emptyCart);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const fetchInitialData = async () => {
    try {
      const [productsRes, cartRes] = await Promise.all([fetch(`${API_BASE}/products`), fetch(`${API_BASE}/cart`)]);
      const [productsData, cartData] = await Promise.all([productsRes.json(), cartRes.json()]);
      setProducts(productsData);
      setCart(cartData);
    } catch {
      setMessage('Unable to connect to the backend API. Start backend server on port 5000.');
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const addToCart = async (productId) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity: 1 })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to add item');
      }
      setCart(data);
      setMessage('Item added to cart');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity <= 0) {
      return removeItem(productId);
    }

    try {
      const response = await fetch(`${API_BASE}/cart/${productId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update quantity');
      }
      setCart(data);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const removeItem = async (productId) => {
    try {
      const response = await fetch(`${API_BASE}/cart/${productId}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to remove item');
      }
      setCart(data);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const placeOrder = async (customer) => {
    setCheckoutLoading(true);
    try {
      const response = await fetch(`${API_BASE}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Checkout failed');
      }

      setMessage(`✅ Order ${data.orderId} placed successfully for $${data.chargedAmount.toFixed(2)}.`);
      setCart(emptyCart);
      setCheckoutOpen(false);
      fetchInitialData();
      return true;
    } catch (error) {
      setMessage(error.message);
      return false;
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <div className="layout">
      <header className="header">
        <h1>MERN eCommerce Store</h1>
        <p>Browse products, manage your cart, and complete checkout.</p>
      </header>

      {message && <div className="banner">{message}</div>}

      <main className="content">
        <section>
          <h2>Products</h2>
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} loading={loading} />
            ))}
          </div>
        </section>

        <CartPanel
          cart={cart}
          onQuantityChange={updateQuantity}
          onRemove={removeItem}
          onCheckoutClick={() => setCheckoutOpen(true)}
          checkoutLoading={checkoutLoading}
        />
      </main>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onSubmit={placeOrder}
        submitting={checkoutLoading}
      />
    </div>
  );
}
