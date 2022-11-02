import { useEffect, useRef, useState } from 'react';

export default function useProductsLoad(data, pageNumber, limit) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const unmounted = useRef(false);
  useEffect(() => {
    setProducts(data.slice(0, 2));
    setHasMore(true);
  }, [data.length]);
  useEffect(() => {
    setLoading(true);
    if (products.length === limit) {
      setHasMore(false);
    } else {
      setHasMore(true);
      setProducts((prevProducts) => {
        return [...prevProducts, ...data.slice(pageNumber - 2, pageNumber)];
      });
      setLoading(false);
    }

    return () => {
      unmounted.current = true;
    };
  }, [pageNumber, data.length]);

  return { loading, products, hasMore };
}
