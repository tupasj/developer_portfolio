import { useForm, ValidationError } from "@formspree/react";
import Styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjvzrbdp");

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="notification-box">
          {state.succeeded && (
            <div className="success">Email sent! &#128512;</div>
          )}
          <div className={Styles.error}>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <ValidationError errors={state.errors} />
          </div>
        </div>

        <input className={Styles.honeypot} type="text" name="_gotcha" />
        <input
          className={Styles.formInput}
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
        />
        <input
          className={Styles.formInput}
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
        />

        <button className={Styles.send} type="submit" disabled={state.submitting}>
          Send
          <span className={Styles.iconWrapper}>
            <i className="fa-solid fa-paper-plane"></i>
          </span>
        </button>
      </form>
    </div>
  );
};

export { ContactForm };
