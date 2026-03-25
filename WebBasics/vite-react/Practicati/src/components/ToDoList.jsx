import { useState, useEffect } from "react";
import { loadTodos } from "../api/jsonPlaceholderTodos";

function ToDoList() {
  const [results, setResults] = useState([]);

  async function loadPage() {
    setResults(await loadTodos())
  }
  
  useEffect(() => {
    loadPage()
  }, []);

  return <ul>{results.map((e, i) => <li key={e.id + i}>Item {e.id}: {e.title}</li>)}</ul>;
  // return <ul>{results}</ul>;
}

export default ToDoList;
