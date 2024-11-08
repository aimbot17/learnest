import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Button from "@/components/button.component";

export default function BookingPage() {
  const calLink = import.meta.env.VITE_CAL_LINK;

  if (!calLink) {
    return <div>Error: Cal.com link not configured</div>;
  }

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "code-school" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Button
      variant="outline"
      size="small"
      className="mb-8"
      data-cal-namespace="code-school"
      data-cal-link="joshiutsav/code-school"
      data-cal-config='{"layout":"month_view"}'
    >
      Try Demo
    </Button>
  );
}
