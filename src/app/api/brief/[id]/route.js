import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb"
import Brief from "../../../../models/topic"

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newCourse: course, newFeedback: feedback } = await request.json()
    await connectMongoDB();
    await Brief.findByIdAndUpdate(id, { title, course, feedback })
    return NextResponse.json({ message: "Brief updated "}, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB()
    const brief = await Brief.findOne({ _id: id })
    return NextResponse.json (brief.feedback)
}