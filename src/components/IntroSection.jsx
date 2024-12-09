import React from "react";
// export default function IntroSection() {
//     return (
//       <section>
//         <h1 className="centered">
//           Получите профессию frontend-разработчика и постройте карьеру в IT
//         </h1>
//         <h3 className="centered" style={{color: '#666'}}>
//           Устроитесь на работу или вернем деньги, после прохождения полной
//           программы.
//         </h3>
//       </section>
//     );
// }
export default function IntroSection() {
    const e = React.createElement;
  return e("section", null, [
    e("h1", { className: "centered" }, "Result University"),
    e(
      "h3",
      { className: "centered", style: { color: "#666" } },
      "Устроитесь на работу или вернем деньги, после прохождения полной программы."
    ),
  ]);
}
