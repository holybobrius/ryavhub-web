import { FC, useState, useEffect } from "react";
import "./NewQuoteModal.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import store from "../../store/index";

interface Props {
  visible: boolean;
  changeVisibility: () => void;
  fetchQuotes: () => Promise<void>;
}

type FormValues = {
  quote: string;
  author: string;
  date: string;
};

const NewQuoteModal: FC<Props> = (props) => {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const r = await axios.get<any[]>("https://api.ryav.tk/v1/users");
      setUsers(r.data);
    })();
  }, []);
  const reduxStore = store.getState();

  const { register, handleSubmit } = useForm<FormValues>();
  return props.visible ? (
    <div className="modal" id="modal">
      <div className="modal-content">
        <span className="close" onClick={props.changeVisibility}>
          <svg
            className="close-icon"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2911 9.49742L18.8342 0.953506C18.9306 0.846691 18.9823 0.706878 18.9785 0.563014C18.9747 0.419151 18.9157 0.282256 18.8138 0.180674C18.7119 0.0790922 18.5748 0.0206035 18.4309 0.0173182C18.2871 0.0140328 18.1474 0.0662025 18.041 0.163025L9.49789 8.70694L0.954811 0.163025C0.849781 0.0586086 0.707704 0 0.559609 0C0.411515 0 0.269437 0.0586086 0.164408 0.163025C0.060001 0.268065 0.00139804 0.410157 0.00139804 0.558266C0.00139804 0.706374 0.060001 0.848466 0.164408 0.953506L8.70749 9.49742L0.164408 18.0413C0.112288 18.0934 0.0709408 18.1552 0.0427305 18.2233C0.0145202 18.2913 0 18.3643 0 18.438C0 18.5117 0.0145202 18.5846 0.0427305 18.6527C0.0709408 18.7207 0.112288 18.7825 0.164408 18.8346C0.269437 18.939 0.411515 18.9976 0.559609 18.9976C0.707704 18.9976 0.849781 18.939 0.954811 18.8346L9.49789 10.2907L18.041 18.8346C18.0931 18.8871 18.1551 18.9287 18.2235 18.9571C18.2918 18.9855 18.365 19.0001 18.439 19C18.5501 19.0001 18.6587 18.9672 18.7511 18.9054C18.8434 18.8436 18.9153 18.7558 18.9577 18.6531C19 18.5503 19.0109 18.4373 18.9889 18.3284C18.9669 18.2195 18.9131 18.1196 18.8342 18.0413L10.2911 9.49742Z"
              fill="white"
              fillOpacity="0.6"
            />
          </svg>
        </span>
        <form
          className="quotes-form"
          onSubmit={handleSubmit((data) => {
            //@ts-ignore
            axios
              .post(
                "https://api.ryav.tk/v1/quotes?token=" +
                  reduxStore.googleUser?.tokenId,
                {
                  quote: data.quote,
                  quote_by: Number(data.author),
                  date: data.date,
                }
              )
              .then(() => {
                props.fetchQuotes().then(() => props.changeVisibility());
              });
          })}
        >
          <div className="textarea-box input-box">
            <label className="label" htmlFor="quote">
              Цитата:
            </label>
            <textarea {...register("quote", { required: true })} />
          </div>
          <div className="input-box">
            <label className="label" htmlFor="author">
              Автор:
            </label>
            <select {...register("author", { required: true })}>
              {users.map((user) => (
                <option value={user.id}>{user.name}</option>
              ))}
            </select>
          </div>
          <div className="input-box">
            <label className="label" htmlFor="date">
              Дата:
            </label>
            <input
              className="input-date input-text"
              {...register("date", { required: true })}
              type="date"
            />
          </div>
          <button className="submit" type="submit">
            Добавить
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default NewQuoteModal;
