import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/NewsCard";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import { formatDate } from "../utils/formatDate";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(false);
  const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
        try {
        const response = await fetch(
            `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setNewsItems(data.slice(0, 20));
        } catch (error) {
        console.error("Failed to fetch news:", error);
        setError(true); // Set error flag
        }
    };

    fetchNews();
    }, []);


  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Header />
        <div className="h-20" />
        <section className="mb-12">
          <h1 className="text-white text-4xl font-semibold">NEWS</h1>
        </section>

        <section className="pb-20">
            {error ? (
                <div className="text-white text-lg font-medium mt-12">
                Something went wrong. Please try again later.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {newsItems.map((item, index) => (
                    <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    >
                        <Card className="bg-transparent border-0 cursor-pointer transition-colors duration-300 hover:bg-[#2A283E] rounded-lg">
                            <CardContent className="flex flex-row sm:flex-col gap-4 p-4">
                            <img
                                className="w-24 h-24 sm:w-full sm:h-[179px] object-cover rounded-md flex-shrink-0"
                                src={item.image}
                                alt={item.headline}
                            />
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex items-center justify-between text-xs text-gray-400">
                                <span>{item.source}</span>
                                <span>{formatDate(item.datetime)}</span>
                                </div>
                                <h2 className="text-white text-sm font-medium leading-snug">
                                {item.headline}
                                </h2>
                            </div>
                            </CardContent>
                        </Card>
                    </a>
                ))}
                </div>
            )}
        </section>
      </div>
    </MainLayout>
  );
};

export default News;
