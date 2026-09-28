import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb'
import Habit from '@/models/Habit';

// GET: Obtener todos los hábitos
export async function GET() {
  await dbConnect();
  try {
    const habits = await Habit.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: habits });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error al obtener hábitos' }, { status: 400 });
  }
}

// POST: Crear un nuevo hábito
export async function POST(request: Request) {
  await dbConnect();
  try {
    const body = await request.json();
    const habit = await Habit.create(body);
    return NextResponse.json({ success: true, data: habit }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error al crear el hábito' }, { status: 400 });
  }
}