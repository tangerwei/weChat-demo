<p>本版本需要运行在node >= 7.0的环境上</p>
<p>
    创建时间2017年3月16日 13:33:32
</p>
<p>
    <a href="http://wmtp.net/173851">水果图片地址</a>
</P>
<p>
    <a href="https://facebook.github.io/flux/docs/flux-utils.html">flux utils 文档</a>
</p>
<p>
2017年3月21日 15:52:43 初步将代码迁移到flux框架上
</p>
<p><a href="https://tangerwei.github.io/weChat-demo/index.html">demo地址</a></p>

<p>
2017年3月23日 17:52:13
添加temple.html，将html的生成集成到webpack上
下一步：将index.html和iframe区分
尝试使用 koa 模版
进行服务器端渲染
</p>
<p>此版本非静态网页，暂时不提供网页demo</p>
<p>
    本地服务器部署，运行npm run test</br>
    <a href='http://localhost:8080/index.html'>本地访问地址</a>
</p>
<p>
    koa的MiddleWare(中间件)
    <ul>
        <li><a href='https://github.com/tangerwei/koa-router'>koa-router</a></li>
    </ul>
</p>
<p>2017年3月28日 14:59:40</p>
<p>
    koa-router将koa本地服务器重新编写
</p>
<p>
    代码重构将appview拆分为5页
</p>
<p>
    随心订用户页面添加登录功能
</p>
<h3>2017年3月29日 15:39:14</h3>
<p>登录界面实际功能添加</p>
<p>
    数据的传输问题，
    首先请求中必须设置头信息，用以识别数据传输的类型(mimetype)
    其次，后台需要使用解析部分的中间件.
</p>
<p>
目前koa中使用的中间件：
<1>koa-router
<2>koa-bodyparser
</p>

<!>待解决问题：编写一个解析前端传输数据的中间件
<p>
    koa/koaSelf.js
    注释：首先明确一点，ctx或者说ctx。req本身就是一个请求流，可以直接添加监听事件，
    然后通过异步监听data和end事件的方式得到信息
</p>

#采用redux数据框架编写网易云音乐

<p>
先了解使用情景，再逐级了解各层次代码
</p>


#redux
<1>对于redux的异步执行代码，实际上存在特殊情况，首先需要了解到action的执行方式：
dispatch和直接调用，其中dispatch是将action的结果直接传递给reducer，然后reducer会更新state。
但是对于存在网络请求这种操作来说，必然需要等待请求的返回结果，所以直接调用action中的函数，然后
在请求返回的时候直接dispatch相应的数据处理结果