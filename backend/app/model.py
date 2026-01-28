import os
import torch
import torch.nn as nn
import torch.nn.functional as F

# backend/
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

MODEL_DIR = os.path.join(BASE_DIR, "model")
MODEL_PATH = os.path.join(MODEL_DIR, "cat_breed_model.pth")

CLASS_NAMES = ["bengal", "persian", "siamese", "maine_coon"]


class CatBreedModel(nn.Module):
    def __init__(self, num_classes=len(CLASS_NAMES)):
        super().__init__()
        self.fc1 = nn.Linear(3 * 224 * 224, 512)
        self.fc2 = nn.Linear(512, 256)
        self.fc3 = nn.Linear(256, num_classes)

    def forward(self, x):
        x = x.view(x.size(0), -1)
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        return self.fc3(x)


model = CatBreedModel()

# ✅ créer le dossier s'il n'existe pas
os.makedirs(MODEL_DIR, exist_ok=True)

# ✅ sauvegarde propre
torch.save(model.state_dict(), MODEL_PATH)

print("✅ Modèle sauvegardé ici :", MODEL_PATH)
