import Footer from "../page/Footer";
import Navbar from "../page/Navbar";
import "./Food.css";
import { Link } from "react-router-dom";

export default function Food() {
    return (
        <>
            <div>
                <Navbar />
                <div className="Food_contant">
                    <div className="Food_contant_title">
                        <h1 id="Food_contant_title">Find the best food ever</h1>
                    </div>
                    <div className="Food_contant_item">
                        <div className="Food_contant_items">
                            <h2 className="Food_contant_Item_title">Dam view resort</h2>
                            <img className="Food_contant_img" src="https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/header310.jpg" alt="img" />
                            <h3 className="Food_contant_sub">About</h3>
                            <span className="Food_contant_about">
                                The table faces a breathtaking panorama.
                                Green hills stretch into the distance, creating a tranquil backdrop.
                                Trees dot the landscape, adding to the natural beauty.
                                A body of water—perhaps a river or lake—glistens under the overcast sky.
                                Houses resembling cottages perch atop the distant hills.
                            </span>
                        </div>
                        <div className="Food_contant_items">
                            <h2 className="Food_contant_Item_title">Dam view resort</h2>
                            <img className="Food_contant_img" src="https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/header310.jpg" alt="img" />
                            <h3 className="Food_contant_sub">About</h3>
                            <span className="Food_contant_about">
                                The table faces a breathtaking panorama.
                                Green hills stretch into the distance, creating a tranquil backdrop.
                                Trees dot the landscape, adding to the natural beauty.
                                A body of water—perhaps a river or lake—glistens under the overcast sky.
                                Houses resembling cottages perch atop the distant hills.
                            </span>
                        </div>
                        <div className="Food_contant_items">
                            <h2 className="Food_contant_Item_title">Dam view resort</h2>
                            <img className="Food_contant_img" src="https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/header310.jpg" alt="img" />
                            <h3 className="Food_contant_sub">About</h3>
                            <span className="Food_contant_about">
                                The table faces a breathtaking panorama.
                                Green hills stretch into the distance, creating a tranquil backdrop.
                                Trees dot the landscape, adding to the natural beauty.
                                A body of water—perhaps a river or lake—glistens under the overcast sky.
                                Houses resembling cottages perch atop the distant hills.
                            </span>
                        </div>
                        <div className="Food_contant_items">
                            <h2 className="Food_contant_Item_title">Dam view resort</h2>
                            <img className="Food_contant_img" src="https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/header310.jpg" alt="img" />
                            <h3 className="Food_contant_sub">About</h3>
                            <span className="Food_contant_about">
                                The table faces a breathtaking panorama.
                                Green hills stretch into the distance, creating a tranquil backdrop.
                                Trees dot the landscape, adding to the natural beauty.
                                A body of water—perhaps a river or lake—glistens under the overcast sky.
                                Houses resembling cottages perch atop the distant hills.
                            </span>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>

        </>
    )
}