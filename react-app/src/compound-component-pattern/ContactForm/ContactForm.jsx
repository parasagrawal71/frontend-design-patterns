import { createContext, useContext, useState, useEffect } from "react";
import { useGetContact, useSaveContact } from "../useContact";
import "./styles.css";

// Create the context
const ContactFormContext = createContext(null);

// Hook to use the context
function useContactFormContext() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error(
      "ContactForm subcomponents must be used within ContactForm.Root",
    );
  }
  return context;
}

// Root component that manages state and logic
function Root({ contactId, children }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch contact details
  const { data: contact } = useGetContact(contactId);

  // Save contact mutation
  const saveContact = useSaveContact({
    onSuccess: () => {
      // Handle success
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  // Set initial form data
  useEffect(() => {
    if (contact) {
      setFormState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      });
    }
  }, [contact]);

  // Handle form submission
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await saveContact({
        id: contactId,
        ...formState,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Context value
  const value = {
    contact,
    formState,
    setFormState,
    error,
    isLoading,
    handleSubmit,
  };

  return (
    <ContactFormContext.Provider value={value}>
      {children}
    </ContactFormContext.Provider>
  );
}

// Title component
function Title() {
  const { contact } = useContactFormContext();
  return <>{contact ? `Edit ${contact.name}` : "Create Contact"}</>;
}

// Submit buttons component
function SubmitButtons({ onCancelCb, onSaveCb }) {
  const { handleSubmit, isLoading } = useContactFormContext();
  return (
    <div className="button-group">
      <button
        className="primary-button"
        onClick={() => {
          handleSubmit();
          onSaveCb?.();
        }}
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : "Save"}
      </button>
      <button
        className="secondary-button"
        onClick={() => {
          onCancelCb?.();
        }}
      >
        Cancel
      </button>
    </div>
  );
}

// Form inputs component
function FormInputs() {
  const { formState, setFormState, error, isLoading } = useContactFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="contact-form">
      {isLoading && <div>Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      {!isLoading && (
        <>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </form>
  );
}

// Export as a compound component
const ContactForm = {
  Root,
  Title,
  SubmitButtons,
  FormInputs,
};
export default ContactForm;
