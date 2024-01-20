import { FC } from "react";
import "./NewQuoteModal.css";
import { useForm } from "react-hook-form";
import { Quotes } from "../../types/types";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { useUsers } from "../../requests/users/useUsers";
import { useQuotes } from "../../requests/quotes/useQuotes";
type Props = {
  visible: boolean;
  changeVisibility: () => void;
  fetchQuotes: () => void;
};
const NewQuoteModal: FC<Props> = ({
  visible,
  changeVisibility,
  fetchQuotes,
}) => {
  const users = useUsers();
  const { sendQuote } = useQuotes();
  const { register, handleSubmit } = useForm<Quotes.QuotePost>();
  const handleInnerFormSubmit = (data: Quotes.QuotePost) => {
    return sendQuote({ ...data, quote_by: Number(data.quote_by) })
      .then(() => fetchQuotes())
      .then(() => changeVisibility());
  };
  if (!visible) return null;
  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        <span className="close" onClick={changeVisibility}>
          <Cross />
        </span>
        <form
          className="quotes-form"
          onSubmit={handleSubmit(handleInnerFormSubmit)}
        >
          <div className="textarea-box input-box">
            <label className="label" htmlFor="quote">
              Цитата:
            </label>
            <textarea {...register("quote", { required: true })} />
          </div>
          <div className="input-box">
            <label className="label" htmlFor="quote_by">
              Автор:
            </label>
            <select {...register("quote_by", { required: true })}>
              {users.map((user) => (
                <option key={user.id} value={Number(user.id)}>
                  {user.name}
                </option>
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
  );
};
export default NewQuoteModal;
