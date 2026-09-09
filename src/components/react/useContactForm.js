import { useActionState } from "react";
import { initialState, submitContact } from "./contactForm.js";

export function useContactForm() {
  return useActionState(submitContact, initialState);
}
