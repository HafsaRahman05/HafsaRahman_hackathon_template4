import React from 'react';
import chair4 from "./chair4.png";
import chair5 from "./chair5.png";
import chair6 from "./chair6.png";
import chair7 from "./chair7.png";
import chair8 from "./chair8.png";
import chair10 from "./chair10.png";
import Voucher from "./voucher.png";
import Voucher2 from "./voucher2.png";
import chair9 from "./chair9.png";


const TrendingProducts = () => {
    return (
        <div className="flex items-center justify-center bg-white py-20">
            <div className="w-[80%] lg:w-[1177px]">
                <h2 className="text-[#3F509E] text-3xl font-bold text-center mb-16">Trending Products</h2>
                <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-12 mb-20">
                    {/* Product 1 */}
                    <div className="group relative shadow-custom w-[270px] h-[350px] flex items-center justify-center flex-col">
                        <div className="bg-gray-200 flex justify-center items-center p-6 h-[244px] w-[247px] relative">
                            <img
                                alt="Trending Product"
                                loading="lazy"
                                width="200"
                                height="200"
                                decoding="async"
                                className="object-contain transition-all duration-300 group-hover:opacity-90"
                                srcSet={chair4}
                                src={chair4}
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
                            <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
                            <span className="text-gray-500 line-through ml-2">$42.00</span>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="group relative shadow-custom w-[270px] h-[350px] flex items-center justify-center flex-col">
                        <div className="bg-gray-200 flex justify-center items-center p-6 h-[244px] w-[247px] relative">
                            <img
                                alt="Trending Product"
                                loading="lazy"
                                width="200"
                                height="200"
                                decoding="async"
                                className="object-contain transition-all duration-300 group-hover:opacity-90"
                                srcSet={chair5}
                                src={chair5}
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
                            <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
                            <span className="text-gray-500 line-through ml-2">$42.00</span>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="group relative shadow-custom w-[270px] h-[350px] flex items-center justify-center flex-col">
                        <div className="bg-gray-200 flex justify-center items-center p-6 h-[244px] w-[247px] relative">
                            <img
                                alt="Trending Product"
                                loading="lazy"
                                width="200"
                                height="200"
                                decoding="async"
                                className="object-contain transition-all duration-300 group-hover:opacity-90"
                                srcSet={chair6}
                                src={chair6}
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
                            <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
                            <span className="text-gray-500 line-through ml-2">$42.00</span>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="group relative shadow-custom w-[270px] h-[350px] flex items-center justify-center flex-col">
                        <div className="bg-gray-200 flex justify-center items-center p-6 h-[244px] w-[247px] relative">
                            <img
                                alt="Trending Product"
                                loading="lazy"
                                width="200"
                                height="200"
                                decoding="async"
                                className="object-contain transition-all duration-300 group-hover:opacity-90"
                                srcSet={chair7}
                                src={chair7}
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
                            <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
                            <span className="text-gray-500 line-through ml-2">$42.00</span>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-screen-xl lg:w-[1177px] mx-auto grid grid-cols-1 place-items-center md:flex md:items-center md:justify-between md:flex-wrap gap-6">
                    {/* Discount Block 1 */}
                    <div className="bg-[#fff6fb] p-8 flex flex-col justify-between relative w-full md:w-[420px] h-[270px] shadow-custom">
                        <div className="top-[34px] left-6 w-[269px] h-[56px]">
                            <h3 className="text-[#151857] text-2xl font-semibold font-sans text-center mb-4">
                                23% Off in all products
                            </h3>
                            <button className="text-pink-600 underline text-sm font-semibold text-center font-sans">Shop Now</button>
                        </div>
                        <img
                            alt="Voucher Image"
                            loading="lazy"
                            width="200"
                            height="200"
                            decoding="async"
                            className="absolute top-20 left-[200px] object-contain"
                            srcSet={Voucher}
                            src={Voucher}
                        />
                    </div>

                    {/* Discount Block 2 */}
                    <div className="bg-[#eeeffb] p-8 flex flex-col justify-between relative w-full md:w-[420px] h-[270px] shadow-custom">
                        <div className="top-[34px] left-6 w-[269px] h-[56px]">
                            <h3 className="text-[#151857] text-2xl font-semibold font-sans text-center mb-4">
                                23% Off in all products
                            </h3>
                            <button className="text-pink-600 underline text-sm font-semibold text-center font-sans">Shop Now</button>
                        </div>
                        <img
                            alt="Voucher Image"
                            loading="lazy"
                            width="200"
                            height="200"
                            decoding="async"
                            className="absolute bottom-6 right-2 object-contain"
                            srcSet={Voucher2}
                                src={Voucher2}
                        />
                    </div>

                    {/* Exclusive Products Block */}
                    <div className="flex flex-col items-center justify-between h-[270px] w-[267px]">
                        <div className="bg-white flex items-center justify-between w-[267px] h-[74px] rounded">
                            <div className="w-[107px] h-[74px] bg-[#f6f5f8] flex items-center justify-center">
                                <img
                                    alt="Exclusive Product"
                                    loading="lazy"
                                    width="64"
                                    height="71"
                                    decoding="async"
                                    className="object-contain"
                                    srcSet={chair9}
                                    src={chair9}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#3F509E] font-semibold text-sm">Exclusive Seat Chair</h3>
                                <p className="text-[#3F509E] font-semibold text-sm inline-block">$32.00</p>
                            </div>
                        </div>

                        <div className="bg-white flex items-center justify-between w-[267px] h-[74px] rounded">
                            <div className="w-[107px] h-[74px] bg-[#f6f5f8] flex items-center justify-center">
                                <img
                                    alt="Exclusive Product"
                                    loading="lazy"
                                    width="64"
                                    height="71"
                                    decoding="async"
                                    className="object-contain"
                                    srcSet={chair10}
                                    src={chair10}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#3F509E] font-semibold text-sm">Exclusive Seat Chair</h3>
                                <p className="text-[#3F509E] font-semibold text-sm inline-block">$32.00</p>
                            </div>
                        </div>

                        <div className="bg-white flex items-center justify-between w-[267px] h-[74px] rounded">
                            <div className="w-[107px] h-[74px] bg-[#f6f5f8] flex items-center justify-center">
                                <img
                                    alt="Exclusive Product"
                                    loading="lazy"
                                    width="64"
                                    height="71"
                                    decoding="async"
                                    className="object-contain"
                                    srcSet={chair8}
                                    src={chair8}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#3F509E] font-semibold text-sm">Exclusive Seat Chair</h3>
                                <p className="text-[#3F509E] font-semibold text-sm inline-block">$32.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrendingProducts;
