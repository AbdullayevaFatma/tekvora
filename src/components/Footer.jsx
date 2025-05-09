import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl font-bold text-white">
              Subscribe Our Newsletter
            </h2>
            <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                type="text"
                placeholder="Enter Email"
                className="py-4 px-4 rounded shadow-md w-full outline-none"
              />
              <button className=" py-3 px-4 bg-orange-500/75 text-white absolute right-0 top-0 bottom-0">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-8 ">
        <div className="container mx-auto px-4">
          <div className="text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              <p className="font-bold text-orange-500/75 text-xl tracking-widest">
                TEKVORA
              </p>
              <div className="flex items-center gap-8 mt-5 justify-evenly">
                <Facebook
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Twitter
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Youtube
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Instagram
                  size={40}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4 ">Pages</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4 ">Categories</h2>
              <ul>
                <li>
                  <Link to="/">Smartphones</Link>
                </li>
                <li>
                  <Link to="/">Laptops</Link>
                </li>
                <li>
                  <Link to="/">Headphones</Link>
                </li>
                <li>
                  <Link to="/">Smartwatches</Link>
                </li>
                <li>
                  <Link to="/">Accessories</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4 ">Contact</h2>
              <p>70 Kızılay Square, Cankaya , Ankara, Turkey</p>
              <p>+90530 555 55 55</p>
              <p>+90530 555 55 55</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-4 text-white">
        <p>Copyright &copy; 2025 Tekvora </p>
      </div>
    </footer>
  );
};

export default Footer;
