import { Users, Code, Lightbulb, Trophy, Coffee, MapPin } from "lucide-react";

const timeSlots = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "1:00",
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:00",
];

const timelineEvents = [
  {
    title: "Inauguration",
    startTime: "9:00",
    duration: 2, // 1hr (2 slots)
    color: "#ef4444",
    border: "border-red-500",
    icon: Users,
    row: 0,
  },
  {
    title: "Technical Events",
    startTime: "10:00",
    duration: 4, // 3hr (6 slots)
    color: "#8b5cf6",
    border: "border-purple-500",
    icon: Code,
    row: 1,
  },
  // ...add other events, making sure startTime matches a slot and duration is in slots
];

const getSlotIndex = (startTime: string) => timeSlots.indexOf(startTime);

const TimelineSection = () => {
  // Each slot is the space between two grid lines
  const slotWidth = 100 / (timeSlots.length - 1);

  return (
    <section id="timeline" className="py-10 relative">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-8 overflow-x-auto bg-background/5 backdrop-blur-sm border border-white/10">
          <div
            className="relative"
            style={{
              minWidth: "1200px", // or any width that fits your timeline
              width: "1200px", // fixed width for desktop, scrollable on mobile
              margin: "0 auto",
            }}
          >
            {/* Time Header */}
            <div className="relative mb-6" style={{ height: 32 }}>
              {timeSlots.map((time, idx) => (
                <span
                  key={idx}
                  className="absolute text-sm text-foreground/60 font-medium"
                  style={{
                    left: `${(idx / (timeSlots.length - 1)) * 100}%`,
                    transform: "translateX(-50%)",
                    top: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {time}
                </span>
              ))}
            </div>
            {/* Timeline Grid */}
            <div className="relative" style={{ height: "520px" }}>
              {/* Grid Lines */}
              <div className="absolute inset-0 pointer-events-none">
                {timeSlots.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      left: `${(idx / (timeSlots.length - 1)) * 100}%`,
                      top: 0,
                      height: "100%",
                      width: "0px",
                      borderLeft: "2px solid #a3a3a3",
                      opacity: 0.18,
                      zIndex: 1,
                    }}
                  />
                ))}
              </div>
              {/* Event Blocks */}
              {timelineEvents.map((event, idx) => {
                const left =
                  getSlotIndex(event.startTime) *
                  (100 / (timeSlots.length - 1));
                const slotWidth = 100 / (timeSlots.length - 1);
                return (
                  <div
                    key={idx}
                    className={`absolute flex items-center px-4 py-3 rounded-lg bg-transparent ${event.border}`}
                    style={{
                      left: `${left}%`,
                      top: `${event.row * 52 + 24}px`,
                      width: `${event.duration * slotWidth}%`,
                      minWidth: "120px",
                      borderWidth: "2px",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      zIndex: 2,
                    }}
                  >
                    <event.icon className="h-6 w-6 mr-3 text-white opacity-80" />
                    <span className="text-white font-semibold text-base truncate">
                      {event.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
