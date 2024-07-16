import jwt from 'jsonwebtoken'

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const JWT_ACCESS_EXPIRATION = process.env.JWT_ACCESS_EXPIRATION;
const JWT_REFRESH_EXPIRATION = process.env.JWT_REFRESH_EXPIRATION;
 
export const generateAccessToken = (user: any) => {
    return jwt.sign({ user: user._id }, JWT_ACCESS_SECRET, { expiresIn: JWT_ACCESS_EXPIRATION })
}
export const generateRefreshToken = (user: any) => {
    return jwt.sign({ user: user._id }, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESH_EXPIRATION })
}

export const verifyAccessToken = (token: string | null) => {
    return jwt.verify(token, JWT_ACCESS_SECRET);
}

export const verifyRefreshToken = (token: string | null) => {
    return jwt.verify(token, JWT_REFRESH_SECRET);
} 