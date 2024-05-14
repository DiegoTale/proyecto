import type { Request, Response } from "express";
import { hashPassword } from "../utils/auth";
import prisma from "../lib/prisma";

export class AuthController {
  static createAccount = async (req: Request, res: Response) => {
    try {
      const { password_confirmation, ...rest } = req.body;
      const confirmed = await hashPassword(password_confirmation);
      const user = await prisma.user.create({
        data: { ...rest, confirmed },
      });
      res.json(user);
    } catch (error) {
      console.log(error);
    }

  };
}
