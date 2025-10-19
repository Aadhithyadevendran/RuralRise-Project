import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // must be true for deployed site (https)
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // None for cross-site in prod
  });
};

export default generateTokenAndSetCookie;
