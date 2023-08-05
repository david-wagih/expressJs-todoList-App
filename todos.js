const express = require("express");
const router = express.Router();
const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

// Router level middleware that will be executed for every request to the /todos path
router.use((req, res, next) => {
  console.log("You are in the todos router");
  next();
});

router.get("/", async (req, res) => {
  const allTodos = await prisma.todo.findMany();
  res.json(allTodos);
});

router.get("/:todoId", async (req, res) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(req.params.todoId)
    }
  });
  res.json(todo);
});

router.post("/", async (req, res) => {
  console.log(req.body.title);
  const todo = await prisma.todo.create({
    data: {
      title: req.body.title
    }
  });
  res.json(todo);
});

router.patch("/:todoId", async (req, res) => {
  const todo = await prisma.todo.update({
    where: {
      id: parseInt(req.params.todoId)
    },
    data: {
      title: req.body.title
    }
  });
  res.json(todo);
});

router.delete("/:todoId", async (req, res) => {
  const todo = await prisma.todo.delete({
    where: {
      id: parseInt(req.params.todoId)
    }
  });
  res.json(todo);
});

module.exports = router;
