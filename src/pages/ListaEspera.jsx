import "../styles/lista-espera.css";
import logo from "../assets/logohd.png";
import Toast from "../components/Toast";
import useToast from "../components/useToast";
import "../styles/toast.css";
import { capitalizarCadaPalabra, formatearTexto, validarGmail, soloMasNumerosYGuiones } from "../hooks/Helper";
import { useState, useMemo } from "react";


function ListaEspera() {

  const [empresaRegistrada, setEmpresaRegistrada] = useState(false)
  const {
    toast,
    mostrarToast
  } = useToast();


  const [form, setForm] = useState({
    empresa: "",
    nombre: "",
    correo: "",
    telefono: ""
  });

  const [loader, setLoader] = useState(false)

  const cambiarInput = (campo, valor) => {
    setForm((prev) => ({
      ...prev,
      [campo]: valor
    }));
  };

  const formularioValido = useMemo(() => {
    if (!form.empresa.trim() || !form.nombre.trim() || !form.telefono.trim()) return false;


    if (!validarGmail(form.correo)) {
      return false;
    }

    return true;
  }, [form]);

  const enviar = async (e) => {
    e.preventDefault();

    if (loader) return

    setLoader(true)
    try {

      const response = await fetch(
        "https://api.factuplus.com.do/lista-espera",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            empresa: form.empresa,
            nombre: form.nombre,
            correo: form.correo,
            telefono: form.telefono
          })
        }
      );

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        mostrarToast(
          data.detail,
          "error"
        );
        setLoader(false)
        return
      }

      setEmpresaRegistrada(true);
      setLoader(false)

    } catch (err) {

      console.error(err);

      alert(
        err.message || "Error al enviar"
      );

    }
  };

  return (
    <div className="ListaEspera">

      <Toast
        visible={toast.visible}
        type={toast.type}
        msg={toast.msg}
      />

      {!empresaRegistrada ? (
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
            <form onSubmit={enviar}>
              <div className="input">
                <input
                  id="usuario"
                  value={form.empresa}
                  onChange={(e) =>
                    cambiarInput(
                      "empresa",
                      capitalizarCadaPalabra(e.target.value)
                    )
                  }
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
                  value={form.nombre}
                  onChange={(e) =>
                    cambiarInput(
                      "nombre",
                      formatearTexto(e.target.value)
                    )
                  }
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
                  value={form.correo}

                  onChange={(e) =>
                    cambiarInput(
                      "correo",
                      e.target.value
                    )
                  }
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
                  value={form.telefono}
                  onChange={(e) =>
                    cambiarInput(
                      "telefono",
                      soloMasNumerosYGuiones(e.target.value)
                    )
                  }
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
                <button style={{
                  backgroundColor: formularioValido ? "var(--card)" : "#bfc3c7",

                }}
                  disabled={!formularioValido}>{loader ? <span className="loader-white"></span> : "Quiero acceso anticipado"}</button>
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
                <strong>Prueba limitada:</strong> Solo 10 empresas serán seleccionadas para
                acceder primero a FactuPlus y disfrutar de 2 meses gratis.
              </p>
            </div>
          </div>

        </div>
      ) : (
        <div className="registro-exitoso">

          <div className="check-container">
            <svg
              className="check-icon"
              viewBox="0 0 52 52"
            >
              <circle
                className="check-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="check-path"
                fill="none"
                d="M14 27l7 7 17-17"
              />
            </svg>
          </div>

          <h2>¡Registro completado!</h2>

          <p>
            Tu empresa ha sido agregada exitosamente a la lista de espera de
            <strong> FactuPlus</strong>.
          </p>

          <div className="beneficios">
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} viewBox="0 0 640 640"><path d="M192 384L88.5 384C63.6 384 48.3 356.9 61.1 335.5L114 247.3C122.7 232.8 138.3 224 155.2 224L250.2 224C326.3 95.1 439.8 88.6 515.7 99.7C528.5 101.6 538.5 111.6 540.3 124.3C551.4 200.2 544.9 313.7 416 389.8L416 484.8C416 501.7 407.2 517.3 392.7 526L304.5 578.9C283.2 591.7 256 576.3 256 551.5L256 448C256 412.7 227.3 384 192 384L191.9 384zM464 224C464 197.5 442.5 176 416 176C389.5 176 368 197.5 368 224C368 250.5 389.5 272 416 272C442.5 272 464 250.5 464 224z" /></svg>
              <span>Acceso anticipado</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} viewBox="0 0 640 640"><path d="M385.5 132.8C393.1 119.9 406.9 112 421.8 112L424 112C446.1 112 464 129.9 464 152C464 174.1 446.1 192 424 192L350.7 192L385.5 132.8zM254.5 132.8L289.3 192L216 192C193.9 192 176 174.1 176 152C176 129.9 193.9 112 216 112L218.2 112C233.1 112 247 119.9 254.5 132.8zM344.1 108.5L320 149.5L295.9 108.5C279.7 80.9 250.1 64 218.2 64L216 64C167.4 64 128 103.4 128 152C128 166.4 131.5 180 137.6 192L96 192C78.3 192 64 206.3 64 224L64 256C64 273.7 78.3 288 96 288L544 288C561.7 288 576 273.7 576 256L576 224C576 206.3 561.7 192 544 192L502.4 192C508.5 180 512 166.4 512 152C512 103.4 472.6 64 424 64L421.8 64C389.9 64 360.3 80.9 344.1 108.4zM544 336L344 336L344 544L480 544C515.3 544 544 515.3 544 480L544 336zM296 336L96 336L96 480C96 515.3 124.7 544 160 544L296 544L296 336z" /></svg>
              <span>2 meses gratis</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} viewBox="0 0 640 640"><path d="M64 176C64 149.5 85.5 128 112 128L528 128C554.5 128 576 149.5 576 176L576 257.4C551.6 246.2 524.6 240 496 240C408.3 240 334.3 298.8 311.3 379.2C304.2 377.9 297.2 375 291.2 370.4L83.2 214.4C71.1 205.3 64 191.1 64 176zM304 432C304 460.6 310.2 487.6 321.4 512L128 512C92.7 512 64 483.3 64 448L64 260L262.4 408.8C275 418.2 289.3 424.2 304.1 426.7C304.1 428.5 304 430.2 304 432zM352 432C352 352.5 416.5 288 496 288C575.5 288 640 352.5 640 432C640 511.5 575.5 576 496 576C416.5 576 352 511.5 352 432zM553.4 371.1C546.3 365.9 536.2 367.5 531 374.6L478 447.5L451.2 420.7C445 414.5 434.8 414.5 428.6 420.7C422.4 426.9 422.4 437.1 428.6 443.3L468.6 483.3C471.9 486.6 476.5 488.3 481.2 487.9C485.9 487.5 490.1 485.1 492.9 481.4L556.9 393.4C562.1 386.3 560.5 376.2 553.4 371.1z" /></svg>
              <span>Notificación por correo</span>
            </div>
          </div>

          <small>
            Solo 10 empresas serán seleccionadas para formar parte del lanzamiento inicial.
          </small>
        </div>
      )

      }

    </div>
  );
}

export default ListaEspera;