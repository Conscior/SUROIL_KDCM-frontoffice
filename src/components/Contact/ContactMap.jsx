import { AspectRatio } from "@chakra-ui/react";

const ContactMap = () => {
  return (
    <AspectRatio ratio={16 / 9} rounded={"lg"}>
      <iframe
        src='https://www.google.com/maps/d/embed?mid=1cMgqnh4_g32TfjF11zxH3xWS37MvO2wQ&ehbc=2E312F'
        width='640'
        height='480'
      />
    </AspectRatio>
  );
};

export default ContactMap;
