import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StorageUsageProps extends React.HTMLAttributes<HTMLDivElement> {}

export function StorageUsage({ className, ...props }: StorageUsageProps) {
  const totalStorage = 100; // GB
  const usedStorage = 68; // GB
  const percentageUsed = (usedStorage / totalStorage) * 100;

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Storage Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress value={percentageUsed} className="h-2" />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{usedStorage} GB used</span>
            <span>{totalStorage} GB total</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {percentageUsed.toFixed(1)}% of your storage has been used
        </p>
      </CardContent>
    </Card>
  );
}
