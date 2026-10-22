import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="text-(--text-muted) mt-20 pb-5">
            <div className="container mx-auto">
                <p className="">
                    &copy; {new Date().getFullYear()} {t('copyright')}
                </p>
            </div>
        </footer>
    );
}

export default Footer;