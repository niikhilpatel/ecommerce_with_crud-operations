import React from "react";

const EditCardForm = ({ formData, setFormData, handleUpdate, cancelEdit }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="mb-10 p-5 border-2 rounded-lg">
            <h2 className="text-2xl font-bold mb-5">Edit Card</h2>
            <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="border-2 border-black p-2 w-full mb-2"
                placeholder="Input image link here"
            />
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border-2 border-black p-2 w-full mb-2"
                placeholder="Title"
            />
            <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border-2 border-black p-2 w-full mb-2"
                placeholder="Description"
            />
            <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border-2 border-black p-2 w-full mb-2"
                placeholder="Price"
            />
            <div className="flex space-x-4">
                <button
                    onClick={handleUpdate}
                    className="bg-green-500 text-white p-2 rounded w-1/2"
                >
                    Update
                </button>
                <button
                    onClick={cancelEdit}
                    className="bg-gray-500 text-white p-2 rounded w-1/2"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditCardForm;
