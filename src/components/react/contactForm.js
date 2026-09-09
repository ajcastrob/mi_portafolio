export const initialState = {
  ok: false,
  error: "",
  fieldErrors: {},
};

const FORMSPREE = import.meta.env.PUBLIC_URL_FORMSPREE;
const CONTACT_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isPhone(value) {
  return /^\+?[0-9]{7,15}$/.test(value.replace(/[\s().-]/g, ""));
}

function errorFor(name, value) {
  const v = value.trim();
  if (name === "name") return v.length < 2 ? "Escribe tu nombre." : "";
  if (name === "contact") {
    return CONTACT_EMAIL.test(v) || isPhone(v)
      ? ""
      : "Escribe un email o un WhatsApp.";
  }
  return v.length < 10 ? "Cuéntame un poco más (al menos 10 caracteres)." : "";
}

export async function submitContact(_prev, formData) {
  if (String(formData.get("_gotcha") || "").trim()) {
    return { ok: true, error: "", fieldErrors: {} };
  }

  const fieldErrors = {};
  for (const name of ["name", "contact", "message"]) {
    const msg = errorFor(name, String(formData.get(name) || ""));
    if (msg) fieldErrors[name] = msg;
  }
  if (Object.keys(fieldErrors).length) {
    return { ok: false, error: "", fieldErrors };
  }

  try {
    const res = await fetch(FORMSPREE, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });
    if (!res.ok) {
      return {
        ok: false,
        error: "No se pudo enviar. Inténtalo de nuevo.",
        fieldErrors: {},
      };
    }
    return { ok: true, error: "", fieldErrors: {} };
  } catch {
    return {
      ok: false,
      error: "No se pudo enviar. Inténtalo de nuevo.",
      fieldErrors: {},
    };
  }
}
