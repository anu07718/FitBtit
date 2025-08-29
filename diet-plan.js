document.addEventListener('DOMContentLoaded', function() {
    const generatePlanBtn = document.getElementById('generatePlanBtn');
    const dietPlanContainer = document.getElementById('dietPlanContainer');
    const dietTypeSelect = document.getElementById('dietType');
    const calorieGoalInput = document.getElementById('calorieGoal');
    const savePlanBtn = document.getElementById('savePlanBtn');
    const progressResult = document.getElementById('progressResult');
    const navbarLinks = document.querySelectorAll('#navbar a');

    // Expanded sample diet plans
    const dietPlans = {
        default: [
            {
                day: 'Day 1',
                meals: [
                    { name: 'Breakfast: Oatmeal with Fruits', calories: 300 },
                    { name: 'Lunch: Grilled Chicken Salad', calories: 450 },
                    { name: 'Dinner: Baked Salmon with Quinoa', calories: 500 },
                    { name: 'Snack: Greek Yogurt', calories: 150 }
                ]
            },
            {
                day: 'Day 2',
                meals: [
                    { name: 'Breakfast: Smoothie with Banana', calories: 250 },
                    { name: 'Lunch: Turkey Sandwich', calories: 400 },
                    { name: 'Dinner: Stir-fried Vegetables with Tofu', calories: 450 },
                    { name: 'Snack: Mixed Nuts', calories: 200 }
                ]
            },
            {
                day: 'Day 3',
                meals: [
                    { name: 'Breakfast: Scrambled Eggs with Spinach', calories: 350 },
                    { name: 'Lunch: Quinoa Bowl with Black Beans', calories: 400 },
                    { name: 'Dinner: Grilled Shrimp with Veggies', calories: 500 },
                    { name: 'Snack: Apple with Peanut Butter', calories: 180 }
                ]
            }
        ],
        vegetarian: [
            {
                day: 'Day 1',
                meals: [
                    { name: 'Breakfast: Smoothie with Spinach', calories: 250 },
                    { name: 'Lunch: Quinoa Salad with Chickpeas', calories: 400 },
                    { name: 'Dinner: Vegetable Stir-fry', calories: 450 },
                    { name: 'Snack: Hummus with Carrots', calories: 200 }
                ]
            },
            {
                day: 'Day 2',
                meals: [
                    { name: 'Breakfast: Avocado Toast', calories: 300 },
                    { name: 'Lunch: Lentil Soup', calories: 350 },
                    { name: 'Dinner: Stuffed Bell Peppers', calories: 400 },
                    { name: 'Snack: Trail Mix', calories: 150 }
                ]
            },
            {
                day: 'Day 3',
                meals: [
                    { name: 'Breakfast: Chia Seed Pudding', calories: 250 },
                    { name: 'Lunch: Caprese Salad', calories: 300 },
                    { name: 'Dinner: Zucchini Noodles with Marinara', calories: 400 },
                    { name: 'Snack: Fruit Salad', calories: 150 }
                ]
            }
        ],
        'low-carb': [
            {
                day: 'Day 1',
                meals: [
                    { name: 'Breakfast: Scrambled Eggs with Avocado', calories: 350 },
                    { name: 'Lunch: Grilled Chicken with Broccoli', calories: 400 },
                    { name: 'Dinner: Zucchini Noodles with Pesto', calories: 500 },
                    { name: 'Snack: Cheese Sticks', calories: 150 }
                ]
            },
            {
                day: 'Day 2',
                meals: [
                    { name: 'Breakfast: Omelette with Spinach', calories: 300 },
                    { name: 'Lunch: Tuna Salad', calories: 350 },
                    { name: 'Dinner: Beef Stir-fry', calories: 500 },
                    { name: 'Snack: Celery with Cream Cheese', calories: 100 }
                ]
            },
            {
                day: 'Day 3',
                meals: [
                    { name: 'Breakfast: Greek Yogurt with Berries', calories: 250 },
                    { name: 'Lunch: Chicken Caesar Salad', calories: 400 },
                    { name: 'Dinner: Pork Chops with Asparagus', calories: 500 },
                    { name: 'Snack: Hard-boiled Eggs', calories: 140 }
                ]
            }
        ],
        'high-protein': [
            {
                day: 'Day 1',
                meals: [
                    { name: 'Breakfast: Protein Shake', calories: 300 },
                    { name: 'Lunch: Turkey Breast with Spinach', calories: 450 },
                    { name: 'Dinner: Grilled Steak with Asparagus', calories: 500 },
                    { name: 'Snack: Cottage Cheese', calories: 180 }
                ]
            },
            {
                day: 'Day 2',
                meals: [
                    { name: 'Breakfast: Egg White Omelette', calories: 250 },
                    { name: 'Lunch: Chicken Breast with Quinoa', calories: 400 },
                    { name: 'Dinner: Salmon with Brussels Sprouts', calories: 500 },
                    { name: 'Snack: Protein Bar', calories: 200 }
                ]
            },
            {
                day: 'Day 3',
                meals: [
                    { name: 'Breakfast: Greek Yogurt with Nuts', calories: 300 },
                    { name: 'Lunch: Shrimp Salad', calories: 450 },
                    { name: 'Dinner: Beef Stir-fry with Vegetables', calories: 500 },
                    { name: 'Snack: Almond Butter on Apple', calories: 180 }
                ]
            }
        ]
    };

    // Add this at the top of the existing JavaScript code
    const savedPlans = JSON.parse(localStorage.getItem('savedDietPlans')) || [];

    // Add this at the top of the existing JavaScript code
    const recipes = {
        default: [
            { name: 'Chicken Stir-fry', description: 'A quick and healthy chicken stir-fry with vegetables.' },
            { name: 'Vegetable Soup', description: 'A hearty vegetable soup packed with nutrients.' }
        ],
        vegetarian: [
            { name: 'Vegetable Curry', description: 'A delicious curry made with seasonal vegetables.' },
            { name: 'Chickpea Salad', description: 'A refreshing salad with chickpeas and herbs.' }
        ],
        'low-carb': [
            { name: 'Zucchini Noodles', description: 'Low-carb noodles made from zucchini, served with marinara sauce.' },
            { name: 'Cauliflower Rice', description: 'A healthy alternative to rice made from cauliflower.' }
        ],
        'high-protein': [
            { name: 'Grilled Chicken Breast', description: 'High-protein grilled chicken breast with spices.' },
            { name: 'Protein Pancakes', description: 'Fluffy pancakes made with protein powder.' }
        ]
    };

    // Event Listener for generating diet plan
    generatePlanBtn.addEventListener('click', generateDietPlan);

    // Add click event to navbar links
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navbarLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

    function generateDietPlan() {
        const selectedDietType = dietTypeSelect.value;
        const calorieGoal = parseInt(calorieGoalInput.value) || 2000; // Default to 2000 if not provided

        const randomPlan = dietPlans[selectedDietType][Math.floor(Math.random() * dietPlans[selectedDietType].length)];
        renderDietPlan(randomPlan, calorieGoal);
        renderRecipes(selectedDietType); // Render recipes based on diet type
        savePlanBtn.style.display = 'block'; // Show save button
    }

    function renderDietPlan(plan, calorieGoal) {
        dietPlanContainer.innerHTML = `
            <div class="diet-plan-item">
                <h3>${plan.day} (Goal: ${calorieGoal} calories)</h3>
                ${plan.meals.map(meal => `
                    <p>${meal.name} - ${meal.calories} calories</p>
                `).join('')}
            </div>
        `;
    }

    // Add this function to render recipes
    function renderRecipes(dietType) {
        const recipeList = document.getElementById('recipeList');
        recipeList.innerHTML = recipes[dietType].map(recipe => `
            <div class="recipe-item">
                <h4>${recipe.name}</h4>
                <p>${recipe.description}</p>
            </div>
        `).join('');
    }

    // Add event listener for saving the plan
    savePlanBtn.addEventListener('click', function() {
        const currentPlan = {
            type: dietTypeSelect.value,
            goal: calorieGoalInput.value,
            meals: dietPlanContainer.innerHTML
        };
        savedPlans.push(currentPlan);
        localStorage.setItem('savedDietPlans', JSON.stringify(savedPlans));
        showNotification('Diet plan saved successfully!', 'success');
    });
}); 