import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import PredictionResult from "./components/PredictionResult";
import type { ResultData } from "./types/prediction";

function App() {
  const [result, setResult] = useState<ResultData | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Cat Breed Classifier 🐱
      </h1>

      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <ImageUpload onResult={setResult} />
      </div>

      {result && (
        <div className="w-full max-w-md mt-6">
          <PredictionResult data={result} />
        </div>
      )}
      <h1 className="text-red-500 text-5xl font-bold">
  TEST TAILWIND
</h1>

    </div>
  );
}

export default App;
