// 获取博客列表
const getBlogList = (author, keyword) => {
        //从数据库拿
        return [{
                id: 1,
                title: '11',
                content: '111',
                author: 'zhangsan',
                createdAt: 12388889999
            },
            {
                id: 2,
                title: '22',
                content: '222',
                author: 'zhangsan',
                createdAt: 12387889999
            }
        ]
    }
    // 获取博客详情
const getBlogDetail = (id) => {

    }
    // 创建新的博客
const createNewBlog = (blogData) => {

}
const updateBlog = (id, blogData) => {

}
const deleteBlog = (id) => {

}
module.exports = {
    getBlogList
}