import "./ContactForm.css";
import { useContactForm } from "./useContactForm.js";

function fieldClass(errors, name) {
  return errors[name]
    ? "contact-form__field is-invalid"
    : "contact-form__field";
}

export default function ContactForm() {
  const [state, formAction, pending] = useContactForm();

  return (
    <section
      className="contact-form"
      id="contacto"
      aria-labelledby="contact-form-heading"
    >
      <div className="contact-form__inner">
        <header className="contact-form__header">
          <p className="contact-form__kicker">Hablemos</p>
          <h2 id="contact-form-heading" className="contact-form__hook">
            ¿Tienes algo en mente? Escríbeme.
          </h2>
          <p className="contact-form__lede">
            Cuéntame sobre tu proyecto y te respondo en menos de 24h.
          </p>
        </header>
        <form
          className="contact-form__form"
          action={formAction}
          acceptCharset="UTF-8"
          noValidate
        >
          <input
            type="hidden"
            name="_subject"
            value="Portafolio: nuevo mensaje"
          />
          <div className="contact-form__hp" aria-hidden="true">
            <label htmlFor="contact-gotcha">Sitio web</label>
            <input
              id="contact-gotcha"
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="contact-form__row">
            <div className={fieldClass(state.fieldErrors, "name")}>
              <label className="contact-form__label" htmlFor="contact-name">
                Nombre
              </label>
              <input
                className="contact-form__control"
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                minLength={2}
                maxLength={120}
                required
                placeholder="Tu nombre o empresa"
                aria-invalid={Boolean(state.fieldErrors.name)}
                aria-describedby="contact-name-error"
              />
              <p
                className="contact-form__error"
                id="contact-name-error"
                data-error-for="name"
              >
                {state.fieldErrors.name}
              </p>
            </div>

            <div className={fieldClass(state.fieldErrors, "contact")}>
              <label className="contact-form__label" htmlFor="contact-email">
                Email o WhatsApp
              </label>
              <input
                className="contact-form__control"
                id="contact-email"
                name="contact"
                type="text"
                autoComplete="email"
                inputMode="email"
                minLength={5}
                maxLength={160}
                required
                pattern="^([^@\s]+@[^@\s]+\.[^@\s]{2,}|\+?[0-9][0-9\s().-]{6,24})$"
                title="Escribe un email o un número de WhatsApp."
                placeholder="tu@correo.com o +51..."
                aria-invalid={Boolean(state.fieldErrors.contact)}
                aria-describedby="contact-email-error"
              />
              <p
                className="contact-form__error"
                id="contact-email-error"
                data-error-for="contact"
              >
                {state.fieldErrors.contact}
              </p>
            </div>
          </div>

          <div className={fieldClass(state.fieldErrors, "message")}>
            <label className="contact-form__label" htmlFor="contact-message">
              ¿En qué te puedo ayudar?
            </label>
            <textarea
              className="contact-form__textarea"
              id="contact-message"
              name="message"
              minLength={10}
              maxLength={4000}
              rows={3}
              required
              placeholder="Describe brevemente lo que necesitas..."
              aria-invalid={Boolean(state.fieldErrors.message)}
              aria-describedby="contact-message-error"
            />
            <p
              className="contact-form__error"
              id="contact-message-error"
              data-error-for="message"
            >
              {state.fieldErrors.message}
            </p>
          </div>

          <div className="contact-form__actions">
            {state.ok ? (
              <p className="contact-form__status is-ok" role="status">
                Mensaje enviado. Te respondo pronto.
              </p>
            ) : null}
            {state.error ? (
              <p className="contact-form__status is-error" role="status">
                {state.error}
              </p>
            ) : null}
            <button
              className="contact-form__submit"
              type="submit"
              disabled={pending}
            >
              <span>{pending ? "Enviando…" : "Enviar mensaje"}</span>
              <span className="contact-form__arrow" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
