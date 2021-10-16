
const Layout = ({ children }) => {
    return (
        <div className="layout">
            {/* <Header /> */}
            <div className="bg-gray-100 min-h-screen grid place-items-center">
                <div className="max-w-full w-96 relative">
                    {children}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Layout;