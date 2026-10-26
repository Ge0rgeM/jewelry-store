function HowToOrder() {
    return (
        <section id="how-to-order" className="mt-12 text-(--text-light) sm:mt-20">
            <div className="">
                <h2 className="text-[clamp(1.75rem,5vw,2rem)] font-bold">როგორ შევუკვეთო</h2>
            </div>
            <div className="mt-5 grid w-full grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
                <div className="border-t-3 border-t-(--golden-color) pt-3">
                    <span className="text-(--golden-color)">1. </span>
                    აირჩიე მოდელი კოლექციიდან, დააჭირე ღილაკს შეუკვეთე,
                </div>
                <div className="border-t-3 border-t-(--golden-color) pt-3">
                    <span className="text-(--golden-color)">2. </span>
                    მოგვწერე Instagram-ზე Facebook-ზე ან Tiktok-ზე გამოგვიგზავნე სასურველი ნივთის ფოტო, რომელიც გსურთ
                </div>
                <div className="border-t-3 border-t-(--golden-color) pt-3">
                    <span className="text-(--golden-color)">3. </span>
                    დაგიდასტურებთ ხელმისაწვდომობას და შეგითანხმდებით მიტანა გადახდაზე.
                </div>
            </div>
        </section>
    );
}

export default HowToOrder;