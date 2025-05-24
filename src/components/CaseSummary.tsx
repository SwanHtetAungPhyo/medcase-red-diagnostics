
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BookOpen, RotateCcw } from 'lucide-react';

interface CaseSummaryProps {
  summary: string;
  learningPoints: string[];
  onRestart: () => void;
  onNewCase: () => void;
}

const CaseSummary: React.FC<CaseSummaryProps> = ({
  summary,
  learningPoints,
  onRestart,
  onNewCase,
}) => {
  return (
    <Card className="border-red-200 bg-gradient-to-br from-white to-red-50">
      <CardHeader>
        <CardTitle className="text-red-800 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600" />
          Case Complete!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800 mb-3">Case Summary</h3>
          <p className="text-gray-800 leading-relaxed">{summary}</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Key Learning Points
          </h3>
          <div className="space-y-3">
            {learningPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-700 text-sm font-semibold">{index + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            onClick={onRestart}
            variant="outline"
            className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Restart Case
          </Button>
          <Button 
            onClick={onNewCase}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white"
          >
            Try Another Case
          </Button>
        </div>

        <div className="text-center pt-4 border-t border-red-200">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
            Case Study Completed
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseSummary;
