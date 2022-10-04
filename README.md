# Activities
A `reactplay` hustle

This is a [Next.js](https://nextjs.org/) project

## Getting Started

1. Install dependencies 
    ```bash
    yarn
    ```
    **Note**: We do check in yarn.lock file. So it's advised to use `yarn` package manager. If you need to use any other package manager, remove `yarn.lock` file from the local directory first. Also, do not check in any other lock file.
2. Create a `.env` file at the root of your project folder with the following content,

    ```bash
    NEXT_PUBLIC_NHOST_BACKEND_URL=https://rgkjmwftqtbpayoyolwh.nhost.run
    NEXT_PUBLIC_NHOST_SUBDOMAIN=rgkjmwftqtbpayoyolwh
    NEXT_PUBLIC_NHOST_REGION=ap-southeast-1
    NEXT_PUBLIC_NHOST_PROTOCOL=https
    NEXT_PUBLIC_NHOST_SERVER=rgkjmwftqtbpayoyolwh.nhost.run
    NEXT_PUBLIC_NHOST_VERSION=v1
    NEXT_PUBLIC_NHOST_ENDPOINT=graphql
    NEXT_PUBLIC_DEV_PORT=3000
    NEXT_PUBLIC_PROTOCOL=http
    NEXT_PUBLIC_HACKATHON_ID=e606ae64-7c92-4344-94ad-4d0684458bcf
    NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID=ec1c0649-3b65-4809-92cf-9c4a6abdff1b
    ```
3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. See you application running
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
