This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Donation to wallet
As of now I have set wallet address to  0xbc63219a3a5453db9ccd7096c6009c1ed4e69b45

Using Moralis SDK, this web 3.0 dApp helps to send 0.001 Matic to wallet address - 0xbc63219a3a5453db9ccd7096c6009c1ed4e69b45

[UnstoppableDomains NFT domain - karpe2121.wallet](karpe2121.wallet) works only on Chrome [Unstoppable Extension
](https://chrome.google.com/webstore/detail/unstoppable-extension/beelkklmblgdljamcmoffgfbdddfpnnl/related?hl=en)

[Morlais Server - https://prylzpawi05g.usemoralis.com](https://prylzpawi05g.usemoralis.com)

[IPFS - https://ipfs.io/ipfs/QmRAb5WChEB6H2fADrxVJWskYQMqGJdxDqkayrQvNpSFVb](https://ipfs.io/ipfs/QmRAb5WChEB6H2fADrxVJWskYQMqGJdxDqkayrQvNpSFVb)



# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Moralis

Please update moralisApiKey and  moralisApiSecret into `.env`.

```
yarn build && yarn export
moralis-admin-cli deploy -p out

```
More about [moralis-admin-cli](https://docs.moralis.io/moralis-dapp/tools/moralis-admin-cli), which will describe about how to  deploy your dApp to be hosted on Moralis using the deploy command.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
