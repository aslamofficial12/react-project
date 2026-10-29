
export default function StepOne({
  formData,
  handleChange,
  next,
  errors,
}) {
  return (
    <div className="card">
      <h3>Step 1</h3>
      <h1>Personal Info</h1>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      {errors.firstName && (
        <p style={{ color: "red" }}>
          {errors.firstName}
        </p>
      )}

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />

      {errors.lastName && (
        <p style={{ color: "red" }}>
          {errors.lastName}
        </p>
      )}

      <button type="button" onClick={next}>
        Next →
      </button>
    </div>
  );
}
