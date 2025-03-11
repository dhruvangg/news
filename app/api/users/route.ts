import { UserValidation } from '@/lib/validation';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const data = await prisma.user.findMany({
    skip: 0,
    take: 10
  });
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const validatedData = UserValidation.validateUser(data);

    if (validatedData) {

      const { password, ...safeData } = validatedData;

      const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      await prisma.user.create({
        data: {
          email: validatedData.email,
          password: hashedPassword,
        }
      });

      return NextResponse.json({ data: safeData, message: "User created successfully" });
    }

    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  } catch (error: any) {

    return NextResponse.json(
      { error: error.message, message: "Invalid data" },
      { status: 400 }
    );
  }
}