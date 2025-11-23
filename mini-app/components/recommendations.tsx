"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { List, ListItem } from "@/components/ui/list";
import { Button } from "@/components/ui/button";
import { type ReactElement } from "react";

export default function Recommendations(): ReactElement {
  const fields = [
    "Computer Science",
    "Biology",
    "Literature",
    "Mechanical Engineering",
    "Psychology",
    "Graphic Design",
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Recommended Fields of Study</CardTitle>
      </CardHeader>
      <CardContent>
        <List>
          {fields.map((field) => (
            <ListItem key={field}>{field}</ListItem>
          ))}
        </List>
        <Button variant="outline" className="mt-4">
          Explore More
        </Button>
      </CardContent>
    </Card>
  );
}
