import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCardFlip from "react-card-flip";

function Ikenshkumwami() {
  const [isOpen, setIsOpen] = useState(false);
  const [flips, setFlips] = useState([]);
  const [currentFlipIndex, setCurrentFlipIndex] = useState(-1);
  const [umwamiList, setUmwamiList] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [newDetails, setNewDetails] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);


  useEffect(() => {
    fetchUmwamiList();
  }, []);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  const handleFlip = (index) => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];

    if (currentFlipIndex !== -1 && currentFlipIndex !== index) {
      newFlips[currentFlipIndex] = false;
    }

    setFlips(newFlips);
    setCurrentFlipIndex(index);
  };

  const fetchUmwamiList = async () => {
    try {
      const response = await axios.get("http://localhost:4050/api/ubwinshi/ubwinshi");
      setUmwamiList(response.data);
      setFlips(Array(response.data.length).fill(false));
    } catch (error) {
      console.error("Error fetching umwami list:", error);
    }
  };

  const createUmwami = async () => {
    try {
      await axios.post("http://localhost:4050/api/ubwinshi/ubwinshi", {
        title: newTitle,
        summary: newSummary,
        details: newDetails,
      });
      setNewTitle("");
      setNewSummary("");
      setNewDetails("");
      // Fetch the updated list with the new item
      fetchUmwamiList();
      alert("ikenshavugo k'umwami created");
    } catch (error) {
      console.error("Error creating umwami:", error);
    }
  };
  



  const updateUmwami = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:4050/api/ubwinshi/ubwinshi/${id}`, updatedData);
      setEditingItemId(null);
      fetchUmwamiList();
    } catch (error) {
      console.error("Error updating umwami:", error);
    }
  };


  const deleteUmwami = (id) => {
    console.log("Deleting Umwami with ID:", id);
    axios.delete(`http://localhost:4050/api/ubwinshi/ubwinshi/${id}`)
      .then(() => {
        setSelectedItemId(null); // Clear the selected item after deletion
        fetchUmwamiList();
      })
      .catch((error) => {
        console.error("Error deleting Umwami:", error);
      });
  };
  



  return (
    <div className="mt-16">
      <div className={`collapsible ${isOpen ? 'open' : ''}`}>
        <div className="collapsible-header" onClick={toggleCollapsible}>
          <div className="header-content">
            <h1 class="title-font sm:text-2xl   text-xl font-medium text-gray-900 mb-3">Ubwinshi bw’abantu n’ibintu</h1>
            <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
          </div>
        </div>
        <hr /><br />
        {isOpen && (
          <div className="container mx-auto p-8">
            <div className="create-form bg-gray-100 p-4 rounded shadow mt-4">
              <h2 className="text-lg font-semibold mb-2">Create New Umwami</h2>
              <input
                type="text"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="input mb-2"
              />
              <input
                type="text"
                placeholder="Summary"
                value={newSummary}
                onChange={(e) => setNewSummary(e.target.value)}
                className="input mb-2"
              />
              <input
                type="text"
                placeholder="Details"
                value={newDetails}
                onChange={(e) => setNewDetails(e.target.value)}
                className="input mb-2"
              />
              <button
                className="button bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                onClick={createUmwami}
              >
                Create
              </button>
            </div>
            <div className="collapsible bg-gray-100 p-4 rounded shadow">
              <div className="collapsible-header cursor-pointer" onClick={toggleCollapsible}>
                {isOpen ? "Close" : "Open"}
              </div>
              {isOpen && (
                <div className="umwami-list">
                  {umwamiList.map((item, index) => (
                    <ReactCardFlip
                      key={index}
                      className="umwami-card"
                      isFlipped={flips[index]}
                      flipDirection="vertical"
                    >
                      <div className="card front-card p-4 bg-white rounded shadow">
                        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                        <p className="mb-4">{item.summary}</p>
                        <button
                          className="button bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
                          onClick={() => handleFlip(index)}
                        >
                          Show Details
                        </button>
                        <button
                          className="button bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-2"
                          onClick={() => setEditingItemId(item._id)}
                        >
                          Edit
                        </button>

                        <button
                          className="button bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                          onClick={() => setSelectedItemId(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="card back-card p-4 bg-white rounded shadow">
                        <p>{item.details}</p>
                        <button
                          className="button bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2"
                          onClick={() => handleFlip(index)}
                        >
                          Back
                        </button>
                      </div>
                    </ReactCardFlip>
                  ))}
                </div>
              )}
            </div>

            

            <div className="edit-modal">
              {editingItemId !== null && (
                <div className="edit-modal-content bg-white p-4 rounded shadow">
                  <h2 className="text-lg font-semibold mb-2">Edit Umwami</h2>
                  <input
                    type="text"
                    placeholder="Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="input mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Summary"
                    value={newSummary}
                    onChange={(e) => setNewSummary(e.target.value)}
                    className="input mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Details"
                    value={newDetails}
                    onChange={(e) => setNewDetails(e.target.value)}
                    className="input mb-2"
                  />
                  <button
                    className="button bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
                    onClick={() => updateUmwami(editingItemId, { title: newTitle, summary: newSummary, details: newDetails })}
                  >
                    Update
                  </button>
                  <button
                    className="button bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
                    onClick={() => setEditingItemId(null)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="delete-modal">
  {selectedItemId !== null && (
    <div className="delete-modal-content bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Confirm Deletion</h2>
      <p className="mb-4">Are you sure you want to delete this Umwami?</p>

      <button
  className="button bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2"
  onClick={() => {
    if (window.confirm("Are you sure you want to delete this Umwami?")) {
      deleteUmwami(selectedItemId);
    }
  }}
>
  Delete
</button>

      <button
        className="button bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
        onClick={() => setSelectedItemId(null)}
      >
        Cancel
      </button>
    </div>
  )}
</div>

          </div>
        )}
      </div>
      </div>
      );
}

      export default Ikenshkumwami;
