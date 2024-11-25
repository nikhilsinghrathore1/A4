"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [type, setType] = useState("");

  const cliCommand = () => {
    setLoading(true);
    setError(false); // Reset error when starting a new attempt
    setTimeout(() => {
      const portfolio: boolean = type.toLowerCase().includes("portfolio"); // Case-insensitive match
      if (!portfolio) {
        setError(true);
        setType("")
        return;
      }
      setType("")
      setLoading(false);
      changeScreen("portfolio");
    }, 3000);
  };

  const changeScreen = (data: string) => {
    setTimeout(() => {
      window.location.href = `/${data}`; 
    }, 10);
  };
    



  return (
    <div className="relative p-10 w-full h-screen bg-black/50">
      {loading && (
        <div className="w-full h-full absolute top-0 left-0 bg-white/70 flex flex-col items-center justify-center">
          <div className={`${error ? "text-red-500" : "text-black"}`}>
            {error ? "Command not recognized. Try again!" : "Loading..."}
          </div>
          <button
            className="p-3 mt-10 border-[1px] border-black rounded-xl bg-white text-black"
            onClick={() => setLoading(false)}
          >
            Go Back
          </button>
        </div>
      )}

      {/* Input and Submit Section */}
      <div className="w-full h-[10%] flex flex-col gap-4">
        <input
        value={type}
          onChange={(e) => {
            setType(e.target.value);
            if (error) setError(false); // Clear error on input change
          }}
          className="bg-white text-black outline-none rounded-xl px-5 py-2"
          placeholder="Enter a command"
          type="text"
        />
        <button
          onClick={cliCommand}
          className="px-5 py-2 rounded-xl bg-white text-black"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
