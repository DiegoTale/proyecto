import type { Request, Response } from "express";
// import { User } from "@prisma/client";
import { hashPassword } from "../utils/auth";
import { prisma } from "../data/postgres";
// import { IUser } from '../models/user';
// import prisma from "../models/user";

export class AuthController {
  static createAccount = async (req: Request, res: Response) => {
    try {
      const { password } = req.body;
      console.log(password);
      const user = await prisma.user.create({
        data: { password },
      });
      // const user = await prisma.create(req.body);

      // Hash Password
      user.password = await hashPassword(password);
      // await user.save();

      res.json(user);
      res.send("Cuenta creada, revisa tu email para confirmarla");
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Hubo un error" });
    }
  };
}
