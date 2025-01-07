import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecentActivityProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecentActivity({ className, ...props }: RecentActivityProps) {
  const activities = [
    { user: "John Doe", action: "created a new course", time: "2 hours ago" },
    { user: "Jane Smith", action: "updated content page", time: "4 hours ago" },
    {
      user: "Mike Johnson",
      action: "enrolled in Advanced React",
      time: "Yesterday",
    },
    {
      user: "Sarah Williams",
      action: "completed JavaScript Basics",
      time: "Yesterday",
    },
    { user: "Chris Lee", action: "added a new quiz", time: "2 days ago" },
  ];

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  {activity.user.charAt(0)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.user}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {activity.action}
                </p>
              </div>
              <div className="flex-shrink-0 text-sm text-gray-400">
                {activity.time}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
