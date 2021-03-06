// 客户端渲染，返回给客户端的只是页面骨架，没有实际内容
// 真正的内容是在客户端使用js动态生成的
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  const html = `
    <div id="app">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </div>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js"></script>
    <script>
      new Vue({
        el:'#app',
        data:{
          title:'欢迎光临', 
          content:'spa应用'
        }
      })
    </script>
  `
  res.send(html)
})

app.listen(3000, ()=>{
	console.log('启动成功')
})