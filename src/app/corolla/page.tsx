import Image from "next/image";
import c3 from "../public/assets/3.png";
import Link from "next/link";

export default function CarDetail() {
    return (
        <div>
            <section className="py-10">
                <div className="flex flex-col items-center text-center">
                    <p className="m-3 text-2xl font-bold">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</p>
                    <div className="flex justify-center mb-4">
                        <Image src={c3} alt="BMW X1" className="max-w-md h-auto" />
                    </div>
                    <ul className="flex">
                        <li>
                            <Link href="">
                            <button className="bg-blue-500 text-white p-3 m-3 hover:bg-blue-700">
                            Book a Test Drive
                            </button>
                           </Link>
                        </li>

                        <li>
                            <Link href="">
                            <button className="bg-blue-500 text-white p-3 m-3 hover:bg-blue-700">
                            Request a Bank Finance
                            </button>
                           </Link>
                        </li>

                        <li>
                            <Link href="">
                            <button className="bg-blue-500 text-white p-3 m-3 hover:bg-blue-700">
                            Visit Place
                            </button>
                           </Link>
                        </li>

                        <li>
                            <Link href="">
                            <button className="bg-blue-500 text-white p-3 m-3 hover:bg-blue-700">
                           Car Inspection
                            </button>
                           </Link>
                        </li>
                    </ul>

                    <p className="m-3 text-2xl ">Vehicle Description</p>
                    <div>
                        <ul className="flex">
                            <li className="mx-4">
                                <p className=""> <b>Number of Doors </b>
                                 Four Doors
                                 </p>
                            </li>

                            <li className="mx-4">
                                <p className=""> <b>Engine </b>
                              1299cc to 1800cc
                                 </p>
                            </li>

                            <li className="mx-4">
                                <p className=""> <b>Condition </b> 
                               9/10
                                </p>
                            </li>

                            <li className="mx-4">
                                <p className=""> <b>Driven </b> 
                               15,000km
                                </p>
                            </li>

                            <li className="mx-4">
                                <p className=""> <b>Transmission</b> 
                                Auto & Manual 
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="m-3">
                        <button className="shadow-lg py-4 px-5 text-2xl font-bold m-2">PKR 60.0 - 70.0 lacs</button>
                        
                        <Link href="payment">
                        <button className="shadow-lg py-4 px-5 text-1xl bg-blue-500 m-2 hover:bg-blue-800 text-white">Payment</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
