
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Clock, Activity, ArrowRight } from 'lucide-react';

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
    <Card className="group hover:shadow-2xl transition-all duration-500 border-red-200 hover:border-red-400 bg-gradient-to-br from-white to-red-50 transform hover:-translate-y-2 cursor-pointer h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-red-800 text-xl font-bold mb-3 group-hover:text-red-900 transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-600 text-sm leading-relaxed">
              {description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200 font-semibold">
            Case Study
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-red-100 group-hover:border-red-200 transition-colors">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-medium">{patientAge} year old {patientGender}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Activity className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-medium">Chief Complaint: {chiefComplaint}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-medium">Interactive Clinical Case</span>
              </div>
            </div>
          </div>
        </div>
        <Button 
          onClick={() => onStartCase(id)}
          className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transition-all duration-300 transform group-hover:scale-105 font-semibold py-3 shadow-lg hover:shadow-xl"
        >
          Start Case Study
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
