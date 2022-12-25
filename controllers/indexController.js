export const getHomePage = async (req, res, next) => {
  try {
    res.status(200).json("Express Server using Angular by Moheb");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
