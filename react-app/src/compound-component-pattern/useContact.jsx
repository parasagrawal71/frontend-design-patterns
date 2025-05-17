import React, { useEffect } from "react";

const contacts = [
  {
    id: 1,
    name: "John Doe",
    email: "7o9qo@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "9TtX2@example.com",
    phone: "987-654-3210",
  },
];

const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function useGetContact(contactId) {
  const [data, setData] = React.useState(null);

  const optimizedGetContact = React.useCallback(getContact, [contactId]);

  useEffect(() => {
    optimizedGetContact(contactId);
  }, [contactId]);

  // Simulate fetching contact details
  async function getContact(contactId) {
    await simulateDelay(2000);
    const contact = contacts.find((c) => c.id === parseInt(contactId));
    setData(contact);
  }

  return {
    data,
  };
}

function useSaveContact({ onSuccess, onError }) {
  // Simulate saving contact details
  return React.useCallback(async ({ id, name, email, phone }) => {
    try {
      await simulateDelay(1500);
      // Simulate a successful save operation
      const isSuccess = true;

      if (isSuccess) {
        if (!id) {
          contacts.push({
            id: contacts.length + 1,
            name,
            email,
            phone,
          });
        } else {
          const contact = contacts.find((c) => c.id === parseInt(id));
          if (!contact) {
            throw new Error("Contact not found");
          }
          const contactToUpdate = {
            name,
            email,
            phone,
          };
          Object.assign(contact, contactToUpdate);
        }

        console.log("Contact saved successfully", contacts);
        onSuccess && onSuccess();
      } else {
        onError && onError(new Error("Failed to save contact"));
      }
    } catch (error) {
      onError && onError(error);
    }
  }, []);
}

export { useGetContact, useSaveContact };
