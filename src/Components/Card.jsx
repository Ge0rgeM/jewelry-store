function Card({ item, showDetails, setShowDetails }) {
    
    return (
        <article className="w-full max-w-62 overflow-hidden rounded-[18px] border border-(--line-color) bg-(--card-surface)">
            <div className="">
                <img src={item.img} alt={item.name_ge} className="aspect-square w-full object-contain" />
            </div>
            <div className="">
                <div className="px-3 py-2">
                    <div className="text-[20px] font-semibold text-(--text-light)">
                        {item.name_ge}
                    </div>
                    <div className="text-[17px] mt-2 text-(--golden-color)">
                        {item.price}₾
                    </div>
                </div>
                <div 
                onClick={() => {
                    setShowDetails(!showDetails);
                }} 
                className="cursor-pointer flex justify-center font-semibold text-(--brand-background) border border-(--line-color) bg-(--accent-color) p-[8px_0px] m-3 rounded-[18px] hover:bg-(--brand-background) hover:text-(--text-light) transition-all duration-250 ease-in-out">
                    შეუკვეთე
                </div>
                <div className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-in-out ${showDetails ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="min-h-0 overflow-hidden">
                        <a href="#contact">
                            <div className="text-(--text-light) flex justify-center border border-(--line-color) p-[8px_0px] m-3 rounded-[10px] hover:bg-(--line-color-light) transition-all duration-250 ease-in-out">
                                    Facebook
                            </div>
                        </a>
                        <a href="#contact">
                            <div className="text-(--text-light) flex justify-center border border-(--line-color) p-[8px_0px] m-3 rounded-[10px] hover:bg-(--line-color-light) transition-all duration-250 ease-in-out">
                                    Instagram
                            </div>
                        </a>
                        <div className="text-(--text-muted) text-[13px] text-center w-7/10 mb-2 m-auto">
                            გამოგვიგზავნე ამ ნივთის ფოტო ან სქრინშოტი
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Card;