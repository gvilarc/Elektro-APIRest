import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class FavoriteController {
  public async create(req: Request, res: Response) {
    const { buyerId, productId } = req.body;
    try {
      const newFavorite = await prisma.favorite.create({
        data: {
          buyer: { connect: { id: buyerId } },
          product: { connect: { id: productId } },
        }
      });
      return res.status(201).json({
        message: "Favorito criado com sucesso",
        favorite: newFavorite,
      });
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro criando favorito",
        error
      });
    }
  }

  public async readAll(req: Request, res: Response) {
    try {
      const favorites = await prisma.favorite.findMany({
        include: {
          buyer: true,
          product: true,
        }
      });
      return res.status(200).json(favorites);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro lendo favoritos",
        error
      });
    }
  }

  public async read(req: Request, res: Response) {
    const { buyerId, productId } = req.params;
    try {
      const favorite = await prisma.favorite.findUnique({
        where: {
          buyerId_productId: {
            buyerId: Number(buyerId),
            productId: Number(productId)
          }
        },
        include: {
          buyer: true,
          product: true,
        }
      });
      return res.status(200).json(favorite);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro lendo favorito",
        error
      });
    }
  }

  public async delete(req: Request, res: Response) {
    const { buyerId, productId } = req.params;
    try {
      const deletedFavorite = await prisma.favorite.delete({
        where: {
          buyerId_productId: {
            buyerId: Number(buyerId),
            productId: Number(productId)
          }
        }
      });
      return res.status(200).json(deletedFavorite);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro deletando favorito",
        error
      });
    }
  }
}

export const favoriteController = new FavoriteController();