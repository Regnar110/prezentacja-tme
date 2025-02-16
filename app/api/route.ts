import { NextResponse } from 'next/server';

export async function GET() {
	console.log('%c API CALL ', 'background: #222; color: #bada55');
	return NextResponse.json({ test: 'test' })
	
  }