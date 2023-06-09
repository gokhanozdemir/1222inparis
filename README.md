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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Friends API

- **[POST]** \* `/api/login`: diğer tüm requestlerin headerınına eklenmesi gereken bir token döndürür. İsteğin `body` si olara şu kriterleri gönderin: `{ username: 'workintech', password: 'wecandoit' }`
- **[POST]** \* `/api/logout`: kullanımdaki bir tokenı siler. inaktif bir token döndürür.
- **[GET]** `/api/friends`: Friends karakterlerini döndürür.
- **[GET]** `/api/friends/123`: id si URL'ye girilen karakteri döndürür (123 temsili bir değerdir)
- **[POST]** \* `/api/friends`: Yeni bir karakter ekler.

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@schoolintech.com',
}
```

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/391613-6d196417-eb7a-4837-a425-52c662433e64?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D391613-6d196417-eb7a-4837-a425-52c662433e64%26entityType%3Dcollection%26workspaceId%3D23db89d0-0f22-4156-a2df-bd81b09ffeff)

```

```
