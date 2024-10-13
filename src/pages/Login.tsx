import backgroundImage from "/images/bg.jpg";

function Login(){

    return(

        <div className="content-center items-center min-h-screen py-10 px-5 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="max-w-[600px] mx-auto p-8 shadow-xl rounded-lg bg-slate-300">
                <div className="text-center">
                <h1 className="text-2xl font-semibold">Login</h1>
                </div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="" className="mb-1 block">Username</label>
                        <input type="text" className="w-full p-2 border border-gray-200 rounded-lg" placeholder="Enter your username"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="mb-1 block">Password</label>
                        <input type="password" className="w-full p-2 border border-gray-200 rounded-lg" placeholder="Enter your password"/>
                    </div>

                    {/* {error && <div className="text-sm text-red-500">{error}</div>} */}

                    <div className="mt-5">
                        <button type ="button" className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white hover:bg-gray-950" >Login</button>
                    </div>
                    <div className="mt-5">
                        <button className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white hover:bg-gray-950" >Register</button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Login;