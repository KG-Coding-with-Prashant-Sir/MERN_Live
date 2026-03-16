import express from 'express';
import cors from 'cors';
import { products } from './data.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const cart = new Map();

const getCartDetails = () => {
  const items = [...cart.values()].map((entry) => ({
    id: entry.product.id,
    name: entry.product.name,
    price: entry.product.price,
    quantity: entry.quantity,
    subtotal: Number((entry.product.price * entry.quantity).toFixed(2))
  }));

  const subtotal = Number(items.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2));
  const tax = Number((subtotal * 0.1).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));

  return {
    items,
    summary: {
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      tax,
      total
    }
  };
};

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/products', (_, res) => {
  res.json(products);
});

app.get('/api/cart', (_, res) => {
  res.json(getCartDetails());
});

app.post('/api/cart', (req, res) => {
  const { productId, quantity = 1 } = req.body;
  const parsedQuantity = Number(quantity);

  if (!productId || Number.isNaN(parsedQuantity) || parsedQuantity <= 0) {
    return res.status(400).json({ message: 'productId and positive quantity are required' });
  }

  const product = products.find((item) => item.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const current = cart.get(productId)?.quantity || 0;
  const updatedQty = current + parsedQuantity;

  if (updatedQty > product.stock) {
    return res.status(400).json({ message: 'Quantity exceeds stock' });
  }

  cart.set(productId, { product, quantity: updatedQty });
  return res.status(201).json(getCartDetails());
});

app.patch('/api/cart/:productId', (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const parsedQuantity = Number(quantity);

  if (Number.isNaN(parsedQuantity) || parsedQuantity < 0) {
    return res.status(400).json({ message: 'quantity must be zero or a positive number' });
  }

  const existing = cart.get(productId);
  if (!existing) {
    return res.status(404).json({ message: 'Cart item not found' });
  }

  if (parsedQuantity === 0) {
    cart.delete(productId);
    return res.json(getCartDetails());
  }

  if (parsedQuantity > existing.product.stock) {
    return res.status(400).json({ message: 'Quantity exceeds stock' });
  }

  cart.set(productId, { ...existing, quantity: parsedQuantity });
  return res.json(getCartDetails());
});

app.delete('/api/cart/:productId', (req, res) => {
  const { productId } = req.params;

  if (!cart.has(productId)) {
    return res.status(404).json({ message: 'Cart item not found' });
  }

  cart.delete(productId);
  return res.json(getCartDetails());
});

app.post('/api/checkout', (req, res) => {
  const { customer } = req.body;
  const { items, summary } = getCartDetails();

  if (!items.length) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  if (!customer?.name || !customer?.email || !customer?.address) {
    return res.status(400).json({ message: 'Customer name, email, and address are required' });
  }

  items.forEach((item) => {
    const product = products.find((productItem) => productItem.id === item.id);
    if (product) {
      product.stock -= item.quantity;
    }
  });

  cart.clear();

  const orderId = `ORD-${Date.now()}`;

  return res.status(201).json({
    message: 'Order placed successfully',
    orderId,
    chargedAmount: summary.total,
    customer,
    createdAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
