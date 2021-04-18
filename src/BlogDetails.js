import { useParams, useHistory } from "react-router-dom"
import useFetch from "./useFetch.js"

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch(
    "http://localhost:9000/blogs/" + id
  )
  const history = useHistory()
  const handleClick = async () => {
    let response = await fetch("http://localhost:9000/blogs/" + blog.id, {
      method: "DELETE",
    })
    if (response.ok) {
      history.push("/")
    }
  }

  return (
    <div className="blog-details">
      {isPending && <h2>正在加载中...</h2>}
      {error && <h2>{error}</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>删除</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
