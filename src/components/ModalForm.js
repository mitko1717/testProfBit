import React, { useState } from "react";
import jsonData from "../backend/customer-message-form.json";
import jsonDataError from "../backend/customer-message-form-error.json";
import jsonDataSuccess from "../backend/customer-message-form-success.json";
/* Для сайта нужно реализовать модальную форму "Задать вопрос". 
На странице будет только одна кнопка "Задать вопрос", 
при клике на которую, будет открываться модальная форма. 
Для имитации бекенда нужно создать папку `backend` и туда положить 3 файла, 
указаных ниже. 
Для того чтобы получить данные формы нужно отправить запрос на
`{folder_name}/customer-message-form.json`. 
Получив ответ, требуется создать форму согласно данных в ответе. 
Для простоты реализации и тестирования у формы должно быть 2 кнопки (submit): 
"отправить с ошибкой", "отправить с успехом". 
При нажатии которых делаются запросы на `{folder_name}/customer-message-error.json` 
и `{folder_name}/customer-message-success.json` соответсвенно.  
*/
const ModalForm = () => {
  const loadData = JSON.parse(JSON.stringify(jsonData));
  const loadDataError = JSON.parse(JSON.stringify(jsonDataError));
  const loadDataSuccess = JSON.parse(JSON.stringify(jsonDataSuccess));

  const [errorForm, setErrorForm] = useState(false);
  const [successForm, setSuccessForm] = useState(false);
  const [value, setValue] = useState("");

  console.log(loadData);
  console.log(loadDataError);
  console.log(loadDataSuccess);
  return (
    <div>
      {loadData.form.map((f) => {
        return (
          <form key={Math.random()}>
            <label htmlFor={f.label}>{f.label}</label>
            <input
              type={f.type}
              required={f.attrs.required}
              placeholder={f.attrs.placeholder}
              name={f.name}
            />
          </form>
        );
      })}
      <button
        onClick={() => {
          setErrorForm(true);
          setSuccessForm(false);
        }}
      >
        отправить с ошибкой
      </button>
      <button
        onClick={() => {
          setSuccessForm(true);
          setErrorForm(false);
        }}
      >
        отправить с успехом
      </button>

      {successForm && <div>{loadDataSuccess.message}</div>}
      {successForm &&
        loadDataSuccess.form.map((f) => {
          return (
            <form key={Math.random()}>
              <label htmlFor={f.label}>{f.label}</label>
              <input
                type={f.type}
                required={f.attrs.required}
                placeholder={f.attrs.placeholder}
                name={f.name}
              />
            </form>
          );
        })}

      {errorForm && <div>ERROR HAPPENED</div>}
      {errorForm &&
        loadDataError.form.map((f) => {
          return (
            <form key={Math.random()}>
              <label htmlFor={f.label}>{f.label}</label>
              <input
                type={f.type}
                required={f.attrs.required}
                placeholder={f.attrs.placeholder}
                name={f.name}
                value={f.name}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
          );
        })}
    </div>
  );
};

export default ModalForm;
