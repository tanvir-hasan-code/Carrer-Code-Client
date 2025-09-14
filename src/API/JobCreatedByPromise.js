export const jobCreatedByPromise = (email) => {
  return fetch(
    `https://career-code-server-lilac.vercel.app/jobs/applications?email=${email}`
  ).then((res) => res.json());
};
