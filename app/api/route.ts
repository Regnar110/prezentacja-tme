import { NextResponse } from 'next/server';

export async function GET() {
	console.warn('API CALL');
	return NextResponse.json({ test: 'test' })
	
  }