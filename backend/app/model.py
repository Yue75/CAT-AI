import tensorflow as tf
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), '..', 'model', 'model_tl.keras')

model = tf.keras.models.load_model(MODEL_PATH)

CLASS_NAMES = [
    'Abyssinian',
    'Bengal',
    'Birman',
    'Bombay',
    'British Shorthair',
    'Egyptian Mau',
    'Maine Coon',
    'Persian',
    'Ragdoll',
    'Russian Blue',
    'Siamese',
    'Sphynx - Hairless Cat'
]
