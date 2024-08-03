import React from 'react'

const LoginPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-4xl shadow-2xl">
                <div className="w-full md:w-1/2  bg-white p-8 md:p-12 lg:p-16">
                    <div className="text-center mb-10">
                        {/* <h4 className='italic mb-5'>Media Mate</h4> */}
                        <h1 className="text-3xl font-bold">Welcome Back!</h1>
                        <p className="text-gray-600 text-sm">Please enter your details</p>
                    </div>
                    {/* <div className="flex justify-center  border py-2 mt-2 rounded-md">
                        <button className="flex items-center space-x-4 justify-center  rounded-full">
                            <img className=' w-5 h-5' src="icons/google.svg" alt="Google" />
                            <span className='text-sm'>Sign in with Google</span>
                        </button>
                    </div> */}
                    {/* <div className="flex items-center justify-center my-2">
                        <span className="text-gray-400">or</span>
                    </div> */}
                    <form>
                        <div className="mb-4">
                            {/* <label htmlFor="email" className="block text-left text-xs text-gray-700">Email Address</label> */}
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your username or email"
                                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-2">
                            {/* <label htmlFor="password" className="block text-left text-xs text-gray-700">Password</label> */}
                            <input
                                type="password"
                                id="password"
                                placeholder="•••••••••••••"
                                className="w-full px-4 py-2 border text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-10">
                            {/* <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="text-blue-500 focus:ring-blue-500"
                                />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me</label>
                            </div> */}
                            <a href="#" className="text-xs text-blue-500">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="mt-8 text-xs text-center text-gray-600">
                        By continuing, you agree to mediamate <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
                    </p>
                </div>
                <div className="hidden md:block md:w-1/2 bg-cover" style={{ backgroundImage: 'url(/loginPageBanner.png)' }}></div>
            </div>
        </div>
    )
}

export default LoginPage