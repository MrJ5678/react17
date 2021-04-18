import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:9000/blogs"
  )

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <h1>正在加载中...</h1>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  )
}

export default Home
