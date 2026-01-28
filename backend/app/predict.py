import numpy as np
from app.model import model, CLASS_NAMES

def predict_top3(img_array):
    predictions = model.predict(img_array)[0]

    top3_idx = np.argsort(predictions)[-3:][::-1]

    results = []
    for i in top3_idx:
        results.append({
            "breed": CLASS_NAMES[i],
            "probability": float(predictions[i])
        })

    return results
