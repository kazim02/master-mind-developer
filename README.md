# Master Mind Developer

A responsive, one-page Next.js website for Master Mind Developer.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide icons
- FormSubmit for email-based enquiry delivery (no custom backend or database)

## Run locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Enquiry form setup

The contact form uses FormSubmit to forward enquiries to:

`masterminddeveloper12@gmail.com`

On the first real form submission, FormSubmit sends an activation email to that inbox. The site owner must open that email and activate the form before submissions are delivered. Check spam/junk if it does not appear.

FormSubmit is a third-party service, not a custom backend. Review its current terms, privacy policy, spam controls and data processing practices before launch. The form does not upload files. Customers should not submit sensitive personal documents through this initial enquiry form.

If you prefer not to use a third-party form provider, replace the form with a `mailto:` link, but that depends on the visitor having an email application configured and is less reliable.

## Before launch

1. Confirm the wording and service descriptions with the owner.
2. Test the form and activate FormSubmit.
3. Add a privacy notice explaining that enquiry details are forwarded to the business email through FormSubmit.
4. Add a suitable domain and configure DNS.
5. Test on common mobile screen sizes.
6. Check keyboard navigation, labels and contrast.
7. Verify all links and email delivery.
8. Ensure academic services are described as learning support, editing, formatting and guidance—not submitting work dishonestly on a student's behalf.

## Deploy

Push the project to GitHub and import it into Vercel, or deploy to another Next.js-compatible host. No environment variables are required for the initial FormSubmit setup.
