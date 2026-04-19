import { useTranslation } from 'react-i18next';
import { FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Sidebar = ({setSidebarOpen, sidebarOpen}) => {

    const { t } = useTranslation();

    return (
        <>
            {/* Sidebar for desktop  :-----------------------------*/}
            <aside className="hidden sm:block w-64 bg-white shadow-lg">
            <nav className="p-4 space-y-2">
                <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                    `block p-2 rounded hover:bg-gray-200 ${isActive ? 'bg-primary text-text' : ''}`
                }
                >
                {t('home')}
                </NavLink>

                <NavLink
                to="/dashboard/doctors"
                className={({ isActive }) =>
                    `block p-2 rounded hover:bg-gray-300 hover:text-primary ${isActive ? 'bg-primary text-text' : ''}`
                }
                >
                {t('doctors')}
                </NavLink>

                <NavLink
                to="/dashboard/devices"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                    `block p-2 rounded hover:bg-gray-300 hover:text-primary ${isActive ? 'bg-primary text-text' : ''}`
                }
                >
                {t('devices')}
                </NavLink>
            </nav>
            </aside>
            {/* Sidebar for desktop  :-----------------------------*/}


            {/* Sidebar overlay for mobile  :--------------------*/}
            <div
            className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity duration-300 sm:hidden ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setSidebarOpen(false)}
            ></div>
            {/* Sidebar overlay for mobile  :--------------------*/}

            {/* Mobile Sidebar from RIGHT  :-------------------- */}
            <aside
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 sm:hidden
                ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
            <div className="flex items-center justify-between p-4 border-b">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setSidebarOpen(false)} className="text-2xl">
                <FiX />
                </button>
            </div>
            <nav className="p-4 space-y-2">
                <NavLink
                to="/dashboard"
                end
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                    `block p-2 rounded hover:bg-gray-200 ${isActive ? 'bg-primary text-text' : ''}`
                }
                >
                {t('home')}
                </NavLink>

                <NavLink
                to="/dashboard/doctors"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                    `block p-2 rounded hover:bg-gray-300 hover:text-primary ${isActive ? 'bg-primary text-text' : ''}`
                }
                >
                {t('doctors')}
                </NavLink>

                <NavLink
                to="/dashboard/devices"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                    `block p-2 rounded hover:bg-gray-300 hover:text-primary ${isActive ? 'bg-primary text-text' : ''}`
                }
                >
                {t('devices')}
                </NavLink>
            </nav>
            </aside>
            {/* Mobile Sidebar from RIGHT  :-------------------- */}

            
        </>
    )
}

export default Sidebar