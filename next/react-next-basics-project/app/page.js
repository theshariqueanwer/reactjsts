import Link from "next/link";
// import Header from "../components/header";
// import Header from "./header";
// special feature of next-js is @ symbol to indicate that the 
// folder is present at the root level of the project application
import Header from "@/components/header";


export default function Home() {
  // console.log("Executing...");
  return (
    <main>
      <Header />
      {/* <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1> */}
      <p>🔥 Let&apos;s get started! 🔥</p>
      {/* <p><a href="/about" >About Us</a></p> */}
      <p><Link href="/about" >About Us</Link></p>
      <p><Link href="/blog" >Blog</Link></p>
    </main>
  );
}
