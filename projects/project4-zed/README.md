# Fitness Tracker - AI-Assisted Web Application

**Project 4: Zed (AI-Assisted Development)**  
**Course:** WRIT 40363 - Digital Communication & Design Applications  
**Semester:** Spring 2025

## 📋 Project Overview

This fitness tracker is a web application built collaboratively with GitHub Copilot as an AI pair programming partner. The project demonstrates effective human-AI collaboration in web development while creating a practical tool for logging and tracking workout progress.

### Core Features
- **Workout Logging**: Record workouts with date, type, and duration
- **Progress Tracking**: View total workouts and accumulated minutes
- **Workout History**: Browse and manage past workout entries
- **Data Persistence**: All workout data stored locally using `localStorage`

## 🎯 Learning Objectives

This project explores:
1. **AI-Assisted Development**: Working with GitHub Copilot as a pair programming partner
2. **Effective Prompting**: Learning to ask clear, specific questions to AI tools
3. **Code Review & Testing**: Evaluating and testing AI-generated code
4. **Documentation**: Recording the development process and AI collaboration

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and forms
- **CSS3**: Responsive styling and layout
- **JavaScript (ES6+)**: DOM manipulation, event handling, and localStorage
- **GitHub Copilot**: AI pair programming assistant

## 📁 Project Structure

```
project4-zed/
├── index.html              # Main HTML structure
├── css/
│   └── styles.css         # Application styles
├── js/
│   └── app.js             # Core application logic
├── README.md              # Project documentation (this file)
├── CLAUDE.md              # AI collaboration guidelines
└── AI_COLLABORATION_LOG.md # Development session logs
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor or IDE (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start logging workouts!

No build process or dependencies required—this is a vanilla JavaScript application.

## 💡 How to Use

1. **Log a Workout**:
   - Select a date (defaults to today)
   - Choose a workout type from the dropdown
   - Enter duration in minutes
   - Click "Add Workout"

2. **View Progress**:
   - See total workouts logged
   - Track total minutes exercised
   - Review workout history

3. **Manage Workouts**:
   - Delete individual workouts using the "Delete" button
   - All data persists between sessions

## 📝 AI Collaboration Process

This project was built using GitHub Copilot following these principles:

### What Makes a Good Question
- **Specific**: Clear, focused requests (e.g., "Add a delete button to each workout item")
- **Contextual**: Include file names, error messages, and relevant code
- **Goal-oriented**: State the desired outcome explicitly
- **Incremental**: Break complex features into smaller tasks

### Development Workflow
1. Start with basic HTML structure
2. Add minimal CSS for usability
3. Implement core JavaScript functionality incrementally
4. Test each feature before moving to the next
5. Refine and debug with AI assistance

See `CLAUDE.md` for detailed guidelines on working with AI assistants.

## 📊 Features Roadmap

### Current Version (v1.0)
- ✅ Basic workout logging
- ✅ localStorage persistence
- ✅ Simple progress summary
- ✅ Delete functionality

### Future Enhancements (Potential v2.0)
- [ ] Weekly/monthly progress charts
- [ ] Additional workout types and custom categories
- [ ] Export data as CSV or JSON
- [ ] Dark mode toggle
- [ ] Workout statistics and analytics
- [ ] Goal setting and tracking

## 🧪 Testing

Manual testing checklist:
- [ ] Form submits correctly with all required fields
- [ ] Workouts appear in history list
- [ ] Summary totals update accurately
- [ ] Delete button removes correct workout
- [ ] Data persists after page refresh
- [ ] Form resets after submission
- [ ] Responsive design works on mobile

## 🤝 AI Collaboration Log

Detailed logs of AI-assisted development sessions are maintained in `AI_COLLABORATION_LOG.md`. This includes:
- Questions asked to the AI
- Code suggestions received
- Decisions made during development
- Debugging sessions
- Reflections on the AI collaboration process

## 📚 Resources

- [MDN Web Docs - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN Web Docs - HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)

## 🎓 Reflection

*This section will be completed at project conclusion with reflections on:*
- Effectiveness of AI collaboration
- Learning outcomes
- Challenges and solutions
- Future applications of AI-assisted development

## 📄 License

This project was created as part of coursework for WRIT 40363 at TCU.

## 👤 Author

**Molly Riggs**  
WRIT 40363 - Digital Communication & Design Applications  
Texas Christian University, Spring 2025

---

**Note**: This project emphasizes the process of AI-assisted development as much as the final product. The goal is to learn effective collaboration strategies with AI tools while building a functional web application.
