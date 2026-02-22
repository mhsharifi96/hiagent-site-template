import {NextResponse} from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (!payload.name || !payload.email || !payload.message || !isValidEmail(payload.email)) {
      return NextResponse.json({ok: false, error: 'Invalid input'}, {status: 400});
    }

    const contactMessage = {
      ...payload,
      createdAt: new Date().toISOString()
    };

    // Placeholder for provider integration:
    // 1) Resend API via RESEND_API_KEY
    // 2) SMTP via SMTP_HOST/SMTP_USER/SMTP_PASS
    // 3) Database insert
    console.log('New contact request', contactMessage);

    return NextResponse.json({ok: true});
  } catch {
    return NextResponse.json({ok: false, error: 'Unexpected error'}, {status: 500});
  }
}
