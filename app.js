/**
 * Smart To-Do List - Main Application JavaScript
 *
 * This file contains the core logic for managing and rendering tasks
 * in the Smart To-Do List application. It follows vanilla JavaScript
 * ES6+ standards with clean, well-commented code.
 */

// ============================================
// Application Initialization
// ============================================

/**
 * Initialize the application when DOM is fully loaded
 * This ensures all HTML elements are available before JavaScript executes
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Smart To-Do List application initialized successfully');

    // Initialize the application
    initializeApp();
});

// ============================================
// Main Initialization Function
// ============================================

/**
 * Main initialization function
 * Sets up the application state and renders the initial view
 */
function initializeApp() {
    console.log('Initializing app...');

    // Render the initial task list with seeded data
    renderTaskList();

    // ============================================
    // Example: Future Re-render Patterns
    // ============================================
    // The following commented examples illustrate how future stories will
    // modify the task array and trigger re-renders of the UI.
    // These patterns will be used when implementing add, edit, delete, and
    // toggle completion features in subsequent user stories.

    /* Example 1: Adding a new task
    // Create a new task object following the Task typedef structure
    const newTask = {
        id: Date.now(), // Use timestamp as unique ID
        title: 'New Task Example',
        description: 'This demonstrates adding a task to the array',
        priority: 'Medium',
        category: 'Personal',
        status: 'Pending',
        createdAt: Date.now(),
        completedAt: null
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    // Re-render the task list to reflect the changes
    renderTaskList();
    console.log('Added new task and re-rendered');
    */

    /* Example 2: Removing a task by ID
    // Remove a task from the array (e.g., delete task with id 3)
    const taskIdToRemove = 3;
    tasks = tasks.filter(task => task.id !== taskIdToRemove);

    // Re-render the task list to reflect the changes
    renderTaskList();
    console.log(`Removed task ${taskIdToRemove} and re-rendered`);
    */

    /* Example 3: Updating a task (e.g., marking as completed)
    // Find a task by ID and update its properties
    const taskIdToComplete = 1;
    const taskToUpdate = tasks.find(task => task.id === taskIdToComplete);

    if (taskToUpdate) {
        // Update task status and completion timestamp
        taskToUpdate.status = 'Completed';
        taskToUpdate.completedAt = Date.now();

        // Re-render the task list to reflect the changes
        renderTaskList();
        console.log(`Updated task ${taskIdToComplete} to completed and re-rendered`);
    }
    */

    /* Example 4: Modifying task properties (e.g., changing priority)
    // Find and modify a task's priority level
    const taskIdToModify = 2;
    const taskToModify = tasks.find(task => task.id === taskIdToModify);

    if (taskToModify) {
        taskToModify.priority = 'High';
        taskToModify.title = 'Updated: ' + taskToModify.title;

        // Re-render the task list to reflect the changes
        renderTaskList();
        console.log(`Modified task ${taskIdToModify} and re-rendered`);
    }
    */

    /* Example 5: Clearing all completed tasks
    // Filter out all completed tasks
    const completedCount = tasks.filter(task => task.status === 'Completed').length;
    tasks = tasks.filter(task => task.status === 'Pending');

    // Re-render the task list to reflect the changes
    renderTaskList();
    console.log(`Removed ${completedCount} completed tasks and re-rendered`);
    */

    console.log('App initialization complete');
}

// ============================================
// Task Data Model & State
// ============================================

/**
 * Task Model Structure:
 * Each task object contains the following properties:
 * @typedef {Object} Task
 * @property {number} id - Unique identifier for the task
 * @property {string} title - Task title (required, non-empty)
 * @property {string} description - Detailed description (optional)
 * @property {('Low'|'Medium'|'High')} priority - Task priority level
 * @property {('Personal'|'Work'|'Study'|'Other')} category - Task category
 * @property {('Pending'|'Completed')} status - Current status of the task
 * @property {number} createdAt - Timestamp when task was created
 * @property {number|null} completedAt - Timestamp when task was completed (null if pending)
 */

/**
 * In-memory task storage - Single source of truth for all tasks
 * This array will be used for all rendering and task management operations
 */
let tasks = [
    // Pending Tasks - High Priority
    {
        id: 1,
        title: "Complete project documentation",
        description: "Write comprehensive documentation for the Smart To-Do List project including setup instructions and feature descriptions",
        priority: "High",
        category: "Work",
        status: "Pending",
        createdAt: Date.now() - 3600000, // 1 hour ago
        completedAt: null
    },
    {
        id: 2,
        title: "Prepare presentation slides",
        description: "Create slides for the quarterly business review meeting scheduled for next week",
        priority: "High",
        category: "Work",
        status: "Pending",
        createdAt: Date.now() - 7200000, // 2 hours ago
        completedAt: null
    },

    // Pending Tasks - Medium Priority
    {
        id: 3,
        title: "Study JavaScript design patterns",
        description: "Review and practice common design patterns including Singleton, Observer, and Factory patterns",
        priority: "Medium",
        category: "Study",
        status: "Pending",
        createdAt: Date.now() - 86400000, // 1 day ago
        completedAt: null
    },
    {
        id: 4,
        title: "Buy groceries",
        description: "Get milk, eggs, bread, vegetables, and fruits from the supermarket",
        priority: "Medium",
        category: "Personal",
        status: "Pending",
        createdAt: Date.now() - 172800000, // 2 days ago
        completedAt: null
    },

    // Pending Tasks - Low Priority
    {
        id: 5,
        title: "Organize photo library",
        description: "Sort and categorize photos from the past year into appropriate albums",
        priority: "Low",
        category: "Personal",
        status: "Pending",
        createdAt: Date.now() - 259200000, // 3 days ago
        completedAt: null
    },
    {
        id: 6,
        title: "Research vacation destinations",
        description: "",
        priority: "Low",
        category: "Other",
        status: "Pending",
        createdAt: Date.now() - 432000000, // 5 days ago
        completedAt: null
    },

    // Completed Tasks - Various Priorities
    {
        id: 7,
        title: "Submit expense report",
        description: "Compile and submit monthly expense report with all receipts attached",
        priority: "High",
        category: "Work",
        status: "Completed",
        createdAt: Date.now() - 604800000, // 7 days ago
        completedAt: Date.now() - 518400000 // 6 days ago
    },
    {
        id: 8,
        title: "Read Chapter 5 of textbook",
        description: "Complete reading assignment for Computer Science course",
        priority: "Medium",
        category: "Study",
        status: "Completed",
        createdAt: Date.now() - 777600000, // 9 days ago
        completedAt: Date.now() - 691200000 // 8 days ago
    },
    {
        id: 9,
        title: "Call dentist for appointment",
        description: "Schedule regular checkup and cleaning appointment",
        priority: "Low",
        category: "Personal",
        status: "Completed",
        createdAt: Date.now() - 1209600000, // 14 days ago
        completedAt: Date.now() - 1123200000 // 13 days ago
    }
];

// ============================================
// Render Functions
// ============================================

/**
 * Sorts tasks according to the ordering rules:
 * 1. Pending tasks appear before Completed tasks
 * 2. Within each status group, tasks are sorted by createdAt descending (newest first)
 *
 * @param {Task[]} taskArray - Array of task objects to sort
 * @returns {Task[]} New sorted array (does not mutate original)
 */
function sortTasks(taskArray) {
    // Create a copy of the array to avoid mutating the original
    return [...taskArray].sort((a, b) => {
        // First priority: Sort by status (Pending before Completed)
        if (a.status !== b.status) {
            return a.status === 'Pending' ? -1 : 1;
        }

        // Second priority: Within same status, sort by createdAt descending (newest first)
        return b.createdAt - a.createdAt;
    });
}

/**
 * Creates a DOM element for a single task
 * Generates all necessary child elements and applies appropriate classes and attributes
 *
 * @param {Task} task - The task object to render
 * @returns {HTMLLIElement} The complete task list item element
 */
function createTaskElement(task) {
    // Create the main task item container
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-task-id', task.id);
    taskItem.setAttribute('data-status', task.status);

    // Add completed class if task is completed
    if (task.status === 'Completed') {
        taskItem.classList.add('task-completed');
    }

    // Create checkbox container
    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'task-checkbox-container';

    // Create checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.status === 'Completed';
    // Note: Checkbox behavior will be implemented in a future story

    checkboxContainer.appendChild(checkbox);

    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'task-content';

    // Create task title
    const title = document.createElement('h3');
    title.className = 'task-title';
    title.textContent = task.title;

    // Create task description
    const description = document.createElement('p');
    description.className = 'task-description';
    description.textContent = task.description || ''; // Handle empty descriptions

    // Create metadata container (priority and category)
    const metaContainer = document.createElement('div');
    metaContainer.className = 'task-meta';

    // Create priority badge
    const priorityBadge = document.createElement('span');
    priorityBadge.className = `task-priority priority-${task.priority.toLowerCase()}`;
    priorityBadge.textContent = task.priority;

    // Create category badge
    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'task-category';
    categoryBadge.textContent = task.category;

    // Append priority and category to meta container
    metaContainer.appendChild(priorityBadge);
    metaContainer.appendChild(categoryBadge);

    // Append all content elements to content container
    contentContainer.appendChild(title);
    contentContainer.appendChild(description);
    contentContainer.appendChild(metaContainer);

    // Create actions container
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'task-actions';

    // Create edit button
    const editButton = document.createElement('button');
    editButton.className = 'task-edit-btn';
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.setAttribute('aria-label', 'Edit task');
    // Note: Edit functionality will be implemented in a future story

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-delete-btn';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.setAttribute('aria-label', 'Delete task');
    // Note: Delete functionality will be implemented in a future story

    // Append buttons to actions container
    actionsContainer.appendChild(editButton);
    actionsContainer.appendChild(deleteButton);

    // Assemble the complete task item
    taskItem.appendChild(checkboxContainer);
    taskItem.appendChild(contentContainer);
    taskItem.appendChild(actionsContainer);

    return taskItem;
}

/**
 * Main render function - Renders the task list into the DOM
 * This function is idempotent and can be called multiple times to re-render the list
 *
 * @param {Task[]} taskArray - Array of tasks to render (defaults to global tasks array)
 */
function renderTaskList(taskArray = tasks) {
    // Get references to DOM elements
    const emptyStateElement = document.getElementById('empty-state');
    const taskListElement = document.getElementById('task-list');

    // Validate that required DOM elements exist
    if (!emptyStateElement || !taskListElement) {
        console.error('Required DOM elements not found. Cannot render task list.');
        return;
    }

    // Clear any existing task items from the list
    taskListElement.innerHTML = '';

    // Check if the task array is empty
    if (taskArray.length === 0) {
        // Show empty state, hide task list
        emptyStateElement.classList.remove('hidden');
        taskListElement.classList.add('hidden');
        console.log('No tasks to display - showing empty state');
        return;
    }

    // Hide empty state, show task list
    emptyStateElement.classList.add('hidden');
    taskListElement.classList.remove('hidden');

    // Sort tasks according to ordering rules
    const sortedTasks = sortTasks(taskArray);

    // Create and append DOM elements for each task
    sortedTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskListElement.appendChild(taskElement);
    });

    console.log(`Rendered ${sortedTasks.length} tasks successfully`);
}

// ============================================
// Utility Functions (Placeholder)
// ============================================

// Helper functions for task management will be added in future steps
