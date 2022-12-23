import Cart from "../models/Cart.js";

export const getAllCartItems = async (req, res, next) => {
  try {
    const cart = await Cart.find({});
    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
};

export const addCartItem = async (req, res, next) => {
  const newCartItem = new Cart(req.body);
  try {
    const savedCartItem = await newCartItem.save();
    res.status(200).json(savedCartItem);
  } catch (err) {
    next(err);
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    next(err);
  }
};
