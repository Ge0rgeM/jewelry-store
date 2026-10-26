import { useTranslation } from "react-i18next";

function Intro() {
    const { t } = useTranslation();
    return (
        <section className="mt-12 sm:mt-20">
            <div className="flex w-full flex-col gap-6 md:w-1/2 sm:gap-10">
                <div className="w-full text-[clamp(2rem,6vw,3.125rem)] leading-[1.2] font-bold text-(--text-light)">
                    {t('title')}
                </div>
                <div className="text-[clamp(1rem,2.5vw,1.125rem)] leading-[1.5] text-(--text-muted)">
                    {t('description')}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                    <a href="#collection" className="inline-flex items-center justify-center rounded-4xl border border-(--line-color) bg-(--accent-color) px-5 py-3 text-center font-semibold text-(--brand-background) transition-all duration-250 ease-in-out hover:bg-(--brand-background) hover:text-(--text-light)">
                        იხილე კოლექცია
                    </a>
                    <a href="#contact" className="inline-flex items-center justify-center rounded-4xl border border-(--line-color) px-5 py-3 text-center text-(--text-light) transition-all duration-250 ease-in-out hover:bg-(--accent-color) hover:text-(--brand-background)">
                        მოგვწერე
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Intro;