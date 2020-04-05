import React from "react";
import { connect } from "react-redux";
import Results from "./Results";
import { validateInput } from "./utils/validate";
import styles from "./App.module.scss";
import { fetchCities, clearCities } from "./redux/actions";

function App({ fetchCities, clearCities, cities, loading, error }) {
  const [input, setInput] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);
  const [isTouched, setIsTouched] = React.useState(false);

  const onChangeHandler = (e) => {
    setIsTouched(true);
    setIsValid(validateInput(e.target.value));
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!validateInput(input)) {
      setIsValid(false);
      clearCities();
      return;
    }

    fetchCities(input);
    setInput("");
    setIsTouched(false);
    setIsValid(false);
  };

  return (
    <main>
      <h1>City Search</h1>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <label htmlFor="city-search" className={styles.label}>
          Type the name of your favourite city
        </label>
        <input
          type="text"
          aria-label="city search"
          id="city-search"
          value={input}
          onChange={onChangeHandler}
          className={`${isTouched && !isValid && styles.invalid} ${
            styles.input
          }`}
        />
        <button type="submit">Search</button>
        {loading && <div>Loading...</div>}
        {!isValid && isTouched && <p>Please provide the valid input.</p>}
        {isTouched && cities?.length === 0 && <p>No results</p>}
        {cities?.length > 0 && <p>Total results: {cities.length}</p>}
      </form>
      {!loading && !error && <Results cities={cities} />}
    </main>
  );
}

const mapStateToProps = (state) => ({
  cities: state.cities,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchCities,
  clearCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
