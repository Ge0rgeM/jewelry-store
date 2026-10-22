function TextUs() {
    return (
        <div className="text-(--text-light) mt-20 p-10 flex flex-row gap-5 bg-(--card-surface) border border-(--line-color) rounded-[18px]">
            <div className="text-[32px] font-bold ">მოგვწერე</div>
            <div className="w-full flex justify-end gap-5">
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
        </div>
    );
}

export default TextUs;