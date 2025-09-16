import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function NotConfigured() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>WordPress not configured</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <p>
          Add a WordPress GraphQL endpoint to <code>.env.local</code>, or enable
          mock mode:
        </p>
        <pre className="rounded-lg border bg-neutral-50 p-3">
          {`# Real backend (when ready)
WP_GRAPHQL_ENDPOINT=https://your-wp-host/graphql

# Or for local demo without WP:
WP_GRAPHQL_MOCK=true`}
        </pre>
        <p className="text-neutral-500">
          The app will automatically switch from mock data to real WooCommerce
          products once configured.
        </p>
      </CardContent>
    </Card>
  );
}
