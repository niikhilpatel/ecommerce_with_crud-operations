import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [cards, setCards] = useState([]);
    const [cardData, setCardData] = useState({
        title: "",
        description: "",
        image: "",
        price: ""
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
            setCards(data);
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
        if (window.confirm("Are you sure?")) {
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

    // Handle Card Form Submit (Add or Update)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingCardId) {
                // Update Card
                await axios.put(`http://localhost:5000/api/cards/${editingCardId}`, cardData);
                alert("Card updated successfully!");
            } else {
                // Create New Card
                await axios.post("http://localhost:5000/api/cards", cardData);
                alert("Card added successfully!");
            }
            setCardData({ title: "", description: "", image: "", price: "" });
            setEditingCardId(null);
            fetchCards();
        } catch (error) {
            console.error("Error saving card", error);
            alert("Failed to save card.");
        }
    };

    // Edit Card
    const handleEditCard = (card) => {
        setCardData({
            title: card.title,
            description: card.description,
            image: card.image,
            price: card.price
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-10">
                <input
                    name="image"
                    value={cardData.image}
                    onChange={handleInputChange}
                    className="border-2 border-black p-2"
                    placeholder="Input image link here"
                />
                <input
                    name="title"
                    value={cardData.title}
                    onChange={handleInputChange}
                    className="border-2 border-black p-2"
                    placeholder="Title"
                />
                <input
                    name="description"
                    value={cardData.description}
                    onChange={handleInputChange}
                    className="border-2 border-black p-2"
                    placeholder="Description"
                />
                <input
                    name="price"
                    value={cardData.price}
                    onChange={handleInputChange}
                    className="border-2 border-black p-2"
                    placeholder="Price"
                />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">
                    {editingCardId ? "Update Card" : "Add Card"}
                </button>
            </form>

            {/* Users Table */}
            

            {/* Cards Table */}
            <h2 className="text-2xl font-bold mb-3">Cards</h2>
            <table className="w-full border">
                <thead>
                    <tr className="border-b">
                        <th className="p-2">Image</th>
                        <th className="p-2">Title</th>
                        <th className="p-2">Description</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((card) => (
                        <tr key={card._id} className="border-b">
                            <td className="  p-2">
                                <img src={card.image} alt="Card" className="h-16 w-16 object-cover" />
                            </td>
                            <td className="p-2">{card.title}</td>
                            <td className="p-2">{card.description}</td>
                            <td className="p-2">Rs.{card.price}</td>
                            <td className="p-2 flex gap-2">
                                <button
                                    className="bg-yellow-500 text-white p-2 rounded"
                                    onClick={() => handleEditCard(card)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white p-2 rounded"
                                    onClick={() => handleDeleteCard(card._id)}
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
};

export default AdminDashboard;
