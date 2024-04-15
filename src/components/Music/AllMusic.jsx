import React from 'react';

const AllMusic = () => {
    return (
        <div>
            <div className="text-black text-2xl font-medium font-mono mt-5">All Music</div>
            <div className="flex flex-wrap gap-10 w-[68%] mx-auto mt-20">

                <div className="card">
                    <div className="top">
                        <div className="pfp">
                            <div className="playing">
                                <div className="greenline line-1"></div>
                                <div className="greenline line-2"></div>
                                <div className="greenline line-3"></div>
                                <div className="greenline line-4"></div>
                                <div className="greenline line-5"></div>
                            </div>
                        </div>
                        <div className="texts">
                            <p className="title-1">Soldiers Rage</p>
                            <p className="title-2">Tha Mechanic</p>
                        </div>
                    </div>
                    <button
                        className="mt-5 text-black rounded font-medium font-serif bg-white px-4 py-1 hover:bg-gray-600 hover:text-white hover:border-amber-50 duration-500">Details
                    </button>
                </div>

            </div>


        </div>
    );
};

export default AllMusic;