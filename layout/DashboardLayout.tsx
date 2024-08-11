import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useRouter } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const auth = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (!auth.isAuthenticated) {
            router.push('/login');
        }
    }, [auth]);

    return (
        <>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="row">
                <div className={`${sidebarOpen ? 'col-md-2' : ''}`}>
                    {sidebarOpen && (
                        <Sidebar />
                    )}
                </div>
                <div className={`${sidebarOpen ? 'col-md-10' : 'col-md-12'}`}>
                    <div className="p-5 h-100">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;