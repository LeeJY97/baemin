import { useSuspenseQuery } from "@tanstack/react-query";
import queryKey from "./queryKeys";
import api from "../services/api";

const useGetShopsQuery = () => {
  return useSuspenseQuery({
    queryKey: queryKey.default.shops,
    queryFn: api.getShops,
  });
};

export default useGetShopsQuery;