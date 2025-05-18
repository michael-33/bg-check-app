export const validateCandidateInput = (req, res, next) => {
  const { name, email, keywords } = req.body;

  if (!name || !email || !keywords) {
    return res.status(400).json({
      error: 'Missing required fields',
      details: {
        name: !name ? 'Name is required' : undefined,
        email: !email ? 'Email is required' : undefined,
        keywords: !keywords ? 'Keywords are required' : undefined,
      }
    });
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email',
      details: 'Please provide a valid email address'
    });
  }

  next();
};
