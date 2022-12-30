"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const prisma = new client_1.PrismaClient();
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.post.findMany();
    });
}
function addPost(postObj) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.post.create({
            data: postObj
        });
    });
}
function updatePost(blogId_, value_) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.post.update({
            where: {
                blogId: blogId_
            },
            data: {
                blogId: value_
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.$connect();
    });
}
main().catch(e => {
    console.error(e);
    prisma.$disconnect();
});
app.get('/api/v1/getBlogs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        blogs: yield prisma.post.findMany()
    });
}));
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
app.post('/api/v1/create/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield getPosts();
    const data = req.body;
    if (blogs.length === 0) {
        data['blogId'] = 1;
    }
    else {
        data['blogId'] = blogs[blogs.length - 1].blogId + 1;
    }
    addPost(data).catch((e) => {
        console.error(e);
        res.status(424).json({
            message: "failed to create, try again"
        });
    });
    console.log(data['blogId']);
    res.json({
        message: "post created successfully"
    });
}));
app.get('/api/v1/blog/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield prisma.post.findFirst({
        where: {
            blogId: parseInt(req.params.id)
        }
    });
    if (blog === null) {
        res.json({
            message: "blog not found"
        });
    }
    else {
        res.json(blog);
    }
}));
app.delete('/api/v1/blog/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allBlogs = yield prisma.post.findMany();
    const n = parseInt(req.params.id);
    const deleted = yield prisma.post.delete({
        where: {
            blogId: n
        }
    }).catch((e) => {
        console.error(e);
        res.send("record to delete does not exists");
    });
    for (let i = n + 1; i <= allBlogs.length; i++) {
        yield prisma.post.update({
            where: {
                blogId: i
            },
            data: {
                blogId: i - 1
            }
        });
    }
    if (deleted)
        res.send("done betch");
}));
app.get('/api/v1/test', (res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.post.deleteMany({
        where: {
            blogId: {
                gt: 0
            }
        }
    });
    res.send("done betch");
}));
app.listen(4000, () => {
    console.log("server running at 4000");
});
