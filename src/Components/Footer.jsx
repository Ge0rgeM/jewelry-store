import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="mt-12 pb-5 text-(--text-muted) sm:mt-20">
            <div className="container mx-auto">
                <p className="">
                    &copy; {new Date().getFullYear()} {t('copyright')}
                </p>
            </div>
        </footer>
    );
}

export default Footer;