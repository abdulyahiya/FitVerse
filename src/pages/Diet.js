import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Restaurant as RestaurantIcon,
  LocalDining as MealIcon,
  FitnessCenter as GoalIcon,
  Schedule as ScheduleIcon,
  TrendingUp as TrendingIcon,
  CheckCircle as CheckIcon,
  ExpandMore as ExpandIcon,
  ExpandLess as CollapseIcon
} from '@mui/icons-material';
import BackgroundVideo from '../components/BackgroundVideo';
import { videoUrls } from '../assets/videos/videoUrls';
import './Diet.css';

const Diet = () => {
  const [activeTab, setActiveTab] = useState('weight-loss');
  const [expandedMeal, setExpandedMeal] = useState(null);

  const dietPlans = {
    'weight-loss': {
      title: 'Weight Loss Plan',
      description: 'A balanced approach to sustainable weight loss with calorie deficit and nutrient-dense foods',
      duration: '12 weeks',
      calories: '1200-1500',
      difficulty: 'Beginner',
      color: '#ff6b35',
      meals: {
        breakfast: {
          name: 'Protein-Packed Breakfast',
          time: '7:00 AM',
          calories: '350',
          foods: [
            { name: 'Greek Yogurt Parfait', amount: '1 cup', calories: '150' },
            { name: 'Mixed Berries', amount: '1/2 cup', calories: '40' },
            { name: 'Almonds', amount: '1 tbsp', calories: '50' },
            { name: 'Honey', amount: '1 tsp', calories: '20' },
            { name: 'Green Tea', amount: '1 cup', calories: '0' }
          ],
          instructions: 'Layer Greek yogurt with berries and almonds. Drizzle with honey and enjoy with green tea.'
        },
        snack1: {
          name: 'Morning Snack',
          time: '10:00 AM',
          calories: '100',
          foods: [
            { name: 'Apple Slices', amount: '1 medium', calories: '80' },
            { name: 'Almond Butter', amount: '1 tsp', calories: '20' }
          ],
          instructions: 'Slice apple and serve with a small amount of almond butter for dipping.'
        },
        lunch: {
          name: 'Lean Protein Lunch',
          time: '12:30 PM',
          calories: '400',
          foods: [
            { name: 'Grilled Chicken Breast', amount: '4 oz', calories: '180' },
            { name: 'Quinoa', amount: '1/2 cup cooked', calories: '110' },
            { name: 'Mixed Vegetables', amount: '1 cup', calories: '50' },
            { name: 'Olive Oil', amount: '1 tsp', calories: '40' },
            { name: 'Lemon Juice', amount: '1 tbsp', calories: '5' }
          ],
          instructions: 'Grill chicken and serve over quinoa with steamed vegetables. Drizzle with olive oil and lemon juice.'
        },
        snack2: {
          name: 'Afternoon Snack',
          time: '3:00 PM',
          calories: '120',
          foods: [
            { name: 'Hard-Boiled Egg', amount: '1 large', calories: '70' },
            { name: 'Cucumber Slices', amount: '1/2 cup', calories: '10' },
            { name: 'Hummus', amount: '2 tbsp', calories: '40' }
          ],
          instructions: 'Slice hard-boiled egg and serve with cucumber and hummus.'
        },
        dinner: {
          name: 'Light Dinner',
          time: '7:00 PM',
          calories: '350',
          foods: [
            { name: 'Baked Salmon', amount: '4 oz', calories: '200' },
            { name: 'Sweet Potato', amount: '1 small', calories: '100' },
            { name: 'Asparagus', amount: '1 cup', calories: '30' },
            { name: 'Herbs & Spices', amount: 'to taste', calories: '5' }
          ],
          instructions: 'Bake salmon with herbs. Roast sweet potato and asparagus. Season to taste.'
        }
      }
    },
    'muscle-gain': {
      title: 'Muscle Gain Plan',
      description: 'High-protein, calorie-dense meals to support muscle growth and recovery',
      duration: '16 weeks',
      calories: '2500-3000',
      difficulty: 'Intermediate',
      color: '#00d4ff',
      meals: {
        breakfast: {
          name: 'Power Breakfast',
          time: '7:00 AM',
          calories: '600',
          foods: [
            { name: 'Oatmeal', amount: '1 cup dry', calories: '300' },
            { name: 'Protein Powder', amount: '1 scoop', calories: '120' },
            { name: 'Banana', amount: '1 large', calories: '100' },
            { name: 'Peanut Butter', amount: '2 tbsp', calories: '180' }
          ],
          instructions: 'Cook oatmeal and mix with protein powder. Top with sliced banana and peanut butter.'
        },
        snack1: {
          name: 'Pre-Workout Snack',
          time: '10:00 AM',
          calories: '200',
          foods: [
            { name: 'Greek Yogurt', amount: '1 cup', calories: '130' },
            { name: 'Granola', amount: '1/4 cup', calories: '70' }
          ],
          instructions: 'Mix Greek yogurt with granola for a quick energy boost.'
        },
        lunch: {
          name: 'Post-Workout Lunch',
          time: '1:00 PM',
          calories: '700',
          foods: [
            { name: 'Grilled Chicken', amount: '6 oz', calories: '280' },
            { name: 'Brown Rice', amount: '1 cup cooked', calories: '220' },
            { name: 'Broccoli', amount: '1 cup', calories: '50' },
            { name: 'Avocado', amount: '1/2 medium', calories: '120' },
            { name: 'Olive Oil', amount: '1 tbsp', calories: '120' }
          ],
          instructions: 'Grill chicken and serve with brown rice and steamed broccoli. Add sliced avocado and olive oil.'
        },
        snack2: {
          name: 'Protein Shake',
          time: '4:00 PM',
          calories: '300',
          foods: [
            { name: 'Protein Powder', amount: '2 scoops', calories: '240' },
            { name: 'Milk', amount: '1 cup', calories: '150' },
            { name: 'Frozen Berries', amount: '1/2 cup', calories: '40' }
          ],
          instructions: 'Blend protein powder with milk and frozen berries until smooth.'
        },
        dinner: {
          name: 'Hearty Dinner',
          time: '7:30 PM',
          calories: '800',
          foods: [
            { name: 'Lean Beef', amount: '6 oz', calories: '350' },
            { name: 'Sweet Potato', amount: '1 large', calories: '200' },
            { name: 'Green Beans', amount: '1 cup', calories: '40' },
            { name: 'Quinoa', amount: '1/2 cup cooked', calories: '110' },
            { name: 'Coconut Oil', amount: '1 tbsp', calories: '120' }
          ],
          instructions: 'Cook lean beef and serve with roasted sweet potato, steamed green beans, and quinoa.'
        }
      }
    },
    'maintenance': {
      title: 'Maintenance Plan',
      description: 'Balanced nutrition to maintain current weight and overall health',
      duration: 'Ongoing',
      calories: '1800-2200',
      difficulty: 'All Levels',
      color: '#4caf50',
      meals: {
        breakfast: {
          name: 'Balanced Breakfast',
          time: '7:30 AM',
          calories: '450',
          foods: [
            { name: 'Whole Grain Toast', amount: '2 slices', calories: '160' },
            { name: 'Avocado', amount: '1/2 medium', calories: '120' },
            { name: 'Poached Egg', amount: '2 large', calories: '140' },
            { name: 'Spinach', amount: '1 cup', calories: '10' },
            { name: 'Coffee', amount: '1 cup', calories: '5' }
          ],
          instructions: 'Toast bread and top with mashed avocado, poached eggs, and fresh spinach.'
        },
        snack1: {
          name: 'Healthy Snack',
          time: '10:30 AM',
          calories: '150',
          foods: [
            { name: 'Mixed Nuts', amount: '1 oz', calories: '160' },
            { name: 'Dried Fruit', amount: '1 tbsp', calories: '30' }
          ],
          instructions: 'Mix a small handful of nuts with dried fruit for a satisfying snack.'
        },
        lunch: {
          name: 'Nutritious Lunch',
          time: '12:30 PM',
          calories: '500',
          foods: [
            { name: 'Grilled Fish', amount: '4 oz', calories: '180' },
            { name: 'Mixed Salad', amount: '2 cups', calories: '50' },
            { name: 'Olive Oil Dressing', amount: '1 tbsp', calories: '120' },
            { name: 'Whole Grain Bread', amount: '1 slice', calories: '80' },
            { name: 'Fruit', amount: '1 medium', calories: '70' }
          ],
          instructions: 'Grill fish and serve over mixed greens with olive oil dressing. Serve with bread and fruit.'
        },
        snack2: {
          name: 'Afternoon Snack',
          time: '3:30 PM',
          calories: '100',
          foods: [
            { name: 'Greek Yogurt', amount: '1/2 cup', calories: '70' },
            { name: 'Berries', amount: '1/4 cup', calories: '20' },
            { name: 'Chia Seeds', amount: '1 tsp', calories: '20' }
          ],
          instructions: 'Mix Greek yogurt with berries and chia seeds.'
        },
        dinner: {
          name: 'Well-Balanced Dinner',
          time: '7:00 PM',
          calories: '600',
          foods: [
            { name: 'Turkey Breast', amount: '4 oz', calories: '180' },
            { name: 'Roasted Vegetables', amount: '1 cup', calories: '100' },
            { name: 'Wild Rice', amount: '1/2 cup cooked', calories: '110' },
            { name: 'Herbs & Spices', amount: 'to taste', calories: '5' }
          ],
          instructions: 'Roast turkey with vegetables and serve over wild rice. Season with herbs and spices.'
        }
      }
    }
  };

  const nutritionTips = [
    {
      title: 'Stay Hydrated',
      description: 'Drink at least 8 glasses of water daily to support metabolism and overall health.',
      icon: '💧'
    },
    {
      title: 'Eat Regularly',
      description: 'Consume meals every 3-4 hours to maintain stable blood sugar levels.',
      icon: '⏰'
    },
    {
      title: 'Portion Control',
      description: 'Use smaller plates and measure portions to avoid overeating.',
      icon: '📏'
    },
    {
      title: 'Plan Ahead',
      description: 'Meal prep on weekends to ensure you stick to your nutrition plan.',
      icon: '📋'
    },
    {
      title: 'Read Labels',
      description: 'Check nutrition labels to make informed food choices.',
      icon: '🏷️'
    },
    {
      title: 'Listen to Your Body',
      description: 'Eat when hungry and stop when satisfied, not stuffed.',
      icon: '👂'
    }
  ];

  const handleMealExpand = (mealKey) => {
    setExpandedMeal(expandedMeal === mealKey ? null : mealKey);
  };

  return (
    <BackgroundVideo videoSrc={videoUrls.diet}>
      <div className="diet-page">
        <div className="container">
          <motion.div
            className="diet-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <RestaurantIcon className="header-icon" />
          <h1>Nutrition & Diet Plans</h1>
          <p>
            Fuel your fitness journey with personalized nutrition plans designed by our expert dietitians. 
            Choose the plan that aligns with your goals and lifestyle.
          </p>
        </motion.div>

        {/* Diet Plan Tabs */}
        <motion.div
          className="diet-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(dietPlans).map(([key, plan]) => (
            <button
              key={key}
              className={`diet-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
              style={{ '--plan-color': plan.color }}
            >
              <GoalIcon className="tab-icon" />
              <span>{plan.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Diet Plan */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="diet-plan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="plan-header">
              <div className="plan-info">
                <h2>{dietPlans[activeTab].title}</h2>
                <p>{dietPlans[activeTab].description}</p>
              </div>
              <div className="plan-stats">
                <div className="stat">
                  <ScheduleIcon />
                  <span>{dietPlans[activeTab].duration}</span>
                </div>
                <div className="stat">
                  <TrendingIcon />
                  <span>{dietPlans[activeTab].calories} cal/day</span>
                </div>
                <div className="stat">
                  <CheckIcon />
                  <span>{dietPlans[activeTab].difficulty}</span>
                </div>
              </div>
            </div>

            <div className="meals-container">
              {Object.entries(dietPlans[activeTab].meals).map(([mealKey, meal]) => (
                <motion.div
                  key={mealKey}
                  className="meal-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div
                    className="meal-header"
                    onClick={() => handleMealExpand(mealKey)}
                  >
                    <div className="meal-info">
                      <MealIcon className="meal-icon" />
                      <div>
                        <h3>{meal.name}</h3>
                        <p>{meal.time} • {meal.calories} calories</p>
                      </div>
                    </div>
                    <button className="expand-button">
                      {expandedMeal === mealKey ? <CollapseIcon /> : <ExpandIcon />}
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedMeal === mealKey && (
                      <motion.div
                        className="meal-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="foods-list">
                          <h4>Ingredients:</h4>
                          {meal.foods.map((food, index) => (
                            <div key={index} className="food-item">
                              <span className="food-name">{food.name}</span>
                              <span className="food-amount">{food.amount}</span>
                              <span className="food-calories">{food.calories} cal</span>
                            </div>
                          ))}
                        </div>
                        <div className="instructions">
                          <h4>Instructions:</h4>
                          <p>{meal.instructions}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nutrition Tips */}
        <motion.div
          className="nutrition-tips"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Nutrition Tips & Guidelines</h2>
          <div className="tips-grid">
            {nutritionTips.map((tip, index) => (
              <motion.div
                key={index}
                className="tip-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="tip-icon">{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default Diet;
