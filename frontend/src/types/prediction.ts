export interface PredictionResult {
  breed: string;
  probability: number;
}

export interface PredictionResponse {
  filename: string;
  predictions: PredictionResult[];
}

export interface ResultData {
  image: string;
  realBreed: string;
  predictions: PredictionResult[];
}