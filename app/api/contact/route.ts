import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'eventDate', 'eventType', 'guestCount', 'location'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    // 4. Send confirmation email to customer

    // For now, we'll just log it
    console.log('New catering inquiry:', body);

    // In production, you might want to send an email using a service like SendGrid, Resend, etc.
    // Example with SendGrid:
    // await sendEmail({
    //   to: 'catering@crustandflamepizza.com',
    //   subject: 'New Catering Inquiry',
    //   html: formatInquiryEmail(body)
    // });

    return NextResponse.json(
      { message: 'Inquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}