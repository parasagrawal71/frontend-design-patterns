// Usage in EditContactPage.jsx
import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { EditContactModal } from "../EditContactModal/EditContactModal";

export function EditContactPage() {
  const { contactId } = useParams();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <PageLayout>
        <ContactForm.Root contactId={contactId}>
          <div className={styles["right-section"]}>
            <ContactForm.Title />
            <ContactForm.SubmitButtons />
          </div>
          <div className={styles.content}>
            <ContactForm.FormInputs />
          </div>
        </ContactForm.Root>
      </PageLayout>

      <button onClick={() => setOpen(true)}>Open Edit Contact Modal</button>
      <EditContactModal
        contactId={2}
        open={open}
        onClose={() => setOpen(false)}
      ></EditContactModal>
    </>
  );
}

function PageLayout({ children }) {
  return <div className={styles["page-layout"]}>{children}</div>;
}
