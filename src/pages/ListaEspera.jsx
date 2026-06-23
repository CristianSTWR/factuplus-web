import "../styles/lista-espera.css";
import logo from "../assets/logohd.png";
import { useState } from "react";


function ListaEspera() {

  const [usuario, setUsuario] = useState("")
  return (
    <section className="ListaEspera">

      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>
      <div className="blur blur-3"></div>

      <div className="card">

        <img src={logo} alt="FactuPlus" className="logo" />

        <div style={{ padding: 0, margin: 0 }}>
          <p style={{ background: "var(--muted2)", margin: 0, padding: ".3rem 3rem", fontSize: ".9rem", color: "var(--card)", display: "inline-flex", borderRadius: "999rem", alignItems: "center", gap: "5px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={18} fill="currentColor"><path d="M385.5 132.8C393.1 119.9 406.9 112 421.8 112L424 112C446.1 112 464 129.9 464 152C464 174.1 446.1 192 424 192L350.7 192L385.5 132.8zM254.5 132.8L289.3 192L216 192C193.9 192 176 174.1 176 152C176 129.9 193.9 112 216 112L218.2 112C233.1 112 247 119.9 254.5 132.8zM344.1 108.5L320 149.5L295.9 108.5C279.7 80.9 250.1 64 218.2 64L216 64C167.4 64 128 103.4 128 152C128 166.4 131.5 180 137.6 192L96 192C78.3 192 64 206.3 64 224L64 256C64 273.7 78.3 288 96 288L544 288C561.7 288 576 273.7 576 256L576 224C576 206.3 561.7 192 544 192L502.4 192C508.5 180 512 166.4 512 152C512 103.4 472.6 64 424 64L421.8 64C389.9 64 360.3 80.9 344.1 108.4zM544 336L344 336L344 544L480 544C515.3 544 544 515.3 544 480L544 336zM296 336L96 336L96 480C96 515.3 124.7 544 160 544L296 544L296 336z" /></svg>
            <strong> PRUEBA GRATIS POR 2 MESES

            </strong></p>

          <h2 style={{ padding: 0, marginBottom: "0.5rem" }}>Sé de las primeras empresas en probar <strong style={{ color: "var(--card)" }}>FactuPlus</strong></h2>

          <p style={{ color: "gray", fontWeight: 100, margin: 0 }}><span>El sistema de facturación inteligente que simplifica la gestión de tu negocio. Registrate y obtén acceso anticipado con</span> <span style={{ color: "var(--card)" }}>2 meses totalmente gratis.</span></p>

        </div>
        <div className="form-lista-espera">
          <h3 style={{ color: "var(--card)" }}>Únete a la lista de espera</h3>
          <form action="">
            <div className="input">
              <input
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="input-field"
                type="text"
                placeholder=" "
                autoComplete="off"
                minLength={3}
                maxLength={32}
                required
              />
              <label htmlFor="usuario" className="input-label">
                Nombre empresa
              </label>
            </div>
            <div className="input">
              <input
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="input-field"
                type="text"
                placeholder=" "
                autoComplete="off"
                minLength={3}
                maxLength={32}
                required
              />
              <label htmlFor="usuario" className="input-label">
                Nombre completo
              </label>
            </div>
            <div className="input">
              <input
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="input-field"
                type="text"
                placeholder=" "
                autoComplete="off"
                minLength={3}
                maxLength={32}
                required
              />
              <label htmlFor="usuario" className="input-label">
                Correo electrónico
              </label>
            </div>
            <div className="input">
              <input
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="input-field"
                type="text"
                placeholder=" "
                autoComplete="off"
                minLength={3}
                maxLength={32}
                required
              />
              <label htmlFor="usuario" className="input-label">
                Teléfono
              </label>
            </div>

            <div className="acciones">
              <button>Quiero acceso anticipado</button>
            </div>
          </form>

          <div
            className="footer"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: ".75rem",
              marginTop: "1rem",
              background: "var(--muted2)",
              padding: ".5rem 1rem",
              borderRadius: "1rem"
            }}
          >


            <p
              style={{
                margin: 0,
                fontSize: ".9rem",
                color: "var(--text-muted)",
                lineHeight: 1.5,
              }}
            >
              <strong>Prueba limitada:</strong> Solo 6 empresas serán seleccionadas para
              acceder primero a FactuPlus y disfrutar de 2 meses gratis.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ListaEspera;