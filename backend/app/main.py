from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from .utils import preprocess_image
from .predict import predict_top3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "status": "ok",
        "message": "CatAI backend is running!"
    }

@app.post("/predict")
async def predict_breed(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        return {"error": "Le fichier envoyé n'est pas une image valide."}

    try:
        file_bytes = await file.read()
        
        processed_image = preprocess_image(file_bytes)
        
        predictions = predict_top3(processed_image)
        
        return {
            "filename": file.filename,
            "predictions": predictions
        }
        
    except Exception as e:
        return {"error": f"Erreur interne : {str(e)}"}