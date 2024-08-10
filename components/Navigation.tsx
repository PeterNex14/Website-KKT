import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsOpen(false); // Close the sidebar after clicking a link
    };

    return (
        <div className="bg-red-700 flex w-full p-4 items-center justify-between">
            <img src="/logo_minahasa.png" alt="" className='w-[40px] h-[40px]' />
            <div className='flex-row gap-5 text-white hidden sm:flex'>
                <Link href="#header">Beranda</Link>
                <Link href="#sejarah_desa">Sejarah Desa</Link>
                <Link href="#potensi_desa">Potensi Desa</Link>
                <Link href="#statistika_desa">Statistika Desa</Link>
                <Link href="#perangkat_desa">Perangkat Desa</Link>
                <Link href="#peta_desa">Peta Desa</Link>
                <Link href="#kkt">KKT 139 UNSRAT</Link>
            </div>
            <button
                className="sm:hidden text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Hamburger menu icon */}
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>

            {/* Sidebar for mobile */}
            <div
                className={`${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } fixed top-0 right-0 w-full h-full bg-red-700 text-white p-5 transform transition-transform duration-300 ease-in-out sm:hidden`}
            >
                <button
                    className="text-white focus:outline-none mb-4"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Close icon */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
                <div className="flex flex-col gap-4">
                    <Link href="#header">
                        <div
                            className={`p-2 rounded ${activeLink === 'header' ? 'bg-red-900' : ''
                                }`}
                            onClick={() => handleLinkClick('header')}
                        >
                            Beranda
                        </div>
                    </Link>
                    <Link href="#sejarah_desa">
                        <div
                            className={`w-[390px] p-2 rounded ${activeLink === 'sejarah_desa' ? 'bg-red-900' : ''
                                }`}
                            onClick={() => handleLinkClick('sejarah_desa')}
                        >
                            Sejarah Desa
                        </div>
                    </Link>
                    <Link href="#potensi_desa">
                        <div
                            className={`w-[390px] p-2 rounded ${activeLink === 'potensi_desa' ? 'bg-red-900' : ''
                                }`}
                            onClick={() => handleLinkClick('potensi_desa')}
                        >
                            Potensi Desa
                        </div>
                    </Link>
                    <Link href="#statistika_desa">
                        <div
                            className={`w-[390px] p-2 rounded ${activeLink === 'statistika_desa' ? 'bg-red-900' : ''
                                }`}
                            onClick={() => handleLinkClick('statistika_desa')}
                        >
                            Statistika Desa
                        </div>
                    </Link>
                    <Link href="#perangkat_desa">
                        <div
                            className={`w-[390px] p-2 rounded ${activeLink === 'perangkat_desa' ? 'bg-red-900' : ''
                                }`}
                            onClick={() => handleLinkClick('perangkat_desa')}
                        >
                            Perangkat Desa
                        </div>
                    </Link>
                    <Link href="#peta_desa">
                        <div
                            className={`w-[390px] p-2 rounded ${activeLink === 'peta_desa' ? 'bg-red-900' : ''
                                }`}
                            onClick={() => handleLinkClick('peta_desa')}
                        >
                            Peta Desa
                        </div>
                    </Link>
                    <Link href="#kkt">
                        <div
                            className={`w-[390px] p-2 rounded ${activeLink === 'kkt' ? 'bg-red-900' : ''
                                }`}
                            onClick={() => handleLinkClick('kkt')}
                        >
                            KKT 139 UNSRAT
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
