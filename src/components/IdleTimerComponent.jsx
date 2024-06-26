import { useIdleTimer } from "react-idle-timer";
import { signOut } from "@aws-amplify/auth"; // Adjust based on your version

const IdleTimerComponent = () => {
  const handleOnIdle = async () => {
    console.log("User is idle. Logging out...");
    try {
      await signOut();
      window.location.reload(); // Redirect to login page or home page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useIdleTimer({
    timeout: 10 * 60 * 1000, // 10 minutes
    onIdle: handleOnIdle,
    debounce: 500,
  });

  return null; // This component doesn't render anything
};

export default IdleTimerComponent;
