import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
    public async create(request: Request, response: Response) {
        const { nome, email, cpf, hash, salt } = request.body;

        try {
            const newUser = await prisma.user.create({
                data: {
                    name: nome,
                    email,
                    cpf,
                    hash,
                    salt,
                },
                select: {
                    email: true,
                    name: true
                }
            });

            return response.status(201).json({
                message: "Usuario criado com sucesso",
                user: newUser,
            });
        } catch (error) {
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }
    public async readAll(request: Request, response: Response) {
        try {
            const users = await prisma.user.findMany();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(500).json({
                messageError: "Erro interno no servidor",
                error: error,
            });
        }
    }
}

export const userController = new UserController();