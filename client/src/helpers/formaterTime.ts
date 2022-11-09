const dateNow = (fecha: string) => {
    var today = new Date(fecha);

    const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
    };

    const time = today.toLocaleString("es-CO", options);
    return time;
};

export { dateNow };
