
// Middleware to log specific URL
export const urlLoggerMiddleware = (req, res, next) => {
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log(`URL Accessed: ${fullUrl}`);
    next();
};

// 404 Handler
export const notFoundHandler = (req, res, next) => {
    res.status(404).render('404', {
        title: '404 - Page Not Found'
    });
};