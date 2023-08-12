import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function IbyivugoCRUD() {
    const [imiganimiremireList, setImiganimiremireList] = useState([]);
    const [selectedImiganimiremire, setSelectedImiganimiremire] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);

    const fetchImiganimiremireList = async () => {
        try {
            const response = await axios.get('http://localhost:4050/api/imiganimiremire/imiganimiremire');
            setImiganimiremireList(response.data);
        } catch (error) {
            console.error('Error fetching Imiganimiremire list:', error);
        }
    };

    useEffect(() => {
        fetchImiganimiremireList();
    }, []);

    const handleCreate = async (newImiganimiremire) => {
        try {
            await axios.post('http://localhost:4050/api/imiganimiremire/imiganimiremire', newImiganimiremire);
            fetchImiganimiremireList();
        } catch (error) {
            console.error('Error creating Imiganimiremire:', error);
        }
    };

    const handleUpdate = async (updatedImiganimiremire) => {
        try {
            await axios.put(`http://localhost:4050/api/imiganimiremire/imiganimiremire/${updatedImiganimiremire._id}`, updatedImiganimiremire);
            fetchImiganimiremireList();
            setSelectedImiganimiremire({});
            setIsEditMode(false);
        } catch (error) {
            console.error('Error updating Imiganimiremire:', error);
        }
    };

    const handleDelete = async (imiganimiremireId) => {
        try {
            await axios.delete(`http://localhost:4050/api/imiganimiremire/imiganimiremire/${imiganimiremireId}`, { data: imiganimiremireId });
            fetchImiganimiremireList();
        } catch (error) {
            console.error('Error deleting Imiganimiremire:', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Imigani miremire</h1>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2">Create / Edit</h2>
                {isEditMode ? (
                    <div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Title"
                            value={selectedImiganimiremire.title || ''}
                            onChange={(e) => setSelectedImiganimiremire({ ...selectedImiganimiremire, title: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Summary"
                            value={selectedImiganimiremire.summary || ''}
                            onChange={(e) => setSelectedImiganimiremire({ ...selectedImiganimiremire, summary: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Details"
                            value={selectedImiganimiremire.details || ''}
                            onChange={(e) => setSelectedImiganimiremire({ ...selectedImiganimiremire, details: e.target.value })}
                        />
                        <button className="update-button mr-2" onClick={() => handleUpdate(selectedImiganimiremire)}>Save</button>
                        <button className="cancel-button" onClick={() => setIsEditMode(false)}>Cancel</button>
                    </div>
                ) : (
                    <div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Title"
                            onChange={(e) => setSelectedImiganimiremire({ ...selectedImiganimiremire, title: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Summary"
                            onChange={(e) => setSelectedImiganimiremire({ ...selectedImiganimiremire, summary: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Details"
                            onChange={(e) => setSelectedImiganimiremire({ ...selectedImiganimiremire, details: e.target.value })}
                        />
                        <button className="create-button" onClick={() => handleCreate(selectedImiganimiremire)}>Create</button>
                    </div>
                )}
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-2">Read / Update / Delete</h2>
                <div className="max-w-xl overflow-x-auto">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-4 border border-gray-300">Title</th>
                                <th className="p-4 border border-gray-300">Summary</th>
                                <th className="p-4 border border-gray-300">Details</th>
                                <th className="p-4 border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {imiganimiremireList.map((imiganimiremire) => (
                                <tr key={imiganimiremire._id} className="border-t border-gray-300">
                                    <td className="p-4 border border-gray-300 whitespace-normal">{imiganimiremire.title}</td>
                                    <td className="p-4 border border-gray-300 whitespace-normal">{imiganimiremire.summary}</td>
                                    <td className="p-4 border border-gray-300 whitespace-normal">{imiganimiremire.details}</td>
                                    <td className="p-4 border border-gray-300">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2" onClick={() => {
                                            setSelectedImiganimiremire(imiganimiremire);
                                            setIsEditMode(true);
                                        }}>Edit</button>

                                        <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded" onClick={() => handleDelete(imiganimiremire._id)}>Delete</button>
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
