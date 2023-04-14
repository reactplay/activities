const AUTH_URL = (redirectURL, provider = 'github') => {
    const BACKEND_URL = `${process.env.NEXT_PUBLIC_NHOST_BACKEND_URL}/${process.env.NEXT_PUBLIC_NHOST_VERSION}`;
    return `${BACKEND_URL}/auth/signin/provider/${provider}?redirectTo=${encodeURI(redirectURL)}`;
};

export const NHOST = { AUTH_URL };
