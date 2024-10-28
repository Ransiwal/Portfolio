import React from 'react';

function App() {
    return (
        <div className="h-screen" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2019/03/03/20/23/background-4032775_640.png")' }}>
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-white text-center mb-8">My Portfolio</h1>
                <div className="mt-25 grid grid-cols-1  lg:grid-cols-3 gap-5">

                    <div className=" border-white border-4 max-w-md mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <a href="https://react-nike-front-end.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="w-full h-48 object-cover" src="https://res.cloudinary.com/dmubfrefi/image/private/s--X0LLoOBX--/c_crop,h_2728,w_4090,x_334,y_0/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAV6Bs" alt="Nike Shoes" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-800">Nike Frontend Showcase</h2>
                                <p className="mt-2 text-gray-600">
                                    The Nike Frontend Showcase Page is a modern and visually captivating website that highlights my skills in frontend development.
                                </p>
                            </div>
                        </a>
                    </div>

                    <div>
                    </div>

                    <div className="border-white border-4 max-w-sm mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <a href="https://front-end-mocha-ten-97.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="w-full h-48 object-cover" src="https://yt3.googleusercontent.com/VML_UZjchhE9vgVq2G8UYwfOW667qkg0EW7RC97JuNah3ZXwIfc8p07GenNX66nqezEvW2qR3Q=s900-c-k-c0x00ffffff-no-rj" alt="Voice Controlled News" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-800">Dynamic Ecommerce Frontend</h2>
                                <p className="mt-2 text-gray-600">
                                  This is advanced  ecommerce websoite that used dummyjson fro api calls and redux store is used to dhynamically call backend and get the data
                                </p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
