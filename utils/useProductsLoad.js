import { useEffect, useRef, useState } from 'react';

export default function useProductsLoad(
  data,
  pageNumber,
  limit,
  categoryId,
  page
) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const unmounted = useRef(false);

  useEffect(() => {
    setProducts([]);
    setHasMore(true);
  }, [data.length, categoryId, page]);

  useEffect(() => {
    setLoading(true);
    if (products.length === data.length) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
    setProducts((prevProducts) => {
      return [
        ...new Set([
          ...prevProducts,
          ...data
            .slice(0 + (pageNumber - 1) * limit, pageNumber * limit)
            .map((b) => b),
        ]),
      ];
    });
    setLoading(false);

    return () => {
      unmounted.current = true;
    };
  }, [pageNumber, data.length, categoryId, page]);

  return { loading, products, hasMore };
}
