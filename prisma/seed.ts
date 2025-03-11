import { User } from './../node_modules/.prisma/client/index.d';
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const userData: Prisma.UserCreateInput[] = [{
//     name: "Dhruvang",
//     email: "dhruvangg@gmail.com",
// }]

const postData: Prisma.PostCreateInput[] = [{
    title: "First Post",
    content: "This is my first post",
    slug: "first-post",
    summary: "This is my first post",
    image: '/placeholder.svg',
    status: "PUBLISHED",
    publishedAt: new Date(),
    author: {
        connect: {
            id: '67cfcce31957f64ea7c37ffb',
        }
    }
}, {
    title: "Second Post",
    content: "This is my second post",
    slug: "second-post",
    summary: "This is my second post",
    image: '/placeholder.svg',
    status: "PUBLISHED",
    publishedAt: new Date(),
    author: {
        connect: {
            id: '67cfcce31957f64ea7c37ffb',
        }
    }
}, {
    title: "Third Post",
    content: "This is my third post",
    slug: "third-post",
    summary: "This is my third post",
    image: '/placeholder.svg',
    status: "PUBLISHED",
    publishedAt: new Date(),
    author: {
        connect: {
            id: '67cfcce31957f64ea7c37ffb',
        }
    }
}]

export async function main(){
    for (const user of postData) {
        await prisma.post.create({ data: user });
    }
} 

main()