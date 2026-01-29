export async function predictCat(imageFile) {
  const formData = new FormData();
  formData.append("file", imageFile);

  const response = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la prédiction");
  }

  return response.json();
}
