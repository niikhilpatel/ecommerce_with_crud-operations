import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [cards, setCards] = useState([]);
    const [cardData, setCardData] = useState({
        title: "",
        description: "",
        image: "",
        price: "",
        category: "",
        gear: ""
    });

    const [editingCardId, setEditingCardId] = useState(null);

    // Fetch Users
    const fetchUsers = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/admin/users");
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users", error);
        }
    };

    // Fetch Cards
    const fetchCards = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/cards");
            console.log(data);
            setCards(data); // ✅ fixed: setCards(data) not data.cards
        } catch (error) {
            console.error("Error fetching cards", error);
        }
    };

    useEffect(() => {
        fetchUsers();
        fetchCards();
    }, []);

    // Delete User
    const deleteUser = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await axios.delete(`http://localhost:5000/api/admin/user/${id}`);
                fetchUsers();
            } catch (error) {
                console.error("Error deleting user", error);
            }
        }
    };

    // Make User Admin
    const makeAdmin = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/admin/user/${id}/make-admin`);
            fetchUsers();
        } catch (error) {
            console.error("Error making user admin", error);
        }
    };

    // Handle Card Input Change
    const handleInputChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    // Handle Add/Update Card
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!cardData.title.trim()) {
            alert("Title is required!");
            return;
        }
        if (!cardData.category.trim()) {
            alert("Category is required!");
            return;
        }
        if (!cardData.gear.trim()) {
            alert("Gear is required!");
            return;
        }
    
        try {
            if (editingCardId) {
                await axios.put(`http://localhost:5000/api/cards/${editingCardId}`, cardData);
                alert("Card updated successfully!");
            } else {
                await axios.post("http://localhost:5000/api/cards", cardData);
                alert("Card added successfully!");
            }
    
            setCardData({
                title: "",
                description: "",
                image: "",
                price: "",
                category: "",
                gear: ""
            });
            setEditingCardId(null);
            fetchCards(); 
        } catch (error) {
            console.error("Error saving card:", error);
            alert("Failed to save card. Please try again.");
        }
    };
    


    // Edit Card
    const handleEditCard = (card) => {
        setCardData({
            title: card.title,
            description: card.description,
            image: card.image,
            price: card.price,
            category: card.category,
            gear: card.gear || ""
        });
        setEditingCardId(card._id);
    };

    // Delete Card
    const handleDeleteCard = async (id) => {
        if (window.confirm("Are you sure you want to delete this card?")) {
            try {
                await axios.delete(`http://localhost:5000/api/cards/${id}`);
                fetchCards();
            } catch (error) {
                console.error("Error deleting card", error);
            }
        }
    };

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>

            {/* Card Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={cardData.title}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={cardData.description}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={cardData.image}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={cardData.price}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Select Box for Category */}
                <select
                    value={cardData.category}
                    onChange={(e) => setCardData({ ...cardData, category: e.target.value })}
                >
                    <option value="">Select Category</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="kids">Kids</option>
                </select>

                <select
                    value={cardData.gear}
                    onChange={(e) => setCardData({ ...cardData, gear: e.target.value })}
                >
                    <option value="">Select Gear</option>
                    <option value="none">None</option>
                    <option value="running">Running</option>
                    <option value="training">Training</option>
                    <option value="football">Football</option>
                    <option value="basketball">Basketball</option>
                    <option value="studio">Studio</option>
                </select>


                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    {editingCardId ? "Update Card" : "Add Card"}
                </button>
            </form>



            {/* Users Table */}


            {/* Cards Table */}
            <h2 className="text-2xl font-bold mb-3">Cards</h2>
            <table className="w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-4 text-left font-semibold text-gray-700">Image</th>
                        <th className="p-4 text-left font-semibold text-gray-700">Title</th>
                        <th className="p-4 text-left font-semibold text-gray-700">Description</th>
                        <th className="p-4 text-left font-semibold text-gray-700">Price</th>
                        <th className="p-4 text-left font-semibold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((card) => (
                        <tr key={card._id} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                                <img src={card.image} alt="Card" className="h-16 w-16 object-cover rounded-md" />
                            </td>
                            <td className="p-4">{card.title}</td>
                            <td className="p-4">{card.description}</td>
                            <td className="p-4 font-medium text-green-600">Rs.{card.price}</td>
                            <td className="p-4">
                                <div className="flex gap-2">
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
                                        onClick={() => handleEditCard(card)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                                        onClick={() => handleDeleteCard(card._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default AdminDashboard;
