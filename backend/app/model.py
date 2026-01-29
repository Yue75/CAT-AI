import tensorflow as tf
import os

MODEL_PATH = os.path.join("model", "modele_tl.keras")

# Chargement du modèle UNE SEULE FOIS
model = tf.keras.models.load_model(MODEL_PATH)

# ⚠️ DOIT correspondre EXACTEMENT à l'ordre du training
CLASS_NAMES = [
    "bengal",
    "persian",
    "siamese",
    "maine_coon",
    # adapte à ton dataset Kaggle
]
