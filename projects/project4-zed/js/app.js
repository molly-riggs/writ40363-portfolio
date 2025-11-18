// ...existing code...

const form = document.getElementById('workout-form');
const dateInput = document.getElementById('workout-date');
const typeInput = document.getElementById('workout-type');
const durationInput = document.getElementById('workout-duration');
const listEl = document.getElementById('workout-list');
const totalWorkoutsEl = document.getElementById('total-workouts');
const totalMinutesEl = document.getElementById('total-minutes');

let workouts = [];

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

    workouts.forEach((workout) => {
        totalMinutes += workout.duration;

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