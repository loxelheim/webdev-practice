import { useState, useEffect } from "react";
import { loadTodos } from "../api/jsonPlaceholderTodos";

function ToDoList() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function loadPage() { setResults(await loadTodos()) }
    loadPage()
  }, []);

  return <ul>{results.map((e, i) => <li key={e.id + i}>Item {e.id}: {e.title}</li>)}</ul>;
  // return <ul>{results}</ul>;
}

export default ToDoList;
