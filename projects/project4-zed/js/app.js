// ...existing code...

const form = document.getElementById('workout-form');
const dateInput = document.getElementById('workout-date');
const typeInput = document.getElementById('workout-type');
const durationInput = document.getElementById('workout-duration');
const listEl = document.getElementById('workout-list');
const totalWorkoutsEl = document.getElementById('total-workouts');
const totalMinutesEl = document.getElementById('total-minutes');

// Goal tracking elements
const goalInput = document.getElementById('goal-input');
const setGoalBtn = document.getElementById('set-goal-btn');
const weekMinutesEl = document.getElementById('week-minutes');
const goalTargetEl = document.getElementById('goal-target');
const progressFillEl = document.getElementById('progress-fill');
const progressTextEl = document.getElementById('progress-text');

let workouts = [];
let weeklyGoal = 0;

// Load workouts from localStorage on page load
init();

function init() {
    const stored = localStorage.getItem('workouts');
    if (stored) {
        try {
            workouts = JSON.parse(stored);
        } catch {
            workouts = [];
        }
    }
    
    // Load saved goal
    const savedGoal = localStorage.getItem('weeklyGoal');
    if (savedGoal) {
        weeklyGoal = Number(savedGoal);
    }
    
    render();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const workout = {
        id: Date.now().toString(),
        date: dateInput.value || new Date().toISOString().slice(0, 10),
        type: typeInput.value,
        duration: Number(durationInput.value)
    };

    workouts.push(workout);
    save();
    render();
    form.reset();
});

function save() {
    localStorage.setItem('workouts', JSON.stringify(workouts));
}

function render() {
    // Clear list
    listEl.innerHTML = '';

    let totalMinutes = 0;
    let weekMinutes = 0;
    
    // Calculate dates for "this week" (last 7 days)
    const today = new Date();
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);

    workouts.forEach((workout) => {
        totalMinutes += workout.duration;
        
        // Check if workout is from this week
        const workoutDate = new Date(workout.date);
        if (workoutDate >= weekAgo) {
            weekMinutes += workout.duration;
        }

        const li = document.createElement('li');
        li.className = 'workout-item';
        li.dataset.id = workout.id;

        li.innerHTML = `
            <div>
                <strong>${workout.type}</strong>
                <div class="workout-meta">
                    ${workout.date} • ${workout.duration} min
                </div>
            </div>
            <div class="workout-actions">
                <button type="button" data-action="delete">Delete</button>
            </div>
        `;

        listEl.appendChild(li);
    });

    // Update summary
    totalWorkoutsEl.textContent = workouts.length;
    totalMinutesEl.textContent = totalMinutes;
    
    // Update goal progress
    updateGoalProgress(weekMinutes);
}

// Handle delete via event delegation
listEl.addEventListener('click', (event) => {
    const button = event.target;
    if (button.dataset.action === 'delete') {
        const li = button.closest('.workout-item');
        const id = li.dataset.id;
        workouts = workouts.filter((w) => w.id !== id);
        save();
        render();
    }
});

// Set Goal Button Handler
setGoalBtn.addEventListener('click', () => {
    const goal = Number(goalInput.value);
    
    if (goal > 0) {
        weeklyGoal = goal;
        localStorage.setItem('weeklyGoal', weeklyGoal);
        goalInput.value = '';
        render();
    }
});

function updateGoalProgress(weekMinutes) {
    weekMinutesEl.textContent = weekMinutes;
    goalTargetEl.textContent = weeklyGoal;
    
    if (weeklyGoal === 0) {
        progressFillEl.style.width = '0%';
        progressTextEl.textContent = 'No goal set yet';
        progressTextEl.style.color = '#666';
        return;
    }
    
    const percentage = Math.min((weekMinutes / weeklyGoal) * 100, 100);
    progressFillEl.style.width = percentage + '%';
    
    if (weekMinutes >= weeklyGoal) {
        progressTextEl.textContent = '🎉 Goal achieved!';
        progressTextEl.style.color = '#22c55e';
    } else {
        const remaining = weeklyGoal - weekMinutes;
        progressTextEl.textContent = `${remaining} minutes to go!`;
        progressTextEl.style.color = '#ff1493';
    }
}