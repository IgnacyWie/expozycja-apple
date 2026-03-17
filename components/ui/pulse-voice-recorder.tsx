'use client'

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type RecordingState = 'idle' | 'recording' | 'processing' | 'showing-result';

type SeverityLevel = 'safe' | 'moderate' | 'dangerous' | 'critical';

interface ErrorAnalysis {
  errorName: string;
  description: string;
  confidence: number; // 0-100
  severity: SeverityLevel;
  suggestions: string[];
}

const getSeverityStyles = (severity: SeverityLevel) => {
  switch (severity) {
    case 'safe':
      return {
        color: 'text-green-600 dark:text-green-400',
        bgColor: 'bg-green-500',
        borderColor: 'border-green-500',
        badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
        message: 'Safe to drive - Monitor condition'
      };
    case 'moderate':
      return {
        color: 'text-yellow-600 dark:text-yellow-400',
        bgColor: 'bg-yellow-500',
        borderColor: 'border-yellow-500',
        badge: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
        message: 'Moderate issue - Schedule inspection soon'
      };
    case 'dangerous':
      return {
        color: 'text-orange-600 dark:text-orange-400',
        bgColor: 'bg-orange-500',
        borderColor: 'border-orange-500',
        badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
        message: 'Dangerous - Drive with caution, inspect immediately'
      };
    case 'critical':
      return {
        color: 'text-red-600 dark:text-red-400',
        bgColor: 'bg-red-500',
        borderColor: 'border-red-500',
        badge: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
        message: 'CRITICAL - Stop driving, immediate attention required'
      };
    default:
      return {
        color: 'text-gray-600 dark:text-gray-400',
        bgColor: 'bg-gray-500',
        borderColor: 'border-gray-500',
        badge: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300',
        message: ''
      };
  }
};

const AI_RESPONSES: Record<string, ErrorAnalysis> = {
  'wheel-hub-bearings': {
    errorName: 'Wheel Hub Bearing Failure',
    description: "The sound analysis detected a grinding or rumbling noise that increases with speed. This indicates worn wheel hub bearings. The noise may change when turning.",
    confidence: 92,
    severity: 'safe',
    suggestions: [
      'Have your wheel bearings inspected immediately',
      'Replace worn bearings to prevent wheel separation',
      'Check for excessive play in the wheel assembly',
      'This is a safety concern - address before driving'
    ]
  },
  'ball-joints': {
    errorName: 'Ball Joint Wear',
    description: "The audio shows a clunking or knocking noise when going over bumps or turning. This indicates worn ball joints. Ball joints are critical suspension components that affect steering and safety.",
    confidence: 88,
    severity: 'moderate',
    suggestions: [
      'Inspect ball joints for excessive play',
      'Replace worn ball joints to restore steering control',
      'Check for uneven tire wear as a secondary symptom',
      'Have alignment checked after replacement'
    ]
  },
  'tensioner-belt': {
    errorName: 'Belt Tensioner Failure',
    description: "I detected a high-pitched squealing sound, especially on cold starts or when turning the steering wheel. This indicates a loose or worn serpentine belt tensioner.",
    confidence: 85,
    severity: 'moderate',
    suggestions: [
      'Inspect the tensioner pulley for wear',
      'Replace the belt tensioner if loose or damaged',
      'Check belt condition and replace if necessary',
      'Failure can cause alternator, power steering, and AC to stop working'
    ]
  },
  'motor-bearings': {
    errorName: 'Motor Bearing Failure',
    description: "The sound analysis reveals a deep rumbling or grinding noise from the engine that increases with RPM. This indicates worn motor bearings, which can lead to catastrophic engine failure.",
    confidence: 95,
    severity: 'critical',
    suggestions: [
      'Immediate professional inspection required',
      'Do not drive if noise is severe - risk of engine seizure',
      'Bearing failure can cause crankshaft damage',
      'May require engine rebuild if not addressed quickly'
    ]
  },
};

export interface PulseVoiceRecorderProps {
  selectedErrorType?: string;
}

export const PulseVoiceRecorder = ({ selectedErrorType = 'wheel-hub-bearings' }: PulseVoiceRecorderProps) => {
  const [state, setState] = useState<RecordingState>('idle');
  const [duration, setDuration] = useState(0);
  const [pulseIntensity, setPulseIntensity] = useState<number[]>([]);
  const [aiResponse, setAiResponse] = useState<ErrorAnalysis | null>(null);
  const [recordingCount, setRecordingCount] = useState(0);

  // Set initial response when error type changes or component mounts
  useEffect(() => {
    const response = AI_RESPONSES[selectedErrorType] || AI_RESPONSES['wheel-hub-bearings'];
    setAiResponse(response);
  }, [selectedErrorType]);

  // Auto-start recording when component mounts or after showing result
  useEffect(() => {
    if (state === 'idle') {
      // Small delay before starting recording
      const timer = setTimeout(() => {
        setState('recording');
        setDuration(0);
        setPulseIntensity([]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [state]);

  // Recording timer
  useEffect(() => {
    if (state !== 'recording') return;
    
    const timer = setInterval(() => {
      setDuration(prev => prev + 1);
      // Generate random pulse patterns for visual feedback
      setPulseIntensity(Array.from({ length: 5 }, () => Math.random()));
    }, 1000);

    // Auto-stop after 5 seconds of recording
    if (duration >= 5) {
      setState('processing');
      setDuration(0);
    }

    return () => clearInterval(timer);
  }, [state, duration]);

  // Processing state - simulate AI analysis
  useEffect(() => {
    if (state === 'processing') {
      // Simulate processing time (1-2 seconds)
      const processingTime = 1500 + Math.random() * 1000;
      
      const timer = setTimeout(() => {
        // Get the static response for the selected error type
        const response = AI_RESPONSES[selectedErrorType] || AI_RESPONSES['wheel-hub-bearings'];
        setAiResponse(response);
        setState('showing-result');
        setRecordingCount(prev => prev + 1);
      }, processingTime);

      return () => clearTimeout(timer);
    }
  }, [state, selectedErrorType]);

  // Show result for 4 seconds, then loop back (but keep the response visible)
  useEffect(() => {
    if (state === 'showing-result') {
      const timer = setTimeout(() => {
        setState('idle');
        setPulseIntensity([]);
        // Don't clear aiResponse - keep it visible
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const getStateText = () => {
    switch (state) {
      case 'idle':
        return 'Ready to record...';
      case 'recording':
        return 'Listening...';
      case 'processing':
        return 'Analyzing sound...';
      case 'showing-result':
        return 'Analysis complete';
      default:
        return '';
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-8 min-h-[400px]">
      {/* Left Side - Recorder (Smaller) - Independent position */}
      <div className="flex flex-col items-center gap-6 flex-shrink-0 md:absolute md:left-8">
        <div className="relative">
          {/* Animated pulse rings */}
          {state === 'recording' && (
            <>
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 rounded-full border-2 border-blue-400/30",
                    "animate-ping"
                  )}
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </>
          )}
          
          {/* Processing animation */}
          {state === 'processing' && (
            <>
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/50 animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-ping" />
            </>
          )}
          
          {/* Main record button - Smaller */}
          <button
            disabled={state !== 'recording' && state !== 'idle'}
            className={cn(
              "relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full transition-all duration-300",
              "flex items-center justify-center",
              state === 'recording'
                ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/50"
                : state === 'processing'
                ? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
                : "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/50",
              "disabled:opacity-75 disabled:cursor-not-allowed"
            )}
          >
            {/* All icons same size container to prevent position shift */}
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center relative">
              {state === 'recording' ? (
                <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-sm" />
              ) : state === 'processing' ? (
                <div className="w-6 h-6 md:w-7 md:h-7 border-2 md:border-3 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full" />
              )}
            </div>
          </button>
        </div>

        {/* Status and duration display */}
        <div className="text-center space-y-2">
          <div className="text-lg md:text-xl font-semibold text-foreground">
            {getStateText()}
          </div>
          {state === 'recording' && (
            <div className="text-3xl md:text-4xl font-mono font-bold text-gray-700 dark:text-gray-300">
              {formatTime(duration)}
            </div>
          )}
          {state === 'processing' && (
            <div className="text-sm md:text-base text-muted-foreground animate-pulse">
              Processing audio data...
            </div>
          )}
        </div>
      </div>

      {/* Right Side - AI Response Display (Always Visible, Static Position - Independent) */}
      <div className="w-full md:absolute md:right-0 md:top-0 md:w-auto md:max-w-lg lg:max-w-xl">
        <div className="w-full rounded-2xl border border-zinc-300/80 bg-zinc-50/80 p-4 shadow-sm backdrop-blur-sm md:p-6 dark:border-white/10 dark:bg-white/5">
          {aiResponse && (() => {
            const severityStyles = getSeverityStyles(aiResponse.severity);
            return (
              <>
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-base md:text-lg text-foreground">
                      {aiResponse.errorName}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-md text-xs font-semibold whitespace-nowrap ${severityStyles.badge}`}>
                      {aiResponse.severity === 'critical' ? 'CRITICAL' : aiResponse.severity === 'dangerous' ? 'DANGEROUS' : aiResponse.severity === 'moderate' ? 'MODERATE' : 'SAFE'}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2">
                    {aiResponse.description}
                  </p>
                  <div className={`mb-2 p-1.5 rounded-md border ${severityStyles.borderColor} ${severityStyles.badge}`}>
                    <p className="text-xs font-medium">{severityStyles.message}</p>
                  </div>
                  
                  {/* Confidence Progress Bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-muted-foreground">Analysis Confidence</span>
                      <span className="text-xs font-semibold text-foreground">{aiResponse.confidence}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-200/70 dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ease-out rounded-full ${severityStyles.bgColor}`}
                        style={{ width: `${aiResponse.confidence}%` }}
                      />
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div className="mt-2">
                    <h4 className="text-xs font-semibold text-foreground mb-1">Recommendations:</h4>
                    <ul className="space-y-1">
                      {aiResponse.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </>
              );
            })()}
        </div>
      </div>
    </div>
  );
};
