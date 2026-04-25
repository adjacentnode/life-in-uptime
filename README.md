# Life in Uptime

Website for the [Life in Uptime podcast](https://packetpushers.net/podcast/life-in-uptime/), part of the Packet Pushers network.

Hosted by **Alexis Bertholf** and **Kevin Nanns**.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- Deployed on Vercel

## Local dev

```bash
npm install
npm run dev
```

## Environment variables

For the guest application form to send emails, set in Vercel dashboard:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `GUEST_EMAIL` | Where guest applications go (default: `podcasts@packetpushers.net`) |
| `FROM_EMAIL` | From address (default: `noreply@lifeinuptime.com`) |

The form works without these in dev — it just logs to the console.

## Pages

- `/` — Home, hero, latest episodes, hosts, CTA
- `/episodes` — Full episode list (live from Packet Pushers RSS)
- `/guest` — Guest application form
- `/advertise` — Advertising info, routes through Packet Pushers

## Domain

`lifeinuptime.com` — registered on GoDaddy. Point nameservers to Vercel or add DNS records after first deploy.
