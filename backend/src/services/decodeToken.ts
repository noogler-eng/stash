import jwt, { JwtPayload } from "jsonwebtoken";

const decodeToken = async (token: string) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  if (!SECRET_KEY) throw new Error("No secret Key Found!");

  const jwt_data: any = jwt.verify(token, SECRET_KEY);
  return {
    id: jwt_data?.id,
    email: jwt_data?.email,
  };
};

export default decodeToken;
