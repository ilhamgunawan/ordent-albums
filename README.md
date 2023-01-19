# Live Demo
[https://ordent-albums.vercel.app/](https://ordent-albums.vercel.app/)

# Specifications

## Pages

This is list of route, parameters, and endpoints that used on each pages.

### Index Page
- Route: `/`
- Endpoints
  - GET `https://jsonplaceholder.typicode.com/albums`
  - GET `https://jsonplaceholder.typicode.com/users/:id`

### Album Detail Page
- Route: `/albums/:id`
- Parameters
  - id (required)
- Endpoints
  - GET `https://jsonplaceholder.typicode.com/photos?albumId=`

## Deployment
You can find CI/CD deployment in https://github.com/ilhamgunawan/ordent-albums/blob/main/.github/workflows/deploy.yml

***

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3030](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
