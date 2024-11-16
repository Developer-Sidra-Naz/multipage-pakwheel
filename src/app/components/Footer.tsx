import Link from "next/link";
import Image from "next/image"; 
import FB from "../public/assets/fb.png";
import youtube from "../public/assets/youtube.png"
import insta from "../public/assets/insta.png"
import twit from "../public/assets/twitter.png"

export default function Footer() {
    return (
        <div>
            <div className="bg-gradient-to-t from-black to-blue-500 text-center p-2">
                <div className="flex  justify-center">
                    <ul className="flex">
                        <li className="m-2">
                            <Link href="https://www.facebook.com/search/top/?q=pakwheels"> 
                                <Image src={FB} alt="Facebook Icon" className="h-12 w-12"/> 
                            </Link>
                        </li>

                        <li className="m-2">
                            <Link href="https://www.youtube.com/@PakWheels">
                            <Image src={youtube} alt="Youtube Icon" className="h-12 w-12"/> 
                            </Link>
                        </li>

                        <li className="m-2">
                            <Link href="https://www.instagram.com/pakwheels/?hl=en">
                            <Image src={insta} alt="Insta Icon" className="h-12 w-12"/> 
                            </Link>
                        </li>

                        <li className="m-2">
                            <Link href="https://twitter.com">
                            <Image src={twit} alt="Twitter Icon" className="h-12 w-12"/> 
                            </Link>
                        </li>


                      
                    </ul>
                </div>

                <div>
                    <p className="text-white">Copyrights reserved by Sidra naz | 2024  (testWebsite)</p>
                </div>
            </div>
        </div>
    );
}
