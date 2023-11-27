import {NextResponse} from 'next/server'
import courses from './data.json'
import { v4 } from 'uuid'

import React from 'react'

// This is the next.js syntax for api requests
export async function GET(request){
    return NextResponse.json(courses)
}

// add a course (only in memory and through postman, education purposes)
export async function POST(request){
    const {title, description, level, link} = await request.json();
    
    const newCourse = {
        id: v4(),
        title,
        description,
        level,
        link,
    };

    courses.push(newCourse)

    return NextResponse.json(courses)
}