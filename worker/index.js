function json(data, status = 200) {
  return Response.json(data, { status });
}

const CONTACT_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isPhone(value) {
  return /^\+?[0-9]{7,15}$/.test(value.replace(/[\s().-]/g, ""));
}

function fieldErrors(name, contact, message) {
  const errors = {};
  if (name.length < 2) errors.name = "Escribe tu nombre.";
  if (!CONTACT_EMAIL.test(contact) && !isPhone(contact)) {
    errors.contact = "Escribe un email o un WhatsApp.";
  }
  if (message.length < 10) {
    errors.message = "Cuéntame un poco más (al menos 10 caracteres).";
  }
  return errors;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/contact") {
      return json({ ok: false, error: "Not found" }, 404);
    }
    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405);
    }

    const form = await request.formData();
    if (String(form.get("_gotcha") || "").trim()) {
      return json({ ok: true });
    }

    const name = String(form.get("name") || "").trim();
    const contact = String(form.get("contact") || "").trim();
    const message = String(form.get("message") || "").trim();
    const errors = fieldErrors(name, contact, message);
    if (Object.keys(errors).length) {
      return json(
        { ok: false, error: "Revisa los campos.", fieldErrors: errors },
        400,
      );
    }

    await env.DB.prepare(
      "INSERT INTO leads (name, contact, message) VALUES (?, ?, ?)",
    )
      .bind(name, contact, message)
      .run();

    const mail = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM,
        to: [env.CONTACT_TO],
        subject: "Portafolio: nuevo mensaje",
        text: `Nombre: ${name}\nContacto: ${contact}\n\n${message}`,
      }),
    });
    if (!mail.ok) {
      console.error("Resend", mail.status, await mail.text());
    }

    return json({ ok: true });
  },
};
