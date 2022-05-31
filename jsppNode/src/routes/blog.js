const { SuccessModel, ErrorModel } = require('../model/responseModel');
const { getBlogList, getBlogDetail, createNewBlog, updateBlog, deleteBlog } = require('../controllers/blog')
    //处理博客相关
const handleBlogRoute = (req, res) => {
    const method = req.method
    const id = req.query.id;
    const blogData = req.body;

    if (method === 'GET' && req.path === '/api/blog/list') {
        // /api/blog/list?author=zhangsan&keyword=123
        //new SuccessModel
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getBlogList(author, keyword);
        return new SuccessModel(listData)
            // return{
            //     messge:'获取博客列表的接口'
            // }
    }
    if (method === 'POST' && req.path === '/api/blog/detail') {

        const detailData = getBlogDetail(id);
        return new SuccessModel(detailData)
    }
    if (method === 'POST' && req.path === '/api/blog/new') {

        const createNewBlog = createNewBlog(blogData)
        return new SuccessModel(createNewBlog)
    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        // bool
        const updatedBlogData = updateBlog(id, blogData)
        if (updatedBlog) {
            return new SuccessModel('更新成功')
        } else {
            return new ErrorModel('更新失败')
        }
    }
    if (method === 'POST' && req.path === '/api/blog/delete') {
        const deletedBlog = deleteBlog(id)
    }

}