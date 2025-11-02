const Footer = () => {
    return (
        <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded mt-5">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Tentang Kami</a>
                <a className="link link-hover">Kontak</a>
                <a className="link link-hover">Instagram</a>
                 <a className="link link-hover">Tiktok</a>
            </nav>

            <aside>
                <p className="font-bold text-lg">
                    PPLG 2 - <span className="gradient-text">eseftwo</span>
                </p>
                <p>Pengembangan Perangkat Lunak dan Gim</p>
                <p className="text-sm mt-2">Copyright © 2024 - All right reserved</p>
            </aside>
        </footer>
    )
}

export default Footer
