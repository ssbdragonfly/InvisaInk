
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProtectionDemo } from "@/components/ProtectionDemo";
import { toast } from "sonner";

export interface ProtectedContent {
  id: string;
  title: string;
  description: string | null;
  original_url: string;
  protected_url: string | null;
  status: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [protectedContent, setProtectedContent] = useState<ProtectedContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      
      fetchProtectedContent();
    };

    checkAuth();
  }, [navigate]);

  const fetchProtectedContent = async () => {
    try {
      const { data, error } = await supabase
        .from('protected_content')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProtectedContent(data || []);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Protect Your Content</h1>
        </div>
        
        <ProtectionDemo />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {protectedContent.map((content) => (
            <Card key={content.id}>
              <CardHeader>
                <CardTitle>{content.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {content.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Status: {content.status}
                  </span>
                  {content.protected_url && (
                    <Button variant="outline" asChild>
                      <a href={content.protected_url} target="_blank" rel="noopener noreferrer">
                        View Protected
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
