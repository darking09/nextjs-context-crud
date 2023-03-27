export interface EditParams {
  params : {
    id: string;
  }
}

export interface FormProps {
  id?: string;
}

export interface ContextProps {
  children: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface Task {
  id: string;
  title: string;
  description: string;
}

export interface TaskContextType {
  tasks: Task[];
  createTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
}

export interface TaskCardProps {
  task: Task;
}

export interface TaskCardsProps {
  tasks: Task[];
}

export interface LocalStorage {
  state: Array<Task>;
  setState: (state: Array<Task>) => void;
}
