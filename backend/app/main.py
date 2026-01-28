from fastapi import FastAPI, UploadFile, File
from PIL import Image

from app.utils import preprocess_image
from app.predict import predict_top3

app = FastAPI(
    title="Cat Breed Classifier API",
    description="API de classification des races de chats",
    version="1.0"
)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = Image.open(file.file).convert("RGB")
    img_array = preprocess_image(image)
    predictions = predict_top3(img_array)

    return {
        "predictions": predictions
    }
