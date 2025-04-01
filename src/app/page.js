import ThemeToggle from "@/components/theme-toggle";
import "./globals.css";

export default function Home() {
  const data = [
    {
      title: "Best of the day",
      category: "Shots featured",
    },
    {
      title: "Featured streams",
      category: "Watch livestreams",
    },
    {
      title: "Subscriptions",
      category: "Premium content",
    },
    {
      title: "Creative feed",
      category: "Premium feed",
    },
  ];
  return (
    <main>
      <ThemeToggle />
      <ul class="p-8 bg-white rounded-xl dark:bg-black dark:text-purple-400">
        {data.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </ul>
    </main>
  );
}

function Card({ title, category }) {
  return (
    <li class="p-4 max-w-[400px] hover:bg-slate-100 hover:rounded-lg">
      <a href="#0" class="flex flex-row items-center">
        <div className="aspect-square w-10 h-10 mr-8 rounded-md bg-[#cbd5e1]"></div>
        <div>
          <p class="font-bold">{title}</p>
          <small class="text-[#73767a]">{category}</small>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="text-purple-600 ml-4"
        >
          <path
            fill="currentColor"
            d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"
          ></path>
        </svg>
      </a>
    </li>
  );
}
