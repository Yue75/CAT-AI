import type { PredictionResponse } from "../types/prediction";

const API_URL = "http://127.0.0.1:8000/predict";

export async function predictCat(
  imageFile: File
): Promise<PredictionResponse> {
  const formData = new FormData();
  formData.append("file", imageFile);

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la prédiction");
  }

  return response.json();
}
