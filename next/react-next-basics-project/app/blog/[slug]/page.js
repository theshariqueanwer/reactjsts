import Link from 'next/link'
import React from 'react'

function BlogPostPage({params}) {
  return (
    <main>
        <h1>Blog Post</h1>
        <p>{params.slug}</p>
        <p><Link href="/blog" style={{textDecoration: 'none'}} >Go Back</Link></p>
    </main>
  )
}

export default BlogPostPage
