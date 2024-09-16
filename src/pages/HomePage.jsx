import useGetShopsQuery from "../queries/useGetShopsQuery";

const HomePage = () => {
  const { data: shops } = useGetShopsQuery();

  return (
    <div>
      {shops.map((shop) => (
        <div key={shop.id}>
          <h3>{shop.name}</h3>
          <p>{shop.category}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
