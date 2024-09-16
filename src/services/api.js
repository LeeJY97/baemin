const BASE_USL = "http://localhost:4000"

const getShops = async () => {
  const response = await fetch(`${BASE_USL}/shops`);
  const data = await response.json();

  return data;
}

const api = {
  getShops,
}

export default api;