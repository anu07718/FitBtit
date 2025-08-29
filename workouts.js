// Sample workout data (replace with actual data from your backend)
let workouts = [
    {
        id: 1,
        type: 'cardio',
        duration: 45,
        calories: 400,
        date: '2024-02-20',
        notes: 'Morning run - felt great!'
    },
    {
        id: 2,
        type: 'strength',
        duration: 60,
        calories: 300,
        date: '2024-02-19',
        notes: 'Upper body workout, increased weights'
    }
];

// Function to display workouts
function displayWorkouts() {
    const workoutsList = document.getElementById('workoutsList');
    workoutsList.innerHTML = '';

    workouts.forEach(workout => {
        const workoutCard = document.createElement('div');
        workoutCard.className = 'workout-card';
        workoutCard.innerHTML = `
            <h3>${capitalizeFirstLetter(workout.type)}</h3>
            <div class="workout-stats">
                <div class="workout-stat">
                    <span>Duration</span>
                    <strong>${workout.duration} min</strong>
                </div>
                <div class="workout-stat">
                    <span>Calories</span>
                    <strong>${workout.calories}</strong>
                </div>
            </div>
            <div class="workout-notes">
                <p>${workout.notes}</p>
                <small>${formatDate(workout.date)}</small>
            </div>
        `;
        workoutsList.appendChild(workoutCard);
    });
}

// Function to open the new workout modal
function openWorkoutModal() {
    const modal = document.getElementById('workoutModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

// Function to close the new workout modal
function closeWorkoutModal() {
    const modal = document.getElementById('workoutModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

// Handle new workout form submission
function handleWorkoutSubmit(event) {
    event.preventDefault();
    // Add workout logic here
    closeWorkoutModal();
}

// Utility functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const addWorkoutBtn = document.querySelector('.add-workout-btn');
    
    // Open new workout modal
    addWorkoutBtn.addEventListener('click', openWorkoutModal);

    // Initialize workouts display
    displayWorkouts();
    initializeWorkoutChart();
});

function initializeWorkoutChart() {
    const ctx = document.getElementById('workoutChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Calories Burned',
                data: [320, 280, 200, 350, 400, 250, 300],
                backgroundColor: 'rgba(79, 70, 229, 0.6)',
                borderColor: 'rgba(79, 70, 229, 1)',
                borderinline-size: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            }
        }
    });
}

function addWorkoutToList(workout) {
    const workoutsList = document.getElementById('workoutsList');
    const workoutCard = document.createElement('div');
    workoutCard.className = 'workout-card';
    
    workoutCard.innerHTML = `
        <div class="workout-header">
            <div class="workout-type ${workout.type.toLowerCase()}">
                <i class="fas ${getWorkoutIcon(workout.type)}"></i>
                <h3>${workout.type}</h3>
            </div>
            <span class="workout-date">${formatDate(workout.date)}</span>
        </div>
        <div class="workout-body">
            <div class="workout-stats">
                <div class="stat">
                    <i class="fas fa-clock"></i>
                    <span>${workout.duration} mins</span>
                </div>
                <div class="stat">
                    <i class="fas fa-fire"></i>
                    <span>${workout.calories} cal</span>
                </div>
                <div class="stat">
                    <i class="fas fa-gauge-high"></i>
                    <span>${workout.intensity}</span>
                </div>
            </div>
            <div class="exercises-list">
                <h4>Exercises:</h4>
                <ul>
                    ${workout.exercises.map(ex => `<li>${ex}</li>`).join('')}
                </ul>
            </div>
            ${workout.notes ? `
                <div class="workout-notes">
                    <p>${workout.notes}</p>
                </div>
            ` : ''}
        </div>
        <div class="workout-actions">
            <button class="edit-btn" onclick="editWorkout(this)">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn" onclick="deleteWorkout(this)">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    
    workoutsList.insertBefore(workoutCard, workoutsList.firstChild);
}

function getWorkoutIcon(type) {
    const icons = {
        'Strength': 'fa-dumbbell',
        'Cardio': 'fa-running',
        'HIIT': 'fa-bolt',
        'Yoga': 'fa-om',
        'Other': 'fa-star'
    };
    return icons[type] || 'fa-star';
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function editWorkout(btn) {
    const workoutCard = btn.closest('.workout-card');
    // Implement edit functionality
    console.log('Edit workout:', workoutCard);
}

function deleteWorkout(btn) {
    const workoutCard = btn.closest('.workout-card');
    if (confirm('Are you sure you want to delete this workout?')) {
        workoutCard.remove();
    }
}

function initializeChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    // Check if a chart already exists and destroy it
    if (window.progressChart) {
        window.progressChart.destroy();
    }

    window.progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
            datasets: [
                {
                    label: "Weight",
                    data: [80, 79, 78, 77, 76, 75],
                    borderColor: "#ff4d4d",
                    tension: 0.4,
                    borderinline-size: 2,
                    fill: false
                },
                {
                    label: "Workouts",
                    data: [3, 4, 5, 4, 5, 6],
                    borderColor: "#ff8533",
                    tension: 0.4,
                    borderinline-size: 2,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        color: '#ffffff',
                        font: {
                            size: function(context) {
                                var width = context.chart.width;
                                return width < 600 ? 10 : 12;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    grid: {
                        display: true,
                        color: 'rgba(255,255,255,0.1)'
                    },
                    ticks: {
                        color: '#b3b3b3',
                        font: {
                            size: function(context) {
                                var width = context.chart.width;
                                return width < 600 ? 10 : 12;
                            }
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#b3b3b3',
                        font: {
                            size: function(context) {
                                var width = context.chart.width;
                                return width < 600 ? 10 : 12;
                            }
                        }
                    }
                }
            }
        }
    });
} 