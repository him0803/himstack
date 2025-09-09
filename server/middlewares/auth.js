import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.json({ success: false, message: 'Not Authorized. Login Again' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
      next();
    } else {
      return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
