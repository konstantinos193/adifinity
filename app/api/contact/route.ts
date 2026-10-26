import { NextResponse } from 'next/server'
import nodemailer, { type SendMailOptions } from 'nodemailer'

// Contact form notifications go out through our own Stalwart SMTP
// (mail.adinfinity.gr) and land in Manos's inbox, with the rest of the
// team in copy.
const TO = 'manos@adinfinity.gr'
const CC = [
  'info@adinfinity.gr',
  'support@adinfinity.gr',
  'konstantinosblavakis@gmail.com',
  'adenfinity@gmail.com',
]

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  const formData = await request.formData()

  const name = (formData.get('name') as string) ?? ''
  const email = (formData.get('email') as string) ?? ''
  const phone = (formData.get('phone') as string) ?? ''
  const subject = (formData.get('subject') as string) ?? ''
  const message = (formData.get('message') as string) ?? ''
  const file = formData.get('file') as File | null

  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  if (!user || !pass) {
    console.error('Contact form: EMAIL_USER / EMAIL_PASS not configured')
    return NextResponse.json({ success: false }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST ?? 'mail.adinfinity.gr',
    port: Number(process.env.EMAIL_PORT ?? 465),
    secure: true,
    auth: { user, pass },
    // WORKAROUND. Stalwart is serving a self-generated certificate: its cached
    // certificate record expired on 2026-10-25 even though the installed Let's
    // Encrypt pair is valid to 2026-12-23. A verifying client cannot submit,
    // so since then this route has been answering 500 and every visitor's
    // message was lost. Remove once the record is refreshed and
    // `openssl s_client -connect mail.adinfinity.gr:465` shows the real cert.
    tls: { rejectUnauthorized: false },
  })

  try {
    const mailOptions: SendMailOptions = {
      from: `"Adinfinity" <${user}>`,
      to: TO,
      cc: CC,
      // Lets the team hit Reply and land in the visitor's inbox.
      replyTo: email || undefined,
      subject: subject
        ? `[Contact] ${subject} — ${name}`
        : `[Contact] New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    }

    // If there's a file, attach it to the email
    if (file && file.size > 0) {
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
