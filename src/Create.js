import { useState } from "react"
import { useHistory } from "react-router"

const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("a")
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    const blog = {
      title,
      body,
      author,
    }
    setIsPending(true)

    setTimeout(async () => {
      let response = await fetch("http://localhost:9000/blogs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      })
      if (response.ok) {
        console.log("new blog added")
        history.push("/")
      }
      setIsPending(false)
    }, 5000)
  }
  return (
    <div className="create">
      <h2>创建新部落格</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="">blog body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        />

        <label htmlFor="">blog author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="a">A</option>
          <option value="c">C</option>
        </select>
        {!isPending && <button>提交</button>}
        {isPending && <button disabled>提交中</button>}
      </form>
    </div>
  )
}

export default Create
