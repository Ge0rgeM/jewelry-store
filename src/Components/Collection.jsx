import { useEffect, useState } from "react";
import Card from "./Card.jsx";

function Collection() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    
    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}Items.json`)
            .then((response) => {
                if (!response.ok) throw new Error("Could not load Items.json");
                return response.json();
            })
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    const collectionItems = Array.isArray(items.items) ? items.items : [];
    const totalPages = Math.ceil(collectionItems.length / itemsPerPage);
    const paginatedItems = collectionItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return(
        <section id="collection" className="mt-12 text-(--text-light) sm:mt-20">
            <div className="mb-5 text-[clamp(1.75rem,5vw,2rem)] font-bold">
                <h1>კოლექცია</h1>
            </div>
            <div className="mb-5">
                <label className="flex flex-wrap items-center gap-2">
                    <span>პროდუქტების რაოდენობა:</span>
                    <select
                        value={itemsPerPage}
                        onChange={(event) => {
                            setItemsPerPage(Number(event.target.value));
                            setCurrentPage(1);
                        }}
                        className="rounded-lg border border-(--line-color-light) bg-(--card-surface) px-3 py-2"
                    >
                        {[4, 8, 12, 16].map((count) => (
                            <option key={count} value={count}>{count}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15.5rem),1fr))] gap-4">
                {
                    loading ? <p>Loading...</p> : 
                    error ? <p>{error}</p> : 
                    paginatedItems.map((item) => (
                        <Card key={item.id} item={item} showDetails={showDetails} setShowDetails={setShowDetails} />
                    ))
                }
            </div>
            {!loading && !error && totalPages > 1 && (
                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center disabled:opacity-50 text-[20px] bg-(--card-surface) hover:bg-(--brand-backkground) border border-(--line-color-light) rounded-full w-10 h-10 cursor-pointer"
                    >
                        ‹
                    </button>
                    <span>{currentPage} / {totalPages}</span>
                    <button
                        type="button"
                        onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center disabled:opacity-50 text-[20px] bg-(--card-surface) hover:bg-(--brand-backkground) border border-(--line-color-light) rounded-full w-10 h-10 cursor-pointer"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    )
}

export default Collection