import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || '');

  let evt: WebhookEvent;

  // Verify the webhook payload
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    });
  }

  // Handle the webhook
  const eventType = evt.type;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, ...attributes } = evt.data;

    // Get the user's primary email
    const primaryEmail = email_addresses.find(email => email.id === attributes.primary_email_address_id);

    if (!primaryEmail) {
      return new Response('No primary email found', {
        status: 400
      });
    }

    await prisma.user.upsert({
      where: { clerkId: id },
      create: {
        clerkId: id,
        email: primaryEmail.email_address,
        name: `${attributes.first_name || ''} ${attributes.last_name || ''}`.trim() || null,
      },
      update: {
        email: primaryEmail.email_address,
        name: `${attributes.first_name || ''} ${attributes.last_name || ''}`.trim() || null,
      },
    });

    return new Response('User synchronized', { status: 200 });
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    await prisma.user.delete({
      where: { clerkId: id },
    });

    return new Response('User deleted', { status: 200 });
  }

  return new Response('Webhook received', { status: 200 });
} 