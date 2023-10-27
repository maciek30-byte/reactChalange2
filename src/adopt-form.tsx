import type { Cat } from "./types";
import styles from "./styles.module.scss";

export const AdoptCatForm = ({ cat }: { cat: Cat | undefined }) => {
  return (
    <div>
      {cat ? <p>Adopt that cat: {cat.name}</p> : null}
      {cat ? (
        <p>
          Please fill your name here:
          <br />
          <input
            type="text"
            id="name"
            className={styles.input}
            placeholder="Your name here"
          />
          <br />
          <button>submit adoption request</button>
        </p>
      ) : (
        <p>
          Please leave us your email, so we can contact you:
          <br />
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Your email here"
          />
          <br />
          <button>submit request for information</button>
        </p>
      )}
    </div>
  );
};
