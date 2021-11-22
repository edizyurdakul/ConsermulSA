import styles from "./Contact.module.scss";

const Contact = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }
  return (
    <div className={styles.wrapper}>
      <h1>Get In Touch</h1>

      <form onSubmit={handleOnSubmit} className={styles.container}>
        <p>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
