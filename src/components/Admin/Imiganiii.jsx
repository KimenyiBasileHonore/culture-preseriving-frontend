import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages/Service.css";

export default function Imigani() {
    const [contentList, setContentList] = useState([]);
    const [newContent, setNewContent] = useState("");
    const [updatedContent, setUpdatedContent] = useState("");
    const [selectedItemId, setSelectedItemId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = () => {
        axios.get("http://localhost:4050/api/imigani/imigani")
            .then((response) => {
                setContentList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const handleCreate = () => {
        axios.post("http://localhost:4050/api/imigani/imigani", { content: newContent })
            .then(() => {
                setNewContent("");
                fetchData();
            })
            .catch((error) => {
                console.error("Error creating Imigani:", error);
            });
    };

    const handleEdit = (content) => {
        setSelectedItemId(content._id);
        setUpdatedContent(content.content); // Pre-fill the input field with the content
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:4050/api/imigani/imigani/${selectedItemId}`, { content: updatedContent })
            .then((response) => {
                console.log(response); // Check the response from the server
                setUpdatedContent(""); // Clear the input field after update
                setSelectedItemId(null); // Clear the selected item ID
                fetchData(); // Fetch updated data
            })
            .catch((error) => {
                console.error("Error updating Imigani:", error);
            });
    };


    const handleDelete = (id) => {
        axios.delete(`http://localhost:4050/api/imigani/imigani/${id}`)
            .then(() => {
                fetchData();
            })
            .catch((error) => {
                console.error("Error deleting Imigani:", error);
            });
    };

    return (
        <div className="mt-16">
            <h1 className="section-heading">IMIGANI MIGUFI</h1>
            <hr />
            <br />
            <div className="mb-4">
                <h2>Create New Imigani</h2>
                <div className="flex">
                    <input
                        className="mr-2 px-2 py-1 border rounded"
                        type="text"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                    />
                    <button
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        onClick={handleCreate}
                    >
                        Create
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <h2>Update Imigani</h2>
                <div className="flex">
                    <input
                        className="mr-2 px-2 py-1 border rounded"
                        type="text"
                        value={updatedContent} // Bind the input value to updatedContent
                        onChange={(e) => setUpdatedContent(e.target.value)}
                    />
                    <button
                        className="px-3 py-1 bg-green-500 text-white rounded"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                </div>
            </div>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Content</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contentList.map((content) => (
                        <tr key={content._id} className="border">
                            <td className="border px-4 py-2">{content.content}</td>
                            <td className="border px-4 py-2 flex space-x-2">
                                <button
                                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                                    onClick={() => handleEdit(content)} // Pass the content to the handler
                                >
                                    Edit
                                </button>

                                <button
                                    className="px-2 py-1 bg-red-500 text-white rounded"
                                    onClick={() => handleDelete(content._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
