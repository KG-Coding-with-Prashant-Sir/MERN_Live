import { useState } from 'react';

const defaultForm = {
  name: '',
  email: '',
  address: ''
};

export default function CheckoutModal({ open, onClose, onSubmit, submitting }) {
  const [form, setForm] = useState(defaultForm);

  if (!open) return null;

  const handleChange = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await onSubmit(form);
    if (success) {
      setForm(defaultForm);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <h3>Checkout Details</h3>
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>
            Full Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Shipping Address
            <textarea name="address" value={form.address} onChange={handleChange} required rows={3} />
          </label>
          <div className="modal__actions">
            <button type="button" onClick={onClose} className="ghost">
              Cancel
            </button>
            <button type="submit" disabled={submitting}>
              {submitting ? 'Placing Order...' : 'Place Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
