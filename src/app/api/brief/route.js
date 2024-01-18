import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Brief from "../../../models/topic";

export async function POST(request) {
    const { title, course, feedback } = await request.json();
    await connectMongoDB();
    await Brief.create({ title, course, feedback })
    return NextResponse.json({message: "Brief created"}, { status: 201 })
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB()
    const brief = await Brief.findOne({ _id: id })
    return NextResponse.json (brief.feedback)
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB();
    await Brief.findByIdAndDelete(id);
    return NextResponse.json({ message: "Brief deleted "}, { status: 200 })
}