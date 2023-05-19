interface Board {
  id: string
  name: string
  columns: Column[]
}

interface Column {
  id: string
  name: string
  tasks: Task[]
}

interface Task {
  id: string
  title: string
  description: string
  subtasks: Subtask[]
  status: TaskStatus
}

interface Subtask {
  id: string
  title: string
  isDone: boolean
}

enum TaskStatus {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}
