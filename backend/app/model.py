import tensorflow as tf
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), '..', 'model', 'model_tl.keras')

model = tf.keras.models.load_model(MODEL_PATH)

CLASS_NAMES = [
    'American Bobtail',
    'American Shorthair',
    'Bengal',
    'Bombay', 
    'British Shorthair',
    'Himalayan',
    'Maine Coon',
    'Manx',
    'Persian',
    'Ragdoll',
    'Russian Blue',
    'Siamese',
    'Snowshoe',
    'Turkish Angora',
    'Turkish Van'
]
