const blogController = require('../controller/blogs');

// validation object for "routes/blogs.js"
const getBlogValidation = {
    params: {
        id: { type: 'string' }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' }
            }
        }
    }
}

// validation obj for adding a blog POST /api/blogs

const addBlogValidation = {
    body: {
        type: 'object',
        required: [
            'title'
        ],
        properties: {
            title: { type: 'string' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' }
            }
        }
    }
}

const routes = [{
        method: 'GET',
        url: '/api/blogs',
        handler: blogController.getAllBlogs
    },
    {
        method: 'GET',
        url: '/api/blogs/:id',
        schema: getBlogValidation, // to connect validation obj to our route
        handler: blogController.getBlog
    },
    {
        method: 'POST',
        url: '/api/blogs',
        schema: addBlogValidation,
        handler: blogController.addBlog
    },
    {
        method: 'PUT',
        url: '/api/blogs/:id',
        handler: blogController.updateBlog
    },
    {
        method: 'DELETE',
        url: '/api/blogs/:id',
        handler: blogController.deleteBlog
    }
]



module.exports = routes