import { useInputPage } from "./hooks";

export function InputPage() {
  const { register, handleSubmit, onSubmit, isLoading } = useInputPage();

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            {...register("name", { required: true })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="keywords">Keywords:</label>
          <input
            id="keywords"
            type="text"
            {...register("keywords", { required: true })}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
