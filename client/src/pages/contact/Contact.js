import "./contact.css";

const Contact = () => {
  return (
    <div className="contactform">
      <form>
        <input
          name="name"
          type="text"
          class="feedback-input"
          placeholder="Nom"
        />
        <input
          name="email"
          type="text"
          class="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          class="feedback-input"
          placeholder="Message"
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Contact;
