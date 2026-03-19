import { useEffect } from "react";

import "../styles/global.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getUptime, updateUptimeStatus } from "@/pages/api/uptime";

interface UptimeType {
  id: number;
  status: string;
  created_at: string;
}

export function UptimePage() {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [uptime] = await Promise.all([getUptime()]);
      handleUpdate(uptime);
    } catch (error) {
      console.error("Error fetching uptime data:", error);
    }
  }

  const handleUpdate = async (uptime: UptimeType[]) => {
    const item = uptime[0];

    const newStatus = item.status ? "FALSE" : "TRUE";

    await updateUptimeStatus(item.id, newStatus);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center --background p-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-6xl font-extrabold">Uptime</CardTitle>
          <CardDescription>Monitoring the uptime of services.</CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <p className="mb-6">
            This page displays the current uptime status of our services. The
            status is updated in real-time to ensure you have the most accurate
            information. Click the button below to toggle the uptime status.
          </p>
          <Button
            variant="default"
            onClick={() => (window.location.href = "/")}
          >
            Go Back Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
