import jwt from "jsonwebtoken";

const generateToken = async (payload: { id: string; email: string }) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  if (!SECRET_KEY) throw new Error("No secret Key Found!");

  const jwt_token = jwt.sign(payload, SECRET_KEY, { expiresIn: "5h" });
  return jwt_token;
};

export default generateToken;