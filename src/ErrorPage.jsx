const ErrorPage = () => {
    return (
        <div className="h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
            <p className="mt-3 text-lg text-gray-800">The page you are looking for does not exist.</p>
            <p className="mt-2 text-lg text-gray-800">Please check the URL and try again.</p>
        </div>
    );
};

export default ErrorPage;
