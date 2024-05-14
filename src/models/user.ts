// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export interface IUser {
//   id: number;
//   email: string;
//   password: string;
//   name: string;
//   confirmed: boolean;
// }

// const user = new  ({
//   email: {
//     type: String,
//     required: true,
//     lowercase: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     lowercase: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   confirmed: {
//     type: Boolean,
//     default: false,
//   },
// });

// // const User = prisma.model<IUser>("User", userSchema);

// export default prisma.user;
