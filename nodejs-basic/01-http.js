//1.加载http核心模块
var http= require('http')

//2. 使用http.createServer()方法创建一个web服务器。返回一个server 实例
var server = http.createServer() 
 
//3.服务器干嘛：提供服务，发请求，接受，处理，反馈，注册请求事件，执行第二个回调函数
server.on('request',function(request,response){
    console.log('received the request,the path is :'+request.url)
    //write给客户端发送响应数据，write可以使用多次，但是最后一次药用end来结束响应
    // response.write('hello') 
    // response.write(' nodejs')
    // response.end()
    response.end('hello nodejs')

    var url=request.url
    if (url==='/'){
        response.end('index page')
    }else if(url==='/login'){
        response.end('login page')
    }else{
        response.end('404 not found')
    }
})
//4.绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('server started')
})