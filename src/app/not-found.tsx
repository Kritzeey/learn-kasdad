import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found">
      <span>404 / MATERI</span>
      <h1>Bagian tidak ditemukan.</h1>
      <p>Periksa tautan atau kembali ke daftar materi yang tersedia.</p>
      <Link href="/" className="button button--dark">
        Kembali ke beranda →
      </Link>
    </main>
  );
}
