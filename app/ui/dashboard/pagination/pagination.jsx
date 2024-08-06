"use client"
import styles from "./pagination.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = (count) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);

  const item_per_page = 2

  const hasPrev = item_per_page * (parseInt(page)-1) > 0
  const hasNext = item_per_page * (parseInt(page)-1) + item_per_page < count

  return (
    <div className={styles.container}>
        <button className={styles.button} disabled={!hasPrev}>Précédent</button>
        <button className={styles.button} disabled={!hasNext}>Suivant</button>
    </div>
  )
}

export default Pagination