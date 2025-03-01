import { useTheme } from "next-themes";

export default function IndexPage() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-black relative w-full h-full flex">
      <div className="py-20 flex flex-col items-center justify-center absolute">
        <button
          className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md cursor-pointer "
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          Change Theme test
        </button>
      </div>
    </div>
  );
}
