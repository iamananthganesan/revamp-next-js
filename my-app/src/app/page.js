"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClickEvent = () => {
    router.push("/register");
  };
  return (
    <main>
      <h1>Home</h1>
      <Link href="/about">
        <button>Go to about </button>
      </Link>

      /<button onClick={handleClickEvent}>Go to login page</button>
    </main>
  );
}
