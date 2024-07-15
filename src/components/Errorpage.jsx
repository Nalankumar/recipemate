
export default function Errorpage(){
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold py-2 md:text-9xl md:py-10">404</h1>
                    <h3 className='text-3xl font-semibold'>Not Found</h3>
                    <p className="py-6">
                        The resource requested could not be found on this server!
                    </p>
                </div>
            </div>
        </div>
    )
}