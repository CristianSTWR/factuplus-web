export const inputStyles = {
  base: { width: "100%" },
  error: { color: "rgb(250,75,75)", border: "2px solid rgb(250,75,75)" },
  ok: { color: "var(--txt)", border: "2px solid var(--card)" },
};


export function capitalizarCadaPalabra(texto = "") {
  return texto.replace(/\p{L}+/gu, (palabra) => {

    if (palabra === palabra.toUpperCase()) {
      return palabra;
    }

    return (
      palabra.charAt(0).toLocaleUpperCase("es") +
      palabra.slice(1).toLocaleLowerCase("es")
    );
  });
}
export function soloMasNumerosYGuiones(texto = "") {
  return texto.replace(/[^\d+-]/g, "");
}

export function todoMayuscula(texto = "") {
  return texto.toLocaleUpperCase("es");
}

export const validarGmail = (correo = "") => {
  const v = correo.trim();
  return v.includes("@") && v.length >= 5;
};

export const soloGamil = (correo = "") => {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(
    correo.trim()
  );
};


export function formatoMoneda(valor) {
  const numero = new Intl.NumberFormat("es-DO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(valor || 0));

  return `$${numero}`;
}
export function formatearFechaHora(fechaISO) {
  if (!fechaISO) return "";

  const fecha = new Date(fechaISO);

  return fecha.toLocaleString("es-DO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}

export const tiempoRelativo = (fecha) => {
  if (!fecha) return "";

  const diff = Date.now() - new Date(fecha).getTime();

  if (diff < 60_000) return "justo ahora";

  const minutos = Math.floor(diff / 60_000);
  if (minutos === 1) return "hace 1 minuto";
  if (minutos < 60) return `hace ${minutos} minutos`;

  const horas = Math.floor(minutos / 60);
  if (horas === 1) return "hace 1 hora";
  if (horas < 24) return `hace ${horas} horas`;

  const dias = Math.floor(horas / 24);
  if (dias === 1) return "hace 1 día";
  return `hace ${dias} días`;
};

export const mostrarToast = (msg, type = "error") => {
  setToast({
    msg,
    type,
    visible: true
  });

  setTimeout(() => {
    setToast(t => ({ ...t, visible: false }));
  }, 4000);
};


export function formatearStock(valor, permiteDecimal, esBalanza) {
  const numero = Number(valor || 0);


  if (!permiteDecimal) {
    return String(Math.trunc(numero));
  }


  if (esBalanza) {
    const fijo = Number(numero.toFixed(3));
    return fijo % 1 === 0 ? String(Math.trunc(fijo)) : fijo.toString();
  }


  if (numero % 1 === 0) {
    return String(Math.trunc(numero));
  }

  return Number(numero.toFixed(3)).toString();
}

export const formatearDecimal = (valor) => {
  if (!valor) return "";
  return Number(valor).toFixed(2);
};

export const soloNumerosDecimal = (valor) => {
  return valor.replace(/[^0-9.]/g, "");
};

export const primeraMayuscula = (texto = "") => {
  texto = texto.trimStart();

  if (!texto) return "";

  return texto[0].toUpperCase() + texto.slice(1);
};

// helpers/inputHelpers.js
export const soloEntradaDecimal = (value, maxLength = 10) => {
  let cleanValue = value.replace(/[^0-9.]/g, "");

  const parts = cleanValue.split(".");
  if (parts.length > 2) {
    cleanValue = parts[0] + "." + parts.slice(1).join("");
  }

  return cleanValue.slice(0, maxLength);
};

export function handleAutorizar(usuario, setUsuarioAutorizado) {
  setUsuarioAutorizado(usuario);
}


export function formatearTexto(
  texto = "",
  modo = "capitalizar"
) {

  if (modo === "mayuscula") {
    return texto.toLocaleUpperCase("es");
  }

  return texto.replace(/\p{L}+/gu, (palabra) => {
    return (
      palabra.charAt(0).toLocaleUpperCase("es") +
      palabra.slice(1).toLocaleLowerCase("es")
    );
  });
}