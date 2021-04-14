export default async function uniFetch(...args) {
  const arr = ['token', 'url', 'method', 'body'];
  const fetchObj = {
    headers: {
      'Content-Type': 'application/json',
      'X-Application-Key': process.env.REACT_APP_KEY,
    },
  };
  args.map((e, i) => {
    if (e === null || e === '' || i === 1) {
      return null;
    }
    if (i === 0) {
      fetchObj.headers.Authorization = `Bearer ${e}`;
      return fetchObj.headers.Authorization;
    }
    if (i === 3) {
      fetchObj.body = JSON.stringify(e);
      return fetchObj.body;
    }
    fetchObj[arr[i]] = e;
    return fetchObj[arr[i]];
  });
  const response = await fetch(args[1], fetchObj);
  return response.json();
}
