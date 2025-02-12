import { NextResponse } from 'next/server'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init(process.env.EMAILJS_PUBLIC_KEY!)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        from_name: name,
        from_email: email,
        message: message,
        to_email: process.env.DESTINATION_EMAIL,
      }
    )

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}