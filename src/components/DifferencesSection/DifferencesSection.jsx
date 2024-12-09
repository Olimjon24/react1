import Button from "../Button/Button.jsx";

import { differences } from "../../data";
import { useState } from "react";
export default function DifferencesSection() {
     const [contentType, setContentType] = useState(null);
     function handleClick(type) {
       setContentType(type);
     }
    return (
      <section>
        <h3>Чем мы отличаемся от других</h3>
        <Button
          isActive={contentType === "way"}
          buttonClick={() => handleClick("way")}
        >
          Подход
        </Button>
        <Button
          isActive={contentType === "easy"}
          buttonClick={() => handleClick("easy")}
        >
          Доступность
        </Button>
        <Button
          isActive={contentType === "program"}
          buttonClick={() => handleClick("program")}
        >
          Концентрация
        </Button>
        {!contentType && <p>Нажми на кнопку</p>}
        {contentType && <p>{differences[contentType]}</p>}
      </section>
    );
}