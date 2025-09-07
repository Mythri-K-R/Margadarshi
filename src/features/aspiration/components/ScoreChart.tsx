// src/features/aspiration/components/ScoreChart.tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { QuizResults } from '../../quiz/types';

type Props = {
  results: QuizResults;
};

const COLORS = {
  Technical: '#3b82f6',
  Creative: '#ec4899',
  Social: '#22c55e',
  Analytical: '#f97316',
};

const ScoreChart = ({ results }: Props) => {
  const chartData = Object.entries(results.scores).map(([name, value]) => ({
    name,
    score: value,
  }));

  return (
    <div className="w-full h-64 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#4b5563', fontWeight: 500 }}
            width={80}
          />
          <Tooltip
            cursor={{ fill: 'rgba(243, 244, 246, 0.5)' }}
            contentStyle={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
            }}
          />
          <Bar dataKey="score" barSize={30} radius={[0, 8, 8, 0]}>
            {chartData.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;
