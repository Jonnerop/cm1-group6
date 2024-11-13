# Sign Up Page (by Mika Laakkonen)

## Imports

Import react, useState, and css

## Signup page component

### useStates and other constants

```
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("en");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailValidness, setEmailValidness] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const messages = [
    { id: 1, lang: "de", text: "Hallo" },
    { id: 2, lang: "en", text: "Hello" },
    { id: 3, lang: "fi", text: "Moi" },
    { id: 4, lang: "fr", text: "Bonjour" },
  ];
```

All the useStates and constants are listed above. These were added throughout coding whenever they were necessary.

### useState handler functions

```
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = () => {
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError("formatted incorrectly.");
      setEmailValidness("invalid");
    } else {
      setEmailError("correct.");
      setEmailValidness("valid");
    }
  };

  const checkPassStrength = (password) => {
    const length = password.length;
    return length > 8;
  };

  const handlePassStrength = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (!checkPassStrength(password)) {
      setPasswordStrength("weak");
    } else {
      setPasswordStrength("strong");
    }
  };
```

These functions set hook useStates depending on certain conditions. They were necessary to conditionally render text and css styling. "validateEmail" was created with the help of co-pilot, while the others took inspiration and improvement ideas from co-pilot.

### onSubmit function

```
const onSubmit = (e) => {
    e.preventDefault();
    handleEmailChange();
    const messageObj = messages.find((m) => m.lang === language);
    if (messageObj) {
      setMessage(messageObj.text);
    }
  };
```

Handles form submission. Prevents default behaviour and sets certain results based on form input values.

### Signup div element

```
  return (
    <div className="signup">
      <form onSubmit={onSubmit} className="form">
        <div className="email-box">
          <h2 className="email-title">Email</h2>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={
              emailValidness === "valid"
                ? "input-valid"
                : emailValidness === "invalid"
                ? "input-invalid"
                : "input"
            }
          />
          <p>
            {emailValidness === "valid"
              ? "Valid email address"
              : emailValidness === "invalid"
              ? "Invalid email address"
              : ""}
          </p>
        </div>
        <div className="password-box">
          <h2 className="password-title">Password</h2>
          <input
            type="password"
            onChange={handlePassStrength}
            value={password}
            className={
              passwordStrength === "strong"
                ? "password-strong"
                : "password-weak"
            }
          />
          <p className={passwordStrength === "strong" ? "pwts" : "pwtw"}>
            {passwordStrength === "strong"
              ? "Your password is strong"
              : "Your password is too weak"}
          </p>
        </div>
        <div className="nationality-box">
          <h2>Nationality</h2>
          <select
            name="nationality"
            id="nationality"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          >
            <option value="de">De</option>
            <option value="en">En</option>
            <option value="fi">Fi</option>
            <option value="fr">Fr</option>
          </select>
        </div>
        <button className="signup-btn">Sign up</button>
      </form>
      <hr className="line" />
      <div className="result-box">
        <p>{message}</p>
        <p>Your email address is: {email}</p>
        <p>Your email address is: {emailError} </p>
      </div>
    </div>
  );
```

The element returned by the SignupPage function. Includes two input fields (email and password), a select box for language-choice, and headers for all of them. Conditionally renders certain css styles and texts based on the values from the three fields. Some conditional rendering was done with the help of co-pilot.

## Sign Up Page Styling

´´´
.signup {
font-family: "Georgia", serif;
}

input,
button {
border-radius: 4px;
}

.input-valid {
border: 2px solid green;
}

.input-invalid {
border: 2px solid red;
}

.password-strong {
border: 2px solid green;
}

.password-weak {
border: 2px solid red;
}

.pwts {
color: green !important;
}

.pwtw {
color: red !important;
}

.signup-btn {
margin-left: 1rem;
padding: 0.75rem;
border: none;
background-color: rgb(14 165 233) !important;
color: white !important;
}

.line {
border-bottom: 1px solid #888;
}
´´´

Includes some very basic styling for the new components. Has styling for different classes, some of which are used for the same element based on conditions.

## Thoughts

This was a fun and interactive coding exercise. Despite the troubles css and git caused, it was good learning experience and enhanced my understanding of hook usestates and conditional rendering. However, there was not too much group interaction as everyone was focusing on their own components. Group interaction started increasing towards the end when branches needed merging and members started styling their components.
