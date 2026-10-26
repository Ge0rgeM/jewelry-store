function TextUs() {
    return (
        <section id="contact" className="mt-12 flex flex-col gap-5 rounded-[18px] border border-(--line-color) bg-(--card-surface) p-5 text-(--text-light) sm:mt-20 sm:flex-row sm:items-center sm:p-10">
            <h2 className="text-[clamp(1.75rem,5vw,2rem)] font-bold">მოგვწერე</h2>
            <div className="flex w-full flex-wrap gap-3 sm:justify-end sm:gap-5">
                <a href="https://www.facebook.com/share/14v84X1A329/" target="_blank" className="">
                    <div className="text-(--text-light) font-bold border border-(--line-color) p-[12px_22px] rounded-4xl hover:bg-(--accent-color) hover:text-(--brand-background) transition-all duration-250 ease-in-out">
                        Facebook
                    </div>
                </a>
                <a href="https://www.instagram.com/mariams_shine" className="" target="_blank">
                    <div className="font-bold text-(--brand-background) border border-(--line-color) bg-(--accent-color) p-[12px_22px] rounded-4xl hover:bg-(--brand-background) hover:text-(--text-light) transition-all duration-250 ease-in-out">
                        Instagram
                    </div>
                </a>
            </div>
        </section>
    );
}

export default TextUs;