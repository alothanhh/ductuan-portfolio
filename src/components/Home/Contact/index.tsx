"use client";
import { useContext } from "react";
import { Box } from "@mantine/core";

import { ScrollContext } from "@/contexts/ScrollContext";
import useWindowSize from "@/hooks/use-window-size";

import Title from "../../common/Title";
import ScrollFadeUp from "../../shared/scroll-fade-up";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  const { isMobile } = useWindowSize();
  const { targetId, targetRef } = useContext(ScrollContext);

  return (
    <ScrollFadeUp repeat>
      <Box
        id="contact"
        ref={targetId === "contact" ? targetRef : null}
        style={{
          paddingTop: "32px",
        }}
      >
        <Title text="CONTACT" />
        <Box
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "32px",
            alignContent: "center",
            justifyContent: "center",
            padding: isMobile ? "32px 16px" : "32px",
          }}
        >
          <ContactInfo />
          <ContactForm />
        </Box>
      </Box>
    </ScrollFadeUp>
  );
}

export default Contact;
