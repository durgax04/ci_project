import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";
 
const wss = new WebSocketServer({ port: 5000 });

wss.on("connection", async (socket) => {
    socket.on("message", async (message) => {
        const msg = message.toString();
        await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
         socket.send(
        JSON.stringify({
            "message": "User created successfully!",
            "msg": msg
        })
    )
    })

   
});