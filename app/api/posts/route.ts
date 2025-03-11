import { PostValidation } from '@/lib/validation';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const skip = Number(searchParams.get('skip'))
    const limit = Number(searchParams.get('limit'))
    const data = await prisma.post.findMany({
        skip: skip || 0,
        take: limit || 10,
        where: {
            status: 'PUBLISHED'
        },
        include: {
            author: {
                select: {
                    username: true,
                    email: true
                }
            },
        }
    });

    const total = await prisma.post.count();

    return NextResponse.json({ data, total });
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const validatedData = PostValidation.validatePost(data);
        if (validatedData) {
            try {
                const data = await prisma.post.create({ data: validatedData });
                return NextResponse.json({ message: 'Post Created', data });
            } catch (error: any) {
                console.log(error.message);

                return NextResponse.json({ error: error.message }, { status: 400 });
            }
        }
        return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}