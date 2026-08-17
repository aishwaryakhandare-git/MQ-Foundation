import { Link } from "wouter";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FAFC] pt-20">
      <div className="text-center px-4">
        <h1 className="font-heading font-bold text-8xl text-[#1E5AA8] mb-4">
          404
        </h1>
        <h2 className="font-heading font-semibold text-2xl text-[#1F2937] mb-2">
          Page Not Found
        </h2>
        <p className="text-[#6B7280] mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on
          track.
        </p>
        <Link href="/">
          <Button className="bg-[#1E5AA8] text-white hover:bg-[#1a4d8f] rounded-full px-6">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
