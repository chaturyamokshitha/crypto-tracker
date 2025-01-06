// components/Layout.js

import Services from './Services';
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>


        </div>
    );
};

export default Layout;
