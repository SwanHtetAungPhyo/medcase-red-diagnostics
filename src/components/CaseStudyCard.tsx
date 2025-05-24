
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Clock, Activity } from 'lucide-react';

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  patientAge: number;
  patientGender: string;
  chiefComplaint: string;
  onStartCase: (id: string) => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  description,
  patientAge,
  patientGender,
  chiefComplaint,
  onStartCase,
}) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-red-200 hover:border-red-400 bg-gradient-to-br from-white to-red-50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-red-800 text-lg font-semibold mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-600 text-sm">
              {description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200">
            Case Study
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4 text-red-500" />
            <span>{patientAge} year old {patientGender}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Activity className="w-4 h-4 text-red-500" />
            <span>Chief Complaint: {chiefComplaint}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-red-500" />
            <span>Interactive Clinical Case</span>
          </div>
        </div>
        <Button 
          onClick={() => onStartCase(id)}
          className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
        >
          Start Case Study
        </Button>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
