const API_URL = process.env.API_URL;
const accessToken = process.env.API_TOKEN;

export const getShortenerApi = async (url: string) => {
  const res = await fetch(`${API_URL}/v4/shorten`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json;charset=utf-8'
    } as HeadersInit,
    body: JSON.stringify({ long_url: url })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};
