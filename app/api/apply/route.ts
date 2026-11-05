import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Application from '../../../models/Application';
import { getServerSession } from "next-auth/next";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    
    const application = await Application.create(body);
    
    return NextResponse.json(
      { success: true, data: application },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating application:", error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession();
    
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await connectToDatabase();
    const applications = await Application.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: applications });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}
