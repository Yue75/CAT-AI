import numpy as np
from .model import model, CLASS_NAMES

def predict_top3(img_array):
    if model is None:
        return [{"breed": "Erreur", "probability": 0.0, "details": "Modèle non chargé"}]

    probs = model.predict(img_array)[0]

    top3_idx = np.argsort(probs)[-3:][::-1]

    results = []
    for i in top3_idx:
        breed_name = CLASS_NAMES[i]
        
        score_percent = float(np.round(probs[i] * 100, 2))
        
        results.append({
            "breed": breed_name,
            "probability": score_percent
        })

    return results