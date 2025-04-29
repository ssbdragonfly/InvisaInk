
import * as React from "react";
import { 
  CheckCircle, 
  XCircle,
  Info
} from "lucide-react";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function ProtectionComparison() {
  const comparisonData = [
    {
      feature: "Image Protection",
      invisaInk: true,
      photoGuard: true,
      watermark: false,
      info: "Ability to protect static images from AI training and mimicry"
    },
    {
      feature: "Video Protection",
      invisaInk: true,
      photoGuard: false,
      watermark: false,
      info: "Protection for video content against AI analysis and training"
    },
    {
      feature: "Imperceptible to Humans",
      invisaInk: true,
      photoGuard: true,
      watermark: false,
      info: "Protection doesn't visibly alter the appearance of content"
    },
    {
      feature: "Adaptive Defense",
      invisaInk: true,
      photoGuard: false,
      watermark: false,
      info: "Protection evolves to counter new AI model architectures"
    },
    {
      feature: "Opt-Out Automation",
      invisaInk: true,
      photoGuard: false,
      watermark: false,
      info: "Automatically registers content with AI opt-out databases"
    },
    {
      feature: "Blockchain Provenance",
      invisaInk: true,
      photoGuard: false,
      watermark: true,
      info: "Cryptographically verifiable proof of content ownership"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">How We Compare</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            InvisaInk offers the most complete protection against AI exploitation compared to alternatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <Table className="border rounded-lg overflow-hidden">
              <TableCaption>Comprehensive comparison of content protection solutions</TableCaption>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="w-[300px]">Feature / Capability</TableHead>
                  <TableHead className="text-center">InvisaInk</TableHead>
                  <TableHead className="text-center">PhotoGuard</TableHead>
                  <TableHead className="text-center">Traditional Watermark</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium flex items-center gap-1">
                      {row.feature}
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 text-sm">
                          {row.info}
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>
                    <TableCell className="text-center">
                      {row.invisaInk ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.photoGuard ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.watermark ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/60 backdrop-blur-sm rounded-lg border p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-invisaBlue to-invisaPurple mb-4 text-white">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium mb-2">InvisaInk</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Complete protection for images and videos with adaptive defenses and blockchain provenance.
              </p>
              <div className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs inline-flex items-center">
                <CheckCircle className="h-3 w-3 mr-1" /> Recommended
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-lg border p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium mb-2">PhotoGuard</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Basic protection for static images only. Limited defense against evolving AI models.
              </p>
              <div className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs inline-flex items-center">
                Limited Protection
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-lg border p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Watermarking</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Traditional visible watermarks that degrade image quality and can be removed by AI.
              </p>
              <div className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs inline-flex items-center">
                Inadequate for AI Era
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
