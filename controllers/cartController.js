import Cart from "../models/Cart.js";

export const getAllCartItems = async (req, res, next) => {
  try {
    const cart = await Cart.find({});
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addCartItem = async (req, res, next) => {
  const newCartItem = new Cart(req.body);
  try {
    const savedCartItem = await newCartItem.save();
    res.status(200).json(savedCartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateCartItem = async (req, res, next) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCartItemById = async (req, res, next) => {
  try {
    const product = await Cart.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteAllCartItem = async (req, res, next) => {
  try {
    await Cart.remove({});
    res.status(200).json("Checkout Successfully.");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
