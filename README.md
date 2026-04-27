# NEXUS
# Import in your pages:
import CalendarComponent from "./components/CalendarComponent";
import VideoCall from "./components/VideoCall";
import DocumentChamber from "./components/DocumentChamber";
import Payment from "./components/Payment";

# Add routes:
<Route path="/calendar" element={<CalendarComponent />} />
<Route path="/video" element={<VideoCall />} />
<Route path="/documents" element={<DocumentChamber />} />
<Route path="/payment" element={<Payment />} />
