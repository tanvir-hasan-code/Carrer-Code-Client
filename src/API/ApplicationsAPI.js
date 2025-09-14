export const myApplicationPromise = (email, accessToken) => {
  return fetch(
    `https://career-code-server-lilac.vercel.app/applications?email=${email}`,
    {
      credentials: "include",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
