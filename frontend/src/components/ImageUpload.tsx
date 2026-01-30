import { useState } from "react";
import { predictCat } from "../api/predict";
import type { ResultData } from "../types/prediction";

interface Props {
  onResult: (data: ResultData) => void;
}

export default function ImageUpload({ onResult }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [realBreed, setRealBreed] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const result = await predictCat(file);
      onResult({
        image: URL.createObjectURL(file),
        realBreed,
        predictions: result.predictions,
      });
    } catch (err) {
      alert("Erreur lors de la prédiction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border border-gray-300 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition"
      >
        {loading ? "Prédiction..." : "Analyser l'image"}
      </button>
    </div>
  );
}
