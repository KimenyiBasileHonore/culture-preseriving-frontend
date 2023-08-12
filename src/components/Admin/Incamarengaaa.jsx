import React, { useState, useEffect } from "react";
import "../pages/Service.css";

export default function Incamarenga() {
  const [sections, setSections] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingContent, setEditingContent] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:4050/api/incamarenga/incamarenga")
      .then((response) => response.json())
      .then((data) => setSections(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  // const toggleCollapsible = (index) => {
  //   const updatedSections = [...sections];
  //   updatedSections[index].isOpen = !updatedSections[index].isOpen;
  //   setSections(updatedSections);
  // };

  const createSection = () => {
    fetch("http://localhost:4050/api/incamarenga/incamarenga", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle, content: newContent }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewTitle("");
        setNewContent("");
        fetchData(); // Refresh data after creating
      })
      .catch((error) => console.error("Error creating section:", error));
  };

  const deleteSection = (id) => {
    fetch(`http://localhost:4050/api/incamarenga/incamarenga/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchData(); // Refresh data after deleting
      })
      .catch((error) => console.error("Error deleting section:", error));
  };

  const editSection = (id, updatedTitle, updatedContent) => {
    fetch(`http://localhost:4050/api/incamarenga/incamarenga/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: updatedTitle, content: updatedContent }),
    })
      .then((response) => response.json())
      .then(() => {
        setEditingId(null);
        fetchData(); // Refresh data after editing
      })
      .catch((error) => console.error("Error editing section:", error));
  };

  return (
    <div className="container mx-auto p-8 mt-16">
      <h1 className="text-3xl font-bold mb-4">INCAMARENGA ZISOBANUYE</h1>
      <hr className="my-4" />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Incamarenag</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="input-field"
          />
          <textarea
            placeholder="Content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="input-field"
          />
          <button onClick={createSection} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add Section
          </button>
        </div>
      </div>
      <div className="mt-8 max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Edit Incamarenga</h2>
        <div className="max-w-xl overflow-x-auto">
  <table className="w-full border border-gray-200">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-2 border">Title</th>
        <th className="px-4 py-2 border">Content</th>
        <th className="px-4 py-2 border">Actions</th>
      </tr>
    </thead>
    <tbody>
      {sections.map((section, index) => (
        <tr key={index} className={(index % 2 === 0) ? 'bg-gray-50' : 'bg-white'}>
          <td className="px-4 py-2 border">{section.title}</td>
          <td className="px-4 py-2 border">{section.content}</td>
          <td className="px-4 py-2 border">
            {editingId === section._id ? (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  className="input-field"
                />
                <textarea
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  className="input-field"
                />
                <button
                  onClick={() =>
                    editSection(
                      section._id,
                      editingTitle,
                      editingContent
                    )
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditingId(section._id);
                    setEditingTitle(section.title);
                    setEditingContent(section.content);
                  }}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteSection(section._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
                    }  