import { useState } from "react";
import { predictCat } from "../api/predict";
import type { ResultData } from "../types/prediction";

interface Props {
  onResult: (data: ResultData) => void;
}

export default function ImageUpload({ onResult }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [realBreed, setRealBreed] = useState("");

  const handleSubmit = async () => {
    if (!file) return;

    const result = await predictCat(file);

    onResult({
      image: URL.createObjectURL(file),
      realBreed,
      predictions: result.predictions,
    });
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <input
        type="text"
        placeholder="Race réelle (optionnel)"
        value={realBreed}
        onChange={(e) => setRealBreed(e.target.value)}
      />

      <button onClick={handleSubmit}>Prédire</button>
    </div>
  );
}
