import ContactForm from "../ContactForm/ContactForm";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

// Usage in EditContactModal.jsx
export function EditContactModal({ contactId, open, onClose }) {
  return (
    <ContactForm.Root contactId={contactId}>
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>
          <ContactForm.Title />
        </DialogTitle>

        <DialogContent>
          <ContactForm.FormInputs />
        </DialogContent>

        <DialogActions>
          <ContactForm.SubmitButtons onCancelCb={onClose} onSaveCb={onClose} />
        </DialogActions>
      </Dialog>
    </ContactForm.Root>
  );
}
