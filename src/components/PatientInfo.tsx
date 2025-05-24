
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Heart, Thermometer, Activity, Stethoscope } from 'lucide-react';

interface PatientInfoProps {
  patientInfo: {
    age: number;
    gender: string;
    chief_complaint: string;
    history: {
      medical: string[];
      surgical: string[];
      family: string[];
      medications: string[];
    };
    vitals: {
      heart_rate: number;
      blood_pressure: string;
      temperature: string;
      respiratory_rate: number;
      oxygen_saturation: string;
    };
  };
}

const PatientInfo: React.FC<PatientInfoProps> = ({ patientInfo }) => {
  return (
    <div className="space-y-4">
      <Card className="border-red-200 bg-gradient-to-br from-white to-red-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-red-800 flex items-center gap-2">
            <User className="w-5 h-5" />
            Patient Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Age</p>
              <p className="text-lg font-semibold text-red-700">{patientInfo.age} years</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Gender</p>
              <p className="text-lg font-semibold text-red-700 capitalize">{patientInfo.gender}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Chief Complaint</p>
            <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">
              {patientInfo.chief_complaint}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200 bg-gradient-to-br from-white to-red-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-red-800 flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Vital Signs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <div>
                <p className="text-xs text-gray-600">Heart Rate</p>
                <p className="font-semibold text-red-700">{patientInfo.vitals.heart_rate} bpm</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-red-500" />
              <div>
                <p className="text-xs text-gray-600">Blood Pressure</p>
                <p className="font-semibold text-red-700">{patientInfo.vitals.blood_pressure}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-red-500" />
              <div>
                <p className="text-xs text-gray-600">Temperature</p>
                <p className="font-semibold text-red-700">{patientInfo.vitals.temperature}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-red-500" />
              <div>
                <p className="text-xs text-gray-600">Respiratory Rate</p>
                <p className="font-semibold text-red-700">{patientInfo.vitals.respiratory_rate}/min</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-red-200">
            <p className="text-xs text-gray-600 mb-1">Oxygen Saturation</p>
            <p className="font-semibold text-red-700">{patientInfo.vitals.oxygen_saturation}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200 bg-gradient-to-br from-white to-red-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-red-800">Medical History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Medical History</p>
            <div className="flex flex-wrap gap-2">
              {patientInfo.history.medical.map((condition, index) => (
                <Badge key={index} variant="secondary" className="bg-red-100 text-red-700 border-red-200">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Family History</p>
            <div className="flex flex-wrap gap-2">
              {patientInfo.history.family.map((condition, index) => (
                <Badge key={index} variant="outline" className="border-red-300 text-red-700">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Current Medications</p>
            <div className="flex flex-wrap gap-2">
              {patientInfo.history.medications.map((medication, index) => (
                <Badge key={index} variant="secondary" className="bg-red-50 text-red-800 border-red-200">
                  {medication}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientInfo;
