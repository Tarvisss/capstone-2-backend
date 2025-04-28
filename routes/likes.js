// const express = require("express");
// const { PrismaClient } = require("../generated/prisma");
// const prisma = new PrismaClient();

// const router = express.Router();

// // create a like
// router.post("/likes", async function (req, res, next) {
//     try {
//         const { user_id, comment_id, challenge_id} = req.body;

//         const newLike = await prisma.likes.create({
//             data: { 
//                 user_id,
//                 comment_id,
//                 challenge_id,
//             },
//             select: {
//                 id: true,
//                 user_id: true,
//                 comment_id: true,
//                 challenge_id: true,
//                 created_at: true
//             }
//         });

//         res.status(201).json(newLike);
//     } catch (error) {
//         next(error);
//     }
// });
// // route to remove a like
// router.delete("/likes/:id", async function (req, res, next) {
//     try {
//         const { id } = req.params;

//         const deletedLike = await prisma.likes.delete({
//             // primsa expects a number, not a string.
//             where: {id: parseInt(id)},
//             select: {
//                 id: true,
//                 user_id: true,
//                 comment_id: true,
//                 challenge_id: true,
//                 created_at: true
//             }
//         })
//         res.json({message: "Removed like", deletedLike})
//     } catch (error) {
//         console.error(error);
//         res.status(404).json({error: "No like found, failed to delete"})
//     }
// });

// module.exports = router;