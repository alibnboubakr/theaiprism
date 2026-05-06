import AffiliateButton from "./AffiliateButton";

export interface VersusTableProps {
  toolAName: string;
  toolAPrice: string;
  toolBName: string;
  toolBPrice: string;
  metricLabels: string;
  toolAScores: string;
  toolBScores: string;
  winner?: "A" | "B" | "tie";
  affiliateToolA?: string;
  affiliateToolB?: string;
}

function parseList(value: string | undefined): string[] {
  return (value || "").split(",").map((part) => part.trim()).filter(Boolean);
}

function parseScores(value: string | undefined): number[] {
  return parseList(value).map((n) => Number(n));
}

function Stars({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5 justify-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= score ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function VersusTable({
  toolAName,
  toolAPrice,
  toolBName,
  toolBPrice,
  metricLabels,
  toolAScores,
  toolBScores,
  winner,
  affiliateToolA,
  affiliateToolB,
}: VersusTableProps) {
  const labels = parseList(metricLabels);
  const aScores = parseScores(toolAScores);
  const bScores = parseScores(toolBScores);

  return (
    <div className="my-8 overflow-x-auto not-prose">
      <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <th className="px-6 py-4 text-left font-semibold">Metric</th>
            <th className="px-6 py-4 text-center font-semibold">{toolAName}</th>
            <th className="px-6 py-4 text-center font-semibold">{toolBName}</th>
          </tr>
        </thead>
        <tbody>
          {labels.map((label, index) => (
            <tr
              key={label}
              className={
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-gray-800/50"
                  : "bg-white dark:bg-gray-900"
              }
            >
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                {label}
              </td>
              <td className="px-6 py-4 text-center">
                <Stars score={aScores[index] || 0} />
              </td>
              <td className="px-6 py-4 text-center">
                <Stars score={bScores[index] || 0} />
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50 dark:bg-gray-800/50">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
              Price
            </td>
            <td className="px-6 py-4 text-center font-semibold text-green-600 dark:text-green-400">
              {toolAPrice}
            </td>
            <td className="px-6 py-4 text-center font-semibold text-green-600 dark:text-green-400">
              {toolBPrice}
            </td>
          </tr>
        </tbody>
      </table>

      {winner && (
        <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200 dark:border-blue-800">
          <p className="text-center font-semibold text-gray-900 dark:text-gray-100">
            {winner === "tie"
              ? "🤝 It's a tie! Choose based on your specific needs."
              : `🏆 Winner: ${winner === "A" ? toolAName : toolBName}`}
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {affiliateToolA && (
          <AffiliateButton toolName={affiliateToolA} variant="primary" />
        )}
        {affiliateToolB && (
          <AffiliateButton toolName={affiliateToolB} variant="secondary" />
        )}
      </div>
    </div>
  );
}
