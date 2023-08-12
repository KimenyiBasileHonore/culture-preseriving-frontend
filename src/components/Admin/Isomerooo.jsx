import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Imiganimiremireee from './Imiganimiremireee';
import Imivugooo from './Imivugooo';
import Imiganiabanaaa from './Imiganiabanaaa';
import Indirimbooo from './Indirimbooo';
import Inkaaa from './Inkaaa';


export default function IbyivugoCRUD() {
    const [ibyivugoList, setIbyivugoList] = useState([]);
    const [selectedIbyivugo, setSelectedIbyivugo] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);

    const fetchIbyivugoList = async () => {
        try {
            const response = await axios.get('http://localhost:4050/api/ibyivugo//ibyivugo');
            setIbyivugoList(response.data);
        } catch (error) {
            console.error('Error fetching Ibyivugo list:', error);
        }
    };

    useEffect(() => {
        fetchIbyivugoList();
    }, []);

    const handleCreate = async (newIbyivugo) => {
        try {
            const formattedDetails = selectedIbyivugo.details.replace(/\n/g, '<br>');
            await axios.post('http://localhost:4050/api/ibyivugo/ibyivugo', { ...selectedIbyivugo, details: formattedDetails });
            fetchIbyivugoList();
        } catch (error) {
            console.error('Error creating Ibyivugo:', error);
        }
    };
    
    const handleUpdate = async (updatedIbyivugo) => {
        try {
            const formattedDetails = selectedIbyivugo.details.replace(/\n/g, '<br>');
            await axios.put(`http://localhost:4050/api/ibyivugo/ibyivugo/${updatedIbyivugo._id}`, { ...updatedIbyivugo, details: formattedDetails });
            fetchIbyivugoList();
            setSelectedIbyivugo({});
            setIsEditMode(false);
        } catch (error) {
            console.error('Error updating Ibyivugo:', error);
        }
    };
    

    const handleDelete = async (ibyivugoId) => {
        try {
            await axios.delete(`http://localhost:4050/api/ibyivugo/ibyivugo/${ibyivugoId}`, { data: ibyivugoId });
            fetchIbyivugoList();
        } catch (error) {
            console.error('Error deleting Ibyivugo:', error);
        }
    };

    return (
        <div className="p-4 mt-16">
            <h1 className="text-3xl font-bold mb-6">Ibyivugo </h1>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2">Create / Edit</h2>
                {isEditMode ? (
                    <div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Title"
                            value={selectedIbyivugo.title || ''}
                            onChange={(e) => setSelectedIbyivugo({ ...selectedIbyivugo, title: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Summary"
                            value={selectedIbyivugo.summary || ''}
                            onChange={(e) => setSelectedIbyivugo({ ...selectedIbyivugo, summary: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Details"
                            value={selectedIbyivugo.details || ''}
                            onChange={(e) => setSelectedIbyivugo({ ...selectedIbyivugo, details: e.target.value })}
                        />
                        <button className="update-button mr-2" onClick={() => handleUpdate(selectedIbyivugo)}>Save</button>
                        <button className="cancel-button" onClick={() => setIsEditMode(false)}>Cancel</button>
                    </div>
                ) : (
                    <div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Title"
                            onChange={(e) => setSelectedIbyivugo({ ...selectedIbyivugo, title: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Summary"
                            onChange={(e) => setSelectedIbyivugo({ ...selectedIbyivugo, summary: e.target.value })}
                        />
                        {/* <input
                            className="input"
                            type="text"
                            placeholder="Details"
                            onChange={(e) => setSelectedIbyivugo({ ...selectedIbyivugo, details: e.target.value })}
                        /> */}
                        <textarea
                            className="input"
                            placeholder="Details"
                            value={selectedIbyivugo.details || ''}
                            onChange={(e) => setSelectedIbyivugo({ ...selectedIbyivugo, details: e.target.value })}
                        />


                        <button className="create-button" onClick={() => handleCreate(selectedIbyivugo)}>Create</button>
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
                            {ibyivugoList.map((ibyivugo) => (
                                <tr key={ibyivugo._id} className="border-t border-gray-300">
                                    <td className="p-4 border border-gray-300 whitespace-normal">{ibyivugo.title}</td>
                                    <td className="p-4 border border-gray-300 whitespace-normal">{ibyivugo.summary}</td>
                                    <td className="p-4 border border-gray-300 whitespace-normal">{ibyivugo.details.replace(/\n/g, '<br>').replace(/\n\n/g, '<br><br>')}</td>
                                    <td className="p-4 border border-gray-300">
                                        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2" onClick={() => setSelectedIbyivugo(ibyivugo)}>Edit</button> */}
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2" onClick={() => {
                                            setSelectedIbyivugo(ibyivugo);
                                            setIsEditMode(true);
                                        }}>Edit</button>

                                        <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded" onClick={() => handleDelete(ibyivugo._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Imiganimiremireee />
            <Imivugooo />
            <Imiganiabanaaa />
            <Indirimbooo />
            <Inkaaa />
        </div>
    );
}
