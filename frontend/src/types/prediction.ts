export interface Prediction {
  breed: string;
  probability: number;
}

export interface PredictionResponse {
  predictions: Prediction[];
}

export interface ResultData {
  image: string;
  realBreed?: string;
  predictions: Prediction[];
}
