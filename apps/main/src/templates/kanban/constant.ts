export const COLUMN_DATA = [
  { id: "col-1", title: "To Do" },
  { id: "col-2", title: "In Progress" },
  { id: "col-3", title: "Review" },
  { id: "col-4", title: "Done" },
]


export const TASKS_DATA = [
  {
    id: "task-1",
    title: "Set up project repo",
    desc: "Initialize GitHub repo with README and license",
    start_date: "2025-09-25",
    due_date: "2025-09-27",
    column_id: "col-1",
  },
  {
    id: "task-2",
    title: "Design UI mockups",
    desc: "Create wireframes for the Kanban board UI",
    start_date: "2025-09-26",
    due_date: "2025-09-30",
    column_id: "col-1",
  },
  {
    id: "task-3",
    title: "Implement drag & drop",
    desc: "Use dnd-kit to allow moving tasks across columns",
    start_date: "2025-09-27",
    due_date: "2025-10-02",
    column_id: "col-2",
  },
  {
    id: "task-4",
    title: "Write unit tests",
    desc: "Add tests for task creation and movement",
    start_date: "2025-09-28",
    due_date: "2025-10-05",
    column_id: "col-3",
  },
  {
    id: "task-5",
    title: "Deploy to Vercel",
    desc: "Deploy the Kanban board to Vercel with CI/CD",
    start_date: "2025-09-29",
    due_date: "2025-10-06",
    column_id: "col-4",
  },
]