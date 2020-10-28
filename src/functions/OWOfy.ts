export  function OwOfy(v: string) {
    v = v.replace(/(?:r|l)/g, "w");
    v = v.replace(/(?:R|L)/g, "W");
    v = v.replace(/n([aeiou])/g, "ny$1");
    v = v.replace(/N([aeiou])/g, "Ny$1");
    v = v.replace(/N([AEIOU])/g, "Ny$1");
    v = v.replace(/ove/g, "uv");
    const faces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"]
    v = v.replace(
      /!+/g,
      " " + faces[Math.floor(Math.random() * faces.length)] + " "
    );
    return v
}