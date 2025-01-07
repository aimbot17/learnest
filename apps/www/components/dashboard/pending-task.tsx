import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export function PendingTasks() {
  const tasks = [
    { id: 1, title: "Review new course submissions", priority: "High" },
    { id: 2, title: "Update user onboarding flow", priority: "Medium" },
    { id: 3, title: "Prepare monthly analytics report", priority: "High" },
    { id: 4, title: "Schedule content team meeting", priority: "Low" },
    { id: 5, title: "Respond to support tickets", priority: "Medium" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center space-x-3">
              <Checkbox id={`task-${task.id}`} />
              <label
                htmlFor={`task-${task.id}`}
                className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {task.title}
              </label>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-800"
                    : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                }`}
              >
                {task.priority}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
