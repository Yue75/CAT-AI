import type { ResultData } from "../types/prediction";

interface Props {
  data: ResultData | null;
}

export default function PredictionResult({ data }: Props) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6">
      <img
        src={data.image}
        alt="Chat"
        className="w-full h-64 object-cover rounded-xl"
      />

      <div className="text-center">
        <p className="text-gray-800 font-semibold text-lg mt-1">
          Race prédite : {data.predictions[0].breed}
        </p>
      </div>

      <h4 className="text-gray-700 font-semibold">Top 3 des prédictions :</h4>
      <div className="flex flex-col gap-3">
        {data.predictions.map((p, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="w-1/4 font-medium text-gray-700">
              {i + 1}. {p.breed}
            </span>
            <div className="w-3/4 h-4 bg-gray-200 rounded-full relative">
              <div
                className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all"
                style={{ width: `${p.probability}%` }}
              ></div>
              <div className="absolute right-0 top-0 -mt-1 text-sm text-gray-700 font-medium">
                {(p.probability).toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
    