import { Link, useNavigate } from "react-router-dom"

const Index = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        //success
        navigate('/')
    }
    return (
        <>
            <div className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src="https://images.unsplash.com/photo-1625571705670-38fc39c923ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                    <div className="w-full h-100">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Login to your IOT system</h1>
                        <form onSubmit={handleSubmit} className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block text-gray-700">Username</label>
                                <input type="text" placeholder="Enter Username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                            </div>

                            <div className="text-right mt-2">
                                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                            </div>

                            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
                        </form>
                        <hr className="my-6 border-gray-300 w-full" />
                        <p className="mt-8">Need an account? <Link to="/signup" class="text-blue-500 hover:text-blue-700 font-semibold">Create an account</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index