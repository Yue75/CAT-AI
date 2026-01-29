import type { ResultData } from "../types/prediction";

interface Props {
  data: ResultData | null;
}

export default function PredictionResult({ data }: Props) {
  if (!data) return null;

  const top1 = data.predictions[0];

  return (
    <div>
      <img src={data.image} width={300} />

      <p>
        <strong>Race réelle :</strong>{" "}
        {data.realBreed || "Non renseignée"}
      </p>

      <p>
        <strong>Race prédite :</strong> {top1.breed}
      </p>

      <p>
        <strong>Confiance :</strong>{" "}
        {(top1.probability * 100).toFixed(2)}%
      </p>

      <h4>Top 3 prédictions</h4>
      <ul>
        {data.predictions.map((p, i) => (
          <li key={i}>
            {p.breed} — {(p.probability * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
}
