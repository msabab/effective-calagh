
const Layout = ({ children }) => {
    return (
        <div className="bg-gray-200 min-h-screen grid place-items-center">
            <div className="max-w-full w-96 relative bg-gray-100 p-4 rounded-lg">
                {children}
            </div>
        </div>
    );
}

export default Layout;