import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Format the email content
    const emailHtml = `
      <h2>New Catering Inquiry</h2>
      <hr>
      <p><strong>Customer Information:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${body.fullName}</li>
        <li><strong>Email:</strong> ${body.email}</li>
        <li><strong>Phone:</strong> ${body.phone}</li>
      </ul>
      
      <p><strong>Event Details:</strong></p>
      <ul>
        <li><strong>Event Type:</strong> ${body.eventType}</li>
        <li><strong>Event Date:</strong> ${body.eventDate}</li>
        <li><strong>Guest Count:</strong> ${body.guestCount}</li>
        <li><strong>Location:</strong> ${body.location}</li>
        ${body.additionalInfo ? `<li><strong>Additional Information:</strong> ${body.additionalInfo}</li>` : ''}
      </ul>
    `;

    // Send email notification to the business
    const { data, error } = await resend.emails.send({
      from: 'Crust & Flame Website <onboarding@resend.dev>', // Change this when you verify your domain
      to: ['catering@crustandflamepizza.com'],
      subject: `New Catering Inquiry from ${body.fullName}`,
      html: emailHtml,
      reply_to: body.email,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const confirmationHtml = `
      <h2>Thank you for your inquiry!</h2>
      <p>Dear ${body.fullName},</p>
      <p>We've received your catering inquiry for ${body.eventDate}. Our team will review your request and get back to you within 24 hours.</p>
      
      <p><strong>Event Details:</strong></p>
      <ul>
        <li>Event Type: ${body.eventType}</li>
        <li>Event Date: ${body.eventDate}</li>
        <li>Guest Count: ${body.guestCount}</li>
        <li>Location: ${body.location}</li>
      </ul>
      
      <p>If you have any urgent questions, please call us at (323) 561-2750.</p>
      
      <p>Best regards,<br>
      The Crust & Flame Team</p>
    `;

    await resend.emails.send({
      from: 'Crust & Flame <onboarding@resend.dev>', // Change this when you verify your domain
      to: [body.email],
      subject: 'Thank you for your catering inquiry - Crust & Flame',
      html: confirmationHtml,
    });

    console.log('Email sent successfully:', data);

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