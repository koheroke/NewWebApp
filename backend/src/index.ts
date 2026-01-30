import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Server } from 'socket.io'
import { registerSocketHandlers } from '@/app/socket'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const server = serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
const io = new Server(server,{
  cors: {
    origin: 'http://localhost:5173',
    methods: ["GET", "POST"]
  }

})
registerSocketHandlers(io)