export const C = {
  ink: "#0F1214", panel: "#171C1F", panel2: "#1D2327", line: "#262E32",
  paper: "#E9E6DD", mute: "#7C8790", atk: "#D9622B", def: "#3E8FA6", ok: "#6E9B5E",
  s: "#D9622B", a: "#C9A24B", b: "#6E9B5E", cc: "#7C8790",
};

export const tierColor = (t) => (t === "S" ? C.s : t === "A" ? C.a : t === "B" ? C.b : C.cc);
