import express from "express";
import bcrypt from "bcrypt";
import { prisma } from "@repo/db";

interface User {
    username: string;
    password: string;
}

const app = express();
app.use(express.json());


app.use("/signup", async (req, res) => {
    const { username, password } = req.body as User;

    const saltRound = 10;
    const salt = bcrypt.genSaltSync(saltRound);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await prisma.user.create({
        data: {
            username,
            password: hashedPassword
        }
    });

    return res.status(201).json({
      message: "User created successfully",
    });
});

app.listen(4000);
