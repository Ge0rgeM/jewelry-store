import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ka" ? "en" : "ka");
    };

    return (
        <div className="flex">
            <div className="w-1/2">
                <div className="text-(--text-light) font-bold text-2xl tracking-[0.02em]">Mariam's Shine</div>
                <div className="text-(--text-muted) text-sm">მარიამს შაინი</div>
            </div>
            <nav className="w-1/2 flex flex-row justify-end items-center gap-3 text-(--text-muted)">
                <div className="hover:text-(--text-light) transition-all duration-200 ease-in-out">
                    <a href="#collection">{t("collection")}</a>
                </div>
                <div className="hover:text-(--text-light) transition-all duration-200 ease-in-out">
                    <a href="#how-to-order">{t("how_to_order")}</a>
                </div>
                <div className="hover:text-(--text-light) transition-all duration-200 ease-in-out">
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
            </nav>
        </div>
    );
}

export default Header;