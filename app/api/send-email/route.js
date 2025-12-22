import { render } from '@react-email/render';
import AppUpdate from '@/app/emails/AppUpdate';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import path from 'path';
import { connectDB } from '@/lib/connectDB';
import { User } from '@/models/user';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);

    // If a single user is provided in the request body, send to that user only.
    if (body && body.user && body.user.email) {
      const user = body.user;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const emailHtml = await render(
        <AppUpdate userName={user.name} appName="Vault" iconCid="app-icon" />
      );

      await transporter.sendMail({
        from: `"Vault" <${process.env.GMAIL_USER}>`,
        to: user.email,
        subject: 'Vault is now an App (plus it\'s Open Source!)',
        html: emailHtml,
        attachments: [
          {
            filename: 'icon.png',
            path: path.join(process.cwd(), 'public', 'icon.png'),
            cid: 'app-icon',
          },
        ],
      });

      return NextResponse.json({ success: true });
    }

    // Otherwise, do a bulk send to all users from the DB
    await connectDB();
    const users = await User.find({}, { name: 1, email: 1 }).lean();

    if (!users || users.length === 0) {
      return NextResponse.json({ success: false, error: 'No users found to send emails' }, { status: 404 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const sendPromises = users.map(async (user) => {
      const emailHtml = await render(
        <AppUpdate userName={user.name} appName="Vault" iconCid="app-icon" />
      );

      return transporter.sendMail({
        from: `"Vault" <${process.env.GMAIL_USER}>`,
        to: user.email,
        subject: 'Vault is now an App (plus it\'s Open Source!)',
        html: emailHtml,
        attachments: [
          {
            filename: 'icon.png',
            path: path.join(process.cwd(), 'public', 'icon.png'),
            cid: 'app-icon',
          },
        ],
      });
    });

    await Promise.all(sendPromises);
    return NextResponse.json({ success: true, count: users.length });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}