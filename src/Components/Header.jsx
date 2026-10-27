import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ka" ? "en" : "ka");
        setMenuOpen(false);
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-(--brand-background) px-4 py-4 sm:px-6 sm:py-5 lg:px-10 backdrop-blur-md ">
            <div className="max-w-[1120px] m-auto flex flex-row gap-4 max-md:items-center">
                <div className="w-1/3 max-md:w-full max-md:flex max-md:flex-col">
                    <div className="text-(--text-light) font-bold text-2xl tracking-[0.02em]">Mariam's Shine</div>
                    <div className="text-(--text-muted) text-sm">მარიამს შაინი</div>
                </div>
                <div className="w-2/3 flex justify-end items-center gap-x-4 gap-y-2 text-(--text-muted) max-md:hidden">
                    <div className="py-1 hover:text-(--text-light) transition-all duration-200 ease-in-out">
                        <a href="#collection">{t("collection")}</a>
                    </div>
                    <div className="py-1 hover:text-(--text-light) transition-all duration-200 ease-in-out">
                        <a href="#how-to-order">{t("how_to_order")}</a>
                    </div>
                    <div className="py-1 hover:text-(--text-light) transition-all duration-200 ease-in-out">
                        <a href="#contact">{t("contact")}</a>
                    </div>
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        aria-label={t("switch_language")}
                        className="border border-(--text-muted) px-3 py-1 text-sm hover:border-(--text-light) hover:text-(--text-light) transition-colors"
                    >
                        {t("switch_lang")}
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    className="ml-auto hidden text-(--text-light) text-2xl max-md:block"
                >
                    {menuOpen ? "×" : "☰"}
                </button>
                <div
                    className={`fixed h-screen inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
                    onClick={closeMenu}
                    aria-hidden="true"
                />
                <nav
                    aria-label="Mobile navigation"
                    className={`fixed right-0 top-0 z-50 flex h-screen w-1/2 flex-col gap-6 bg-(--brand-background) p-6 pt-20 text-(--text-muted) shadow-xl transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <a href="#collection" onClick={closeMenu} className="hover:text-(--text-light)">{t("collection")}</a>
                    <a href="#how-to-order" onClick={closeMenu} className="hover:text-(--text-light)">{t("how_to_order")}</a>
                    <a href="#contact" onClick={closeMenu} className="hover:text-(--text-light)">{t("contact")}</a>
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        aria-label={t("switch_language")}
                        className="self-start border border-(--text-muted) px-3 py-1 text-sm hover:border-(--text-light) hover:text-(--text-light)"
                    >
                        {t("switch_lang")}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;