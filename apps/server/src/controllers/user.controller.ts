import { User } from "@/db/schemas/user.schema";
import { db } from "@/lib";
import { CustomLogger } from "@fluctux/logger";
import { Request, Response } from "express";


const logger = new CustomLogger("user.controller.ts").logger

const getUsers = db.select().from(User).prepare("getUsers")
const createNewUser = async () => {
    return await db.insert(User).values({
        city: "Dhaka",
        name: "Nimul Islam Mahin"
    }).returning()
}

export class FxUser {
    async getUser(req: Request, res: Response) {
        const data = await getUsers.execute()
        res.status(200).json({ data: data, message: "OK" })
    }

    async createUser(req: Request, res: Response) {
        try {
            const result = await createNewUser()
            logger.info("result is", result)
            res.status(201).json({ message: "OK" });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "error" });
        }
    }
}
