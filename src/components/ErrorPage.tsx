import "../styles/global.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center --background p-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-6xl font-extrabold">404</CardTitle>
          <CardDescription>
            Oops! Page not found.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <p className="mb-6">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button 
            variant="default" 
            onClick={() => window.location.href = "/"}
          >
            Go Back Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}