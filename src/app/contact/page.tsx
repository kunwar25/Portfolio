// app/projects/page.js
import Contactinfo from "@/components/Contactinfo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
const ContactPage = () => {
  return (
<div className="contact-page">
      <BackgroundBeamsWithCollision 
        className="contact-beams"
        // If you want to pass custom CollisionMechanism props, do it here
      >
        
        <Contactinfo />  {/* Your contact content */}
        {/* Any additional contact details */}
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default ContactPage;
