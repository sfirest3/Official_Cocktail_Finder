import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    action(content);
    setContent("");
  }

  return (
    <form onSubmit={submit}>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter a cocktail!"
      />
      <button type="submit">GET YOUR RECIPE!</button>
    </form>
  );
}
