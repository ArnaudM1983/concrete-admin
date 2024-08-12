"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./search.module.css";
import { IoIosSearch } from "react-icons/io";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    
    if(e.target.value){
      e.target.value.length > 1 && params.set("q", e.target.value)
    }else{
      params.delete("q");
    }
    replace(`${pathname}?${params}`)
  }, 300);



  return (
    <div className={styles.container}>
      <IoIosSearch />
      <input type="text" placeholder="Rechercher..." className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Search