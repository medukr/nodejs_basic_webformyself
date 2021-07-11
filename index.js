const http = require('http')

const server = http.createServer((request, responce) => {
    console.log(request.url);

    responce.write('<h1>Hello from HodeJS</h1>')
    responce.write('<h2>Hello from HodeJS</h2>')
    responce.write('<h3>Hello from HodeJS</h3>')
    responce.end(`
        <div style="background:red; width:200px; height:200px;">
            <h1>Test</h1>
        </div>
    `)
})

server.listen(3000, () => {
    console.log('Server is running...');
})