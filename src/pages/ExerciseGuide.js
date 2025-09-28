import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DirectionsRun as ExerciseIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Replay as ReplayIcon,
  Timer as TimerIcon,
  FitnessCenter as GymIcon,
  LocalFireDepartment as FireIcon,
  Speed as SpeedIcon,
  ExpandMore as ExpandIcon,
  ExpandLess as CollapseIcon
} from '@mui/icons-material';
import BackgroundVideo from '../components/BackgroundVideo';
import { videoUrls } from '../assets/videos/videoUrls';
import './ExerciseGuide.css';
import { useLocation } from 'react-router-dom';

const ExerciseGuide = () => {
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);

  // Map various ways of specifying days to our internal keys
  const normalizeDay = (value) => {
    if (!value) return null;
    const v = value.toString().toLowerCase();
    const map = {
      mon: 'monday', monday: 'monday',
      tue: 'tuesday', tues: 'tuesday', tuesday: 'tuesday',
      wed: 'wednesday', wednesday: 'wednesday',
      thu: 'thursday', thur: 'thursday', thurs: 'thursday', thursday: 'thursday',
      fri: 'friday', friday: 'friday',
      sat: 'saturday', saturday: 'saturday'
    };
    return map[v] || null;
  };

  // Determine default day: query param ?day=, else today's weekday (Mon-Sat), fallback Monday
  const computeDefaultDay = () => {
    const fromQuery = normalizeDay(searchParams.get('day'));
    if (fromQuery) return fromQuery;

    const now = new Date();
    const idx = now.getDay(); // 0 Sun .. 6 Sat
    const byIdx = { 1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday' };
    return byIdx[idx] || 'monday';
  };

  const [selectedDay, setSelectedDay] = useState(computeDefaultDay());
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const workoutPlans = {
    monday: {
      name: 'Monday - Upper Body Strength',
      focus: 'Chest, Shoulders, Triceps',
      duration: '60 minutes',
      difficulty: 'Intermediate',
      color: '#ff6b35',
      exercises: [
        {
          name: 'Push-ups',
          sets: '3',
          reps: '12-15',
          duration: '45 seconds',
          rest: '60 seconds',
          description: 'Classic upper body exercise targeting chest, shoulders, and triceps',
          steps: [
            'Start in plank position with hands slightly wider than shoulders',
            'Lower your body until chest nearly touches the floor',
            'Push back up to starting position',
            'Keep core tight and body in straight line throughout'
          ],
          animation: 'pushup',
          tips: 'Keep your core engaged and don\'t let your hips sag'
        },
        {
          name: 'Dumbbell Shoulder Press',
          sets: '3',
          reps: '10-12',
          duration: '40 seconds',
          rest: '60 seconds',
          description: 'Build strong, defined shoulders with this compound movement',
          steps: [
            'Sit or stand with dumbbells at shoulder level',
            'Press weights straight up overhead',
            'Lower slowly back to starting position',
            'Keep core tight and maintain good posture'
          ],
          animation: 'shoulder-press',
          tips: 'Don\'t arch your back - keep it straight'
        },
        {
          name: 'Tricep Dips',
          sets: '3',
          reps: '8-12',
          duration: '35 seconds',
          rest: '60 seconds',
          description: 'Target your triceps with this bodyweight exercise',
          steps: [
            'Sit on edge of chair or bench',
            'Place hands beside hips and slide forward',
            'Lower body by bending elbows',
            'Push back up to starting position'
          ],
          animation: 'tricep-dips',
          tips: 'Keep your elbows close to your body'
        }
      ]
    },
    tuesday: {
      name: 'Tuesday - Lower Body Power',
      focus: 'Legs, Glutes, Core',
      duration: '55 minutes',
      difficulty: 'Intermediate',
      color: '#00d4ff',
      exercises: [
        {
          name: 'Squats',
          sets: '4',
          reps: '15-20',
          duration: '50 seconds',
          rest: '90 seconds',
          description: 'The king of leg exercises for building strength and power',
          steps: [
            'Stand with feet shoulder-width apart',
            'Lower down as if sitting back into a chair',
            'Keep chest up and knees behind toes',
            'Drive through heels to return to standing'
          ],
          animation: 'squat',
          tips: 'Keep your weight in your heels'
        },
        {
          name: 'Lunges',
          sets: '3',
          reps: '12 each leg',
          duration: '45 seconds',
          rest: '60 seconds',
          description: 'Single-leg strength and stability exercise',
          steps: [
            'Step forward with one leg',
            'Lower back knee toward ground',
            'Push back to starting position',
            'Repeat with other leg'
          ],
          animation: 'lunge',
          tips: 'Keep your front knee over your ankle'
        },
        {
          name: 'Deadlifts',
          sets: '3',
          reps: '8-10',
          duration: '40 seconds',
          rest: '90 seconds',
          description: 'Hip hinge movement for posterior chain strength',
          steps: [
            'Stand with feet hip-width apart',
            'Hinge at hips and lower weight',
            'Keep back straight and chest up',
            'Drive hips forward to return to standing'
          ],
          animation: 'deadlift',
          tips: 'Keep the weight close to your body'
        }
      ]
    },
    wednesday: {
      name: 'Wednesday - Cardio & Core',
      focus: 'Endurance, Core Stability',
      duration: '45 minutes',
      difficulty: 'Beginner',
      color: '#4caf50',
      exercises: [
        {
          name: 'High Knees',
          sets: '4',
          reps: '30 seconds',
          duration: '30 seconds',
          rest: '30 seconds',
          description: 'High-intensity cardio exercise for endurance',
          steps: [
            'Stand tall with feet hip-width apart',
            'Run in place bringing knees up high',
            'Pump arms naturally',
            'Land softly on balls of feet'
          ],
          animation: 'high-knees',
          tips: 'Keep your core engaged and land softly'
        },
        {
          name: 'Plank',
          sets: '3',
          reps: '45 seconds',
          duration: '45 seconds',
          rest: '60 seconds',
          description: 'Isometric core strengthening exercise',
          steps: [
            'Start in push-up position',
            'Lower to forearms',
            'Keep body in straight line',
            'Hold position without sagging'
          ],
          animation: 'plank',
          tips: 'Breathe normally and keep hips level'
        },
        {
          name: 'Mountain Climbers',
          sets: '3',
          reps: '20 each leg',
          duration: '40 seconds',
          rest: '60 seconds',
          description: 'Dynamic core and cardio exercise',
          steps: [
            'Start in plank position',
            'Bring one knee to chest',
            'Quickly switch legs',
            'Maintain plank position throughout'
          ],
          animation: 'mountain-climbers',
          tips: 'Keep your core tight and maintain rhythm'
        }
      ]
    },
    thursday: {
      name: 'Thursday - Back & Biceps',
      focus: 'Back, Biceps, Posture',
      duration: '50 minutes',
      difficulty: 'Intermediate',
      color: '#9c27b0',
      exercises: [
        {
          name: 'Pull-ups',
          sets: '3',
          reps: '5-10',
          duration: '40 seconds',
          rest: '90 seconds',
          description: 'Upper body pulling strength exercise',
          steps: [
            'Hang from bar with overhand grip',
            'Pull body up until chin over bar',
            'Lower with control',
            'Keep core engaged throughout'
          ],
          animation: 'pullup',
          tips: 'Start with assisted pull-ups if needed'
        },
        {
          name: 'Bent-over Rows',
          sets: '3',
          reps: '10-12',
          duration: '45 seconds',
          rest: '60 seconds',
          description: 'Back strengthening with dumbbells',
          steps: [
            'Bend forward at hips with weights',
            'Pull weights to sides of chest',
            'Squeeze shoulder blades together',
            'Lower with control'
          ],
          animation: 'bent-over-rows',
          tips: 'Keep your back straight and core tight'
        },
        {
          name: 'Bicep Curls',
          sets: '3',
          reps: '12-15',
          duration: '35 seconds',
          rest: '60 seconds',
          description: 'Isolated bicep strengthening exercise',
          steps: [
            'Stand with dumbbells at sides',
            'Curl weights up to shoulders',
            'Squeeze biceps at top',
            'Lower slowly with control'
          ],
          animation: 'bicep-curl',
          tips: 'Keep your elbows at your sides'
        }
      ]
    },
    friday: {
      name: 'Friday - Full Body HIIT',
      focus: 'Total Body, High Intensity',
      duration: '40 minutes',
      difficulty: 'Advanced',
      color: '#f44336',
      exercises: [
        {
          name: 'Burpees',
          sets: '4',
          reps: '8-12',
          duration: '30 seconds',
          rest: '60 seconds',
          description: 'Full body high-intensity exercise',
          steps: [
            'Start standing',
            'Drop to push-up position',
            'Perform push-up',
            'Jump feet to hands',
            'Jump up with arms overhead'
          ],
          animation: 'burpee',
          tips: 'Maintain good form over speed'
        },
        {
          name: 'Jump Squats',
          sets: '3',
          reps: '15-20',
          duration: '35 seconds',
          rest: '60 seconds',
          description: 'Explosive lower body power exercise',
          steps: [
            'Start in squat position',
            'Jump up explosively',
            'Land softly in squat',
            'Immediately prepare for next jump'
          ],
          animation: 'jump-squat',
          tips: 'Land softly to protect your joints'
        },
        {
          name: 'Plank Jacks',
          sets: '3',
          reps: '20',
          duration: '30 seconds',
          rest: '45 seconds',
          description: 'Core and cardio combination',
          steps: [
            'Start in plank position',
            'Jump feet apart',
            'Jump feet back together',
            'Maintain plank position throughout'
          ],
          animation: 'plank-jacks',
          tips: 'Keep your core tight and stable'
        }
      ]
    },
    saturday: {
      name: 'Saturday - Active Recovery',
      focus: 'Flexibility, Mobility, Light Activity',
      duration: '30 minutes',
      difficulty: 'Beginner',
      color: '#ff9800',
      exercises: [
        {
          name: 'Yoga Flow',
          sets: '1',
          reps: '10 minutes',
          duration: '10 minutes',
          rest: 'None',
          description: 'Gentle yoga sequence for flexibility',
          steps: [
            'Start in downward dog',
            'Flow to plank position',
            'Lower to cobra pose',
            'Return to downward dog',
            'Repeat sequence smoothly'
          ],
          animation: 'yoga-flow',
          tips: 'Focus on breathing and smooth transitions'
        },
        {
          name: 'Walking Lunges',
          sets: '2',
          reps: '20 total',
          duration: '5 minutes',
          rest: '2 minutes',
          description: 'Dynamic stretching and light cardio',
          steps: [
            'Step forward into lunge',
            'Push off back leg to next lunge',
            'Continue walking forward',
            'Keep chest up and core engaged'
          ],
          animation: 'walking-lunges',
          tips: 'Take your time and focus on form'
        },
        {
          name: 'Stretching Routine',
          sets: '1',
          reps: '15 minutes',
          duration: '15 minutes',
          rest: 'None',
          description: 'Comprehensive stretching for recovery',
          steps: [
            'Hold each stretch for 30-60 seconds',
            'Focus on major muscle groups',
            'Breathe deeply during stretches',
            'Don\'t bounce or force stretches'
          ],
          animation: 'stretching',
          tips: 'Listen to your body and don\'t overstretch'
        }
      ]
    }
  };

  // Update selectedDay when the URL query changes
  useEffect(() => {
    const dayFromQuery = normalizeDay(searchParams.get('day'));
    if (dayFromQuery && dayFromQuery !== selectedDay) {
      setSelectedDay(dayFromQuery);
    }
  }, [searchParams, selectedDay]);

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const nextStep = () => {
    if (selectedExercise && currentStep < selectedExercise.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <BackgroundVideo videoSrc={videoUrls.exercises}>
      <div className="exercise-guide-page">
        <div className="container">
          <motion.div
            className="exercise-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <ExerciseIcon className="header-icon" />
          <h1>Exercise Guide</h1>
          <p>
            Follow our animated exercise guides designed for every day of the week. 
            Each workout is carefully crafted to target specific muscle groups and fitness goals.
          </p>
        </motion.div>

        {/* Day Selection */}
        <motion.div
          className="day-selector"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(workoutPlans).map(([day, plan]) => (
            <button
              key={day}
              className={`day-button ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
              style={{ '--plan-color': plan.color }}
            >
              <span className="day-name">{plan.name.split(' - ')[0]}</span>
              <span className="day-focus">{plan.focus}</span>
            </button>
          ))}
        </motion.div>

        {/* Workout Plan */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            className="workout-plan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="plan-header">
              <div className="plan-info">
                <h2>{workoutPlans[selectedDay].name}</h2>
                <p>{workoutPlans[selectedDay].description}</p>
              </div>
              <div className="plan-stats">
                <div className="stat">
                  <TimerIcon />
                  <span>{workoutPlans[selectedDay].duration}</span>
                </div>
                <div className="stat">
                  <FireIcon />
                  <span>{workoutPlans[selectedDay].difficulty}</span>
                </div>
                <div className="stat">
                  <SpeedIcon />
                  <span>{workoutPlans[selectedDay].focus}</span>
                </div>
              </div>
            </div>

            <div className="exercises-grid">
              {workoutPlans[selectedDay].exercises.map((exercise, index) => (
                <motion.div
                  key={index}
                  className="exercise-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="exercise-header">
                    <GymIcon className="exercise-icon" />
                    <div className="exercise-info">
                      <h3>{exercise.name}</h3>
                      <p>{exercise.description}</p>
                    </div>
                  </div>
                  
                  <div className="exercise-details">
                    <div className="detail">
                      <span className="label">Sets:</span>
                      <span className="value">{exercise.sets}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Reps:</span>
                      <span className="value">{exercise.reps}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Duration:</span>
                      <span className="value">{exercise.duration}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Rest:</span>
                      <span className="value">{exercise.rest}</span>
                    </div>
                  </div>

                  <button
                    className="start-exercise-btn"
                    onClick={() => handleExerciseSelect(exercise)}
                  >
                    <PlayIcon />
                    Start Exercise
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Exercise Modal */}
        <AnimatePresence>
          {selectedExercise && (
            <motion.div
              className="exercise-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h2>{selectedExercise.name}</h2>
                  <button
                    className="close-btn"
                    onClick={() => setSelectedExercise(null)}
                  >
                    ×
                  </button>
                </div>

                <div className="exercise-animation">
                  <div className={`animation-container ${selectedExercise.animation}`}>
                    <div className="exercise-figure">
                      <div className="body-part head"></div>
                      <div className="body-part torso"></div>
                      <div className="body-part arm-left"></div>
                      <div className="body-part arm-right"></div>
                      <div className="body-part leg-left"></div>
                      <div className="body-part leg-right"></div>
                    </div>
                  </div>
                </div>

                <div className="exercise-controls">
                  <button
                    className="control-btn"
                    onClick={handleReplay}
                  >
                    <ReplayIcon />
                    Replay
                  </button>
                  <button
                    className="control-btn play-pause"
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                  <button
                    className="control-btn"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                  >
                    Previous
                  </button>
                  <button
                    className="control-btn"
                    onClick={nextStep}
                    disabled={currentStep === selectedExercise.steps.length - 1}
                  >
                    Next
                  </button>
                </div>

                <div className="exercise-steps">
                  <h3>Step {currentStep + 1} of {selectedExercise.steps.length}</h3>
                  <p>{selectedExercise.steps[currentStep]}</p>
                  <div className="step-indicators">
                    {selectedExercise.steps.map((_, index) => (
                      <div
                        key={index}
                        className={`step-dot ${index === currentStep ? 'active' : ''}`}
                        onClick={() => setCurrentStep(index)}
                      />
                    ))}
                  </div>
                </div>

                <div className="exercise-tips">
                  <h4>💡 Pro Tip</h4>
                  <p>{selectedExercise.tips}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default ExerciseGuide;
