import Link from "next/link";

const Payment = () => {
    return (
        <div className="flex justify-center items-center p-10">
            <form className="bg-white shadow-md rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Payment Form</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="border border-gray-300 rounded w-full p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="border border-gray-300 rounded w-full p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        required
                        className="border border-gray-300 rounded w-full p-2"
                    />
                </div>
<Link href="thanks">  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 rounded w-full hover:bg-blue-700"
                >
                    Submit
                </button></Link>
              
            </form>
        </div>
    );
};

export default Payment;
