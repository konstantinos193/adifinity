import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const formData = await request.formData()
  
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  const file = formData.get('file') as File | null

  // Configure email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'adenfinity@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // If there's a file, attach it to the email
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer())
      mailOptions.attachments = [{
        filename: file.name,
        content: buffer
      }]
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}