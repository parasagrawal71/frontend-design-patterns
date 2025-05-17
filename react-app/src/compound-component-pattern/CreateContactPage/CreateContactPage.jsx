import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./styles.module.css";

export function CreateContactPage() {
  return (
    <PageLayout>
      <ContactForm.Root>
        <div className={styles.content}>
          <h3>
            <ContactForm.Title />
          </h3>
          <ContactForm.FormInputs />
          <ContactForm.SubmitButtons />
        </div>
      </ContactForm.Root>
    </PageLayout>
  );
}

function PageLayout({ children }) {
  return <div className={styles["page-layout"]}>{children}</div>;
}
