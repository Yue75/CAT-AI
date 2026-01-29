import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import PredictionResult from "./components/PredictionResult";
import type { ResultData } from "./types/prediction";

function App() {
  const [result, setResult] = useState<ResultData | null>(null);

  return (
    <div>
      <h1>Cat Breed Classifier 🐱</h1>
      <ImageUpload onResult={setResult} />
      <PredictionResult data={result} />
    </div>
  );
}

export default App;
