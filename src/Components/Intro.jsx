import { useTranslation } from "react-i18next";

function Intro() {
    const { t } = useTranslation();
    return (
        <div className="mt-20">
            <div className="w-[50%] flex flex-col gap-10">
                <div className="leading-[1.2] w-full text-[50px] font-bold text-(--text-light)">
                    {t('title')}
                </div>
                <div className="leading-[1.2] text-(--text-muted) text-[18px]">
                    {t('description')}
                </div>
                <div className="flex gap-4">
                    <a href="#collection" className="">
                        <div className="font-semibold text-(--brand-background) border border-(--line-color) bg-(--accent-color) p-[12px_22px] rounded-4xl hover:bg-(--brand-background) hover:text-(--text-light) transition-all duration-250 ease-in-out">
                            იხილე კოლექცია
                        </div>
                    </a>
                    <a href="#contact">
                        <div className="text-(--text-light) border border-(--line-color) p-[12px_22px] rounded-4xl hover:bg-(--accent-color) hover:text-(--brand-background) transition-all duration-250 ease-in-out">
                                მოგვწერე
                        </div>
                    </a>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
}

export default Intro;