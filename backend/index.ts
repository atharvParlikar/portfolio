import { Post, PrismaClient } from "@prisma/client";
import express, { Request, Response } from 'express';
import cors from 'cors';
const app: express.Application = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

async function getPosts() {
  return await prisma.post.findMany();
}

async function addPost(postObj: any): Promise<Post> {
  return await prisma.post.create({
    data: postObj
  });
}

async function main() {
  await prisma.$connect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
});

app.get('/api/v1/getBlogs', async (req: Request, res: Response) => {
  res.json(
    {
      blogs: await prisma.post.findMany()
    }
  );
});


// This endpoint takes 2 things in request body
// 1. title -> title of the blog
// 2. body -> body of the blog
// example: 
// {
//     "title": "how i made a markdown parser"
//     "body": "so let's understand whats a parser first..."
// }
app.post('/api/v1/create/', async (req: Request, res: Response) => {
  const blogs = await getPosts();
  let lastNum = blogs[blogs.length - 1]["blogId"];
  const data = req.body;
  data['blogId'] = lastNum + 1;
  addPost(data).catch((e) => {
    console.error(e);
    res.status(424).json({
      message: "failed to create, try again"
    })
  });
  res.json({
    message: "post created successfully"
  });
})

app.get('/api/v1/blog/:id', async (req: Request, res: Response) => {
  const blog = await prisma.post.findFirst({
    where: {
      blogId: parseInt(req.params.id)
    }
  });
  if (blog === null) {
    res.json({
      message: "blog not found"
    })
  } else {
    res.json(blog);
  }
})

app.listen(4000, () => {
  console.log("server running at 4000");
})
