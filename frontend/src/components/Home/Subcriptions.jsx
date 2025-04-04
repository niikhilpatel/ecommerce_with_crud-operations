import React, { useState } from "react";

const Subscriptions = () => {
    const [data, setData] = useState({
        email: "",
        status: "initial", // "loading" | "failure" | "sent"
    });

    function handleSubmit(event) {
        event.preventDefault();
        setData((current) => ({ ...current, status: "loading" }));

        setTimeout(() => {
            setData({ email: "", status: "sent" });
        }, 1500);
    }

    return (
        <div className=" mx-10 my-10 p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="p-10 flex justify-between space-x-4">
                <div className="flex-1">

                    <label className=" text-4xl font-semibold text-gray-700">
                        Subscribe to Newsletter to get <span className="text-green-500">product</span> update

                    </label>
                    <p className="mt-2 text-purple-500 text-ms">NOTE : TERMS AND CONDITIONS APPLY </p>
                </div>

                <div className="relative flex flex-col flex-1 gap-10 p-10">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={data.email}
                        onChange={(e) =>
                            setData({ email: e.target.value, status: "initial" })
                        }
                        className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        disabled={data.status === "loading"}
                        className={`px-4 py-3 bg-purple-600 text-white rounded-r-md ${data.status === "loading" ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                            }`}
                    >
                        {data.status === "loading" ? "Loading..." : "Subscribe"}
                    </button>
                </div>

                {data.status === "failure" && (
                    <p className="text-red-500 text-sm">Oops! Something went wrong, please try again.</p>
                )}
                {data.status === "sent" && (
                    <p className="text-green-500 text-sm">You are all set!</p>
                )}
            </form>
        </div>
    );
};

export default Subscriptions;
