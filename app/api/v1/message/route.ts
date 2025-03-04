import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import { z } from 'zod';
import { NextResponse } from 'next/server';
const channleSchema = z.object({
    id: z.string(),
})

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN as string);
export async function POST(req: Request) {
     const { name, email, message } = await req.json();
    console.log(process.env.DISCORD_TOKEN);
    try {
        const channel = await rest.post(Routes.userChannels(), {
            body: {
                recipient_id: '292824908680134656' 
            }
        });

        if (!channel) {
            return new Response('Error creating channel', { status: 500 });
        }
      const channelId = channleSchema.safeParse(channel)
      if (!channelId.success) {
        return new Response('Error creating channel', { status: 500 });
      }
      const msg = await rest.post(Routes.channelMessages(channelId.data.id), {
            body: {
                content: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            }
        });

        return NextResponse.json({message: 'Message sent'}, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: 'Error sending message'}, { status: 500 });
    }
}


