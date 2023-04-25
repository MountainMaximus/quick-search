import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import styles from "./PhoneForm.module.scss";

export const PhoneForm: React.FC = () => {
  const [phone, setPhone] = React.useState("");
  const [validationMassage, setValidationMassage] = React.useState<
    string | null
  >(null);
  const navigate = useNavigate();
  const phoneValidation = (data: string) => {
    let phone = data.match(/\d+/g)?.join("");
    if (phone)
      if (phone[0] === "8") phone = phone.replace("8", "7");
      else if (phone[0] !== "7") phone = "7" + phone;
    if (phone?.length !== 11) {
      setValidationMassage("Введен не корректный номер телефона");
      return false;
    }
    return phone;
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = Object.values(e.target).map((val) => val.value);
    const validationResult = phoneValidation(data[0]);
    if (validationResult) {
      alert("Вы были авторизованы по номеру +" + validationResult);
      console.log("phone:", validationResult);
      navigate("/product");
    }
  };
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationMassage(null);
    const firstDigit = e.target.value.match(/\d+/)?.[0][0];

    setPhone(
      firstDigit && firstDigit !== "7" && firstDigit !== "8"
        ? "+7" + e.target.value
        : e.target.value
    );
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.item}>
        <div>Форма авторизации</div>
      </div>
      <div className={styles.item}>
        <input
          className={`${styles.input} ${validationMassage ? styles.error : ""}`}
          type="text"
          placeholder="Номер телефона"
          required={true}
          value={phone}
          onChange={onChangePhone}
        />
        {validationMassage && (
          <span className={styles.errorMsg}>{validationMassage}</span>
        )}
      </div>
      <Button type="submit">Отправить</Button>
    </form>
  );
};
