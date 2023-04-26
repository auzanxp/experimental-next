import Link from "next/link"
import React from "react"

const getPost = async () => {
  const res = await fetch(process.env.BASE_URL + '/api/post', { next: { revalidate: 0 } })
  const json = await res.json()
  return json
}

const Page = async () => {
  const posts = await getPost()

  return (
    <div>
      <Link href={'/create'}>Create</Link>
      <div>
        {posts?.post?.map((post: any, index: number) => (
          <div key={index}>
            <h2>ID: {post.id}</h2>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <div>
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;