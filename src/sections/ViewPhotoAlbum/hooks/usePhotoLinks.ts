import { useEffect, useState } from "react";

export function usePhotoLinks<T>(links: Array<T>, perPage: number = 20) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Array<T>>([]);

  const nextPage = () => {
    setPage((current) => current + 1);
  };

  const previousPage = () => {
    setPage((current) => current - 1);
  };

  const hasPrevious = page > 1;
  const totalPages = links.length / perPage;
  const hasNext = page < totalPages;

  useEffect(() => {
    const offset = (page - 1) * perPage;
    const items = links.slice(offset, offset + perPage);
    setItems(items);
  }, [page, perPage, links]);

  return {
    links: items,
    setItems,
    nextPage,
    previousPage,
    totalPages,
    hasPrevious,
    hasNext,
  };
}
