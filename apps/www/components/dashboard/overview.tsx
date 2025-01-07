import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FileText, GraduationCap } from "lucide-react";

const items = [
  {
    title: "Total Users",
    icon: Users,
    value: "10,483",
    change: "+12%",
    changeType: "positive",
  },
  {
    title: "Active Courses",
    icon: BookOpen,
    value: "243",
    change: "+4%",
    changeType: "positive",
  },
  {
    title: "Content Pages",
    icon: FileText,
    value: "1,832",
    change: "+7%",
    changeType: "positive",
  },
  {
    title: "Certifications",
    icon: GraduationCap,
    value: "562",
    change: "-2%",
    changeType: "negative",
  },
];

export function Overview() {
  return (
    <>
      {items.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p
              className={`text-xs ${item.changeType === "positive" ? "text-green-500" : "text-red-500"}`}
            >
              {item.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
