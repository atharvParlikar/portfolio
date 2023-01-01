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

async function updatePost(blogId_: any, value_: any) {
  return await prisma.post.update({
    where: {
      blogId: blogId_
    },
    data: {
      blogId: value_
    }
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


// This endpoint takes 3 things in request body
// 1. title -> title of the blog
// 2. body -> body of the blog
// 3. summery -> summery of the blog
// example: 
// {
//     "title": "how i made a markdown parser",
//     "body": "so let's understand whats a parser first...",
//     "summery": "exploring the topic of markdown parsing"
// }
app.post('/api/v1/create/', async (req: Request, res: Response) => {
  const blogs = await getPosts();
  const data = req.body;
  if (blogs.length === 0) {
    data['blogId'] = 1;
  } else {
    data['blogId'] = blogs[blogs.length - 1].blogId + 1;
  }
  addPost(data).catch((e) => {
    console.error(e);
    res.status(424).json({
      message: "failed to create, try again"
    })
  });
  console.log(data['blogId']);
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
});

app.delete('/api/v1/blog/:id', async (req: Request, res: Response) => {
  const allBlogs = await prisma.post.findMany();
  const n = parseInt(req.params.id);
  const deleted = await prisma.post.delete({
    where: {
      blogId: n
    }
  }).catch((e) => {
    console.error(e);
    res.send("record to delete does not exists")
  });
  for (let i = n + 1; i <= allBlogs.length; i++) {
    await prisma.post.update({
      where: {
        blogId: i
      },
      data: {
        blogId: i - 1
      }
    });
  }
  if (deleted) res.send("done betch");
});

app.get('/api/v1/test', async (req: Request, res: Response) => {
  await prisma.post.deleteMany({
    where: {
      blogId: {
        gt: 0
      }
    }
  });
  res.send("done betch");
});

app.listen(4000, () => {
  console.log("server running at 4000");
});
