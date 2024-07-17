import "../css/Form.css";

export default function ConnexionForm() {
  const handleSubmit = () => {};
  return (
    <main className="formMain">
      <form method="post" className="formGobalConnexion" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="mail">
          MAIL
        </label>
        <input className="formInput" type="email" name="mail" required />
        <label className="formLabel" htmlFor="mot de passe">
          MOT DE PASSE
        </label>
        <input className="formInput" type="password" name="password" required />
        <button className="formButton" type="submit">
          CONNEXION
        </button>
      </form>
    </main>
  );
}
