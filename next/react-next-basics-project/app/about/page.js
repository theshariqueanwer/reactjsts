import Link from "next/link";
import React from "react";

function AboutPage() {
  return (
    <main>
      <h1>About Page</h1>
      <p><Link href="/" style={{textDecoration: 'none'}} >Come Back</Link></p>
    </main>
  );
}

export default AboutPage;
