import { useTranslation } from 'react-i18next';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../api/auth.api";
import { useQueryClient } from "@tanstack/react-query";
import { FiLogOut } from "react-icons/fi";


const Navbar = ({setSidebarOpen}) => {

    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const handleLogout = () => {
    logoutAdmin();

    // امسح الكاش كله
    queryClient.clear();

    // روح لصفحة اللوجين
    navigate("/login");
    };


    return (
        <nav className="w-full shadow-md p-2 flex items-center justify-between bg-white">

            <div className="flex items-center">
                {/* Logo */}
                <Link to={"/"}>
                <img src="/logo.png" alt="logo" className="w-32 sm:w-40" />
                </Link>
            </div>

            <div className="flex items-center gap-2">
                {/* Toggle Lang */}
                <button
                    className={`text-text font-semibold sm:border-2 border-primary p-1 sm:p-2 rounded-xl`}
                    onClick={() => {
                        const newLang = i18n.language === "ar" ? "en" : "ar";
                        i18n.changeLanguage(newLang);
                        localStorage.setItem("lang", newLang);
                    }}
                >
                    {i18n.language === "ar" ? "EN" : "AR"}
                </button>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition"
                >
                    <FiLogOut className="text-lg" />
                    <span className='hidden sm:block'> تسجيل الخروج</span>
                </button>

                {/* Toggle Sidebar button for small screens */}
                <button
                    className="sm:hidden text-2xl mr-2"
                    onClick={() => setSidebarOpen(true)}
                >
                    <FiMenu />
                </button>
            </div>

        </nav>
    )
}

export default Navbar