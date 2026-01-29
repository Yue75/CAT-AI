import numpy as np
from app.model import model, CLASS_NAMES
 
def predict_top3(img_array):
    preds = model.predict(img_array)[0]
 
    top3_idx = np.argsort(preds)[-3:][::-1]
 
    return [
        {
            "breed": CLASS_NAMES[i],
            "probability": float(preds[i])
        }
        for i in top3_idx
    ]