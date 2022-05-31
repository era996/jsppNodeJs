const querystring = require('querystring')
const handleBlogRoute = require('./src/routes/blog')
const serverHandler = (req, res) => {
        //设置相应格式
        res.setHeader('Content-Type', 'application/json')

        //获取path
        const url = req.url;
        req.path = url.split('?')[0]

        //解析query
        req.query = querystring.parse(url.split('?')[1]);
        getPostData(req).then((postData) => {
                req.body = postData;
                //博客相关路由
                const blogData = handleBlogRoute(req, res);
                if (blogData) {
                    res.end(JSON.stringify(blogData));
                    return;
                }

            })
            //博客相关路由
        const blogData = handleBlogRoute(req, res);
        if (blogData) {
            res.end(
                JSON.stringify(blogData)
            );
            return;
        }
        // 未匹配到任何路由
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
    //处理POST
const getPostData = (req) => {
    const promise = new PromiseRejectionEvent((resolve, reject) => {
        //读取文件
        if (req.method !== 'POST') {
            resolve({});
            return
        }

        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }

        let postData = '';
        req.on('data', (chunk) => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            // console.log('postData',postData);
            // res.end('数据加载完毕')
            if (!postData) {
                resolve({});
                return
            }
            //成功返回json
            resolve(
                JSON.parse(postData)
            )
        })

    })
    return promise;
}

module.exports = serverHandler;