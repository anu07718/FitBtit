// Sample goals data
let goals = [
    {
        id: 1,
        type: 'Weight Loss',
        target: '70kg',
        current: '75kg',
        deadline: '2024-06-01',
        progress: 50,
        description: 'Reach target weight through consistent exercise and diet',
        status: 'active',
        startDate: '2024-01-01',
        milestones: [
            { value: '77kg', date: '2024-02-01', achieved: true },
            { value: '75kg', date: '2024-03-01', achieved: true },
            { value: '73kg', date: '2024-04-01', achieved: false },
            { value: '70kg', date: '2024-06-01', achieved: false }
        ]
    },
    {
        id: 2,
        type: 'Workout Frequency',
        target: '5 sessions/week',
        current: '3 sessions/week',
        deadline: '2024-04-01',
        progress: 60,
        description: 'Establish consistent workout routine',
        status: 'active',
        startDate: '2024-01-15'
    },
    {
        id: 3,
        type: 'Running Distance',
        target: '10km',
        current: '7km',
        deadline: '2024-05-01',
        progress: 70,
        description: 'Improve running endurance',
        status: 'active',
        startDate: '2024-02-01'
    }
];

// Initialize goals display
document.addEventListener('DOMContentLoaded', function() {
    displayGoals();
    initializeGoalsChart();

    // Event Listeners
    document.querySelector('.add-goal-btn').addEventListener('click', openGoalModal);

    const goalForm = document.getElementById('goalForm');
    const goalsContainer = document.getElementById('goalsContainer');
    let goals = []; // Array to store goals

    // Load existing goals from local storage if available
    if (localStorage.getItem('goals')) {
        goals = JSON.parse(localStorage.getItem('goals'));
        goals.forEach(goal => displayGoal(goal));
    }

    goalForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const goalName = document.getElementById('goalName').value;
        const goalTarget = document.getElementById('goalTarget').value;
        const goalCurrent = document.getElementById('goalCurrent').value;
        const goalUnit = document.getElementById('goalUnit').value;

        const newGoal = { name: goalName, target: goalTarget, current: goalCurrent, unit: goalUnit };
        goals.push(newGoal); // Add new goal to the array
        localStorage.setItem('goals', JSON.stringify(goals)); // Save to local storage

        displayGoal(newGoal); // Display the new goal

        // Clear the form
        goalForm.reset();
    });

    function displayGoal(goal) {
        const goalItem = document.createElement('div');
        goalItem.classList.add('goal-item');
        const progressPercentage = (goal.current / goal.target) * 100;

        goalItem.innerHTML = `
            <h2>${goal.name}</h2>
            <p>Target: <strong>${goal.target} ${goal.unit}</strong></p>
            <p>Current: <strong>${goal.current} ${goal.unit}</strong></p>
            <div class="progress-bar">
                <div class="progress" style="inline-size: ${progressPercentage}%;"></div>
            </div>
        `;
        goalsContainer.appendChild(goalItem);
    }
});

function displayGoals() {
    const goalsContainer = document.getElementById('goalsList');
    goalsContainer.innerHTML = '';

    goals.forEach(goal => {
        const goalElement = createGoalCard(goal);
        goalsContainer.appendChild(goalElement);
    });
}

function createGoalCard(goal) {
    const card = document.createElement('div');
    card.className = 'goal-card';
    card.innerHTML = `
        <div class="goal-status ${goal.status}">
            <i class="fas fa-circle"></i> ${capitalizeFirst(goal.status)}
        </div>
        <div class="goal-header">
            <div class="goal-type">
                <i class="fas ${getGoalIcon(goal.type)}"></i>
                <h3>${goal.type}</h3>
            </div>
            <div class="goal-progress">
                <svg class="progress-ring" width="60" height="60">
                    <circle class="progress-ring-circle-bg" cx="30" cy="30" r="25"/>
                    <circle class="progress-ring-circle" cx="30" cy="30" r="25"
                            style="stroke-dashoffset: ${calculateStrokeDashoffset(goal.progress)}"/>
                    <text x="30" y="30" class="progress-text">${goal.progress}%</text>
                </svg>
            </div>
        </div>
        <div class="goal-body">
            <div class="goal-metrics">
                <div class="metric">
                    <span class="label">Target</span>
                    <span class="value">${goal.target}</span>
                </div>
                <div class="metric">
                    <span class="label">Current</span>
                    <span class="value">${goal.current}</span>
                </div>
            </div>
            <p class="goal-description">${goal.description}</p>
            ${goal.milestones ? createMilestonesList(goal.milestones) : ''}
        </div>
        <div class="goal-footer">
            <div class="goal-deadline">
                <i class="fas fa-calendar"></i>
                Deadline: ${formatDate(goal.deadline)}
            </div>
            <div class="goal-actions">
                <button onclick="editGoal(${goal.id})" class="action-btn edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteGoal(${goal.id})" class="action-btn delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

function createMilestonesList(milestones) {
    return `
        <div class="milestones">
            <h4>Milestones</h4>
            <ul class="milestone-list">
                ${milestones.map(milestone => `
                    <li class="milestone ${milestone.achieved ? 'achieved' : ''}">
                        <i class="fas ${milestone.achieved ? 'fa-check-circle' : 'fa-circle'}"></i>
                        <span>${milestone.value}</span>
                        <span class="milestone-date">${formatDate(milestone.date)}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function initializeGoalsChart() {
    const ctx = document.getElementById('goalsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Weight Loss', 'Workout Frequency', 'Running Distance', 'Nutrition', 'Sleep'],
            datasets: [{
                label: 'Progress',
                data: [50, 60, 70, 40, 80],
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderColor: 'rgba(79, 70, 229, 1)',
                pointBackgroundColor: 'rgba(79, 70, 229, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(79, 70, 229, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            }
        }
    });
}

// Utility Functions
function getGoalIcon(type) {
    const icons = {
        'Weight Loss': 'fa-weight-scale',
        'Workout Frequency': 'fa-dumbbell',
        'Running Distance': 'fa-running',
        'Nutrition': 'fa-apple-whole',
        'Sleep': 'fa-bed'
    };
    return icons[type] || 'fa-bullseye';
}

function calculateStrokeDashoffset(progress) {
    const radius = 25;
    const circumference = 2 * Math.PI * radius;
    return circumference - (progress / 100) * circumference;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Modal Functions
function openGoalModal() {
    const modal = document.getElementById('goalModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeGoalModal() {
    const modal = document.getElementById('goalModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

function handleGoalSubmit(event) {
    event.preventDefault();
    // Add goal logic here
    closeGoalModal();
}

// CRUD Operations
function editGoal(id) {
    console.log('Editing goal:', id);
    // Implement edit functionality
}

function deleteGoal(id) {
    if (confirm('Are you sure you want to delete this goal?')) {
        console.log('Deleting goal:', id);
        // Implement delete functionality
    }
}

// Event Listeners
window.onclick = function(event) {
    const modal = document.getElementById('goalModal');
    if (event.target === modal) {
        closeGoalModal();
    }
} 