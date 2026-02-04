import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, fromEmail, message } = await req.json();

    // Basic validation (server-side)
    if (
      typeof name !== 'string' ||
      typeof fromEmail !== 'string' ||
      typeof message !== 'string' ||
      name.trim().length < 2 ||
      message.trim().length < 10
    ) {
      return Response.json({ error: 'Invalid form submission.' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL || 'ayonan1@mail.pima.edu';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to,
      replyTo: fromEmail, // lets you hit Reply and respond to the sender
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(fromEmail)}</p>
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${escapeHtml(message)}</pre>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: 'Server failed to send email.' }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
