"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DebounceFn } from "@/app/lib/utils";

const Search = ({ placeholder }: any) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  // debounce impln
  const handleSearch = (e: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("page",'1');
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  };
  const debouncedSearch = DebounceFn(handleSearch,300);
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={debouncedSearch}
      />
    </div>
  );
};

export default Search;
