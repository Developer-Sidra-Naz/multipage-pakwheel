import Image from "next/image";
import Link from "next/link";
import c1 from "../public/assets/1.png";
import c2 from "../public/assets/2.png";
import c3 from "../public/assets/3.png";
import c4 from "../public/assets/4.png";

export default function FeaturedCars() {
    return (
        <div>
            <section className="bg-gray-200 py-10">
                <h2 className="font-bold text-3xl mx-32">Featured New Cars</h2>
                <div className="flex justify-center">
                    <ul className="flex gap-x-4 w-full max-w-6xl mt-8">
                        <li className="w-1/4 bg-white rounded-lg p-5 shadow-lg hover:shadow-xl text-center">
                            <Link href="bmw">
                                <Image src={c1} alt="BMW X1" className="w-full h-40 object-cover mb-4" /> 
                                <h2 className="text-blue-900 font-bold text-2xl">BMW X1</h2>
                                <p className="text-green-700">PKR 3.0 crore</p>
                                <p className="text-gray-500 font-semibold text-lg">Launching October 2024*</p>
                            </Link>
                        </li>

                        <li className="w-1/4 bg-white rounded-lg p-5 shadow-lg hover:shadow-xl text-center">
                            <Link href="honda">
                                <Image src={c2} alt="Honda City" className="w-full h-40 object-cover mb-4" /> 
                                <h2 className="text-blue-900 font-bold text-2xl">Honda City</h2>
                                <p className="text-green-700">PKR 46.5 - 58.5 Lacs</p>
                                <p className="text-gray-500 font-semibold text-lg">Launching October 2024*</p>
                            </Link>
                        </li>

                        <li className="w-1/4 bg-white rounded-lg p-5 shadow-lg hover:shadow-xl text-center">
                            <Link href="corolla">
                                <Image src={c3} alt="Toyota Corolla" className="w-full h-40 object-cover mb-4" /> 
                                <h2 className="text-blue-900 font-bold text-2xl">2024 Toyota Corolla</h2>
                                <p className="text-green-700">PKR 60.0 - 70.0 Lacs</p>
                                <p className="text-gray-500 font-semibold text-lg">Launching October 2024*</p>
                            </Link>
                        </li>

                        <li className="w-1/4 bg-white rounded-lg p-5 shadow-lg hover:shadow-xl text-center">
                            <Link href="bmwx7">
                                <Image src={c4} alt="BMW X7" className="w-full h-40 object-cover mb-4" /> 
                                <h2 className="text-blue-900 font-bold text-2xl">2024 BMW X7</h2>
                                <p className="text-green-700">PKR 2.9 crore</p>
                                <p className="text-gray-500 font-semibold text-lg">Launching October 2024*</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
