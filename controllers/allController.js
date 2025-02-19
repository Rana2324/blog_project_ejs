//home controller
export const homeController = (req, res) => {
    res.status(200).render('home');
}

//post controller
export const postController = async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        res.status(200).render('post', { posts });
    } catch (error) {
        res.status(500).render('error', {
            title: 'Server Error',
            message: 'Failed to fetch posts'
        });
    }
}

//post details controller
export const postDetailsController = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await response.json();

        res.status(200).render('postDetails', { post });
    } catch (error) {
        res.status(500).render('error', {
            title: 'Server Error',
            message: 'Failed to fetch post details'
        });
    }
}

// Add these new controllers

export const aboutController = (req, res) => {
    res.status(200).render('about');
}

export const contactController = (req, res) => {
    res.status(200).render('contact');
}

export const notFoundController = (req, res) => {
    res.status(404).render('404', {
        title: '404 - Page Not Found'
    });
}