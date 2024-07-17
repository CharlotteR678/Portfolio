import "../css/Form.css";

export default function FormUser() {
  const handleSubmit = () => {};
  return (
    <main className="formMain">
      <h2 className="formTitle">NOUVEL UTILISATEUR</h2>
      <form method="post" className="formGobal" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="lastname">
          NOM
        </label>
        <input className="formInput" type="text" name="name" required />
        <label className="formLabel" htmlFor="lastname">
          MAIL
        </label>
        <input className="formInput" type="email" name="mail" required />
        <label className="formLabel" htmlFor="lastname">
          MOT DE PASSE
        </label>
        <input className="formInput" type="password" name="password" required />
        <button className="formButton" type="submit">
          Ajouter un utilisateur
        </button>
      </form>
    </main>
  );
}
