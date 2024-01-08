"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }: any) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params: any = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;
  const pageNumber = parseInt(params.get("page")) || 1;
  const hasPrev = ITEM_PER_PAGE * (pageNumber - 1) > 0;
  const hasNext = ITEM_PER_PAGE * pageNumber + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", pageNumber - 1)
      : params.set("page", pageNumber + 1);
    replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
